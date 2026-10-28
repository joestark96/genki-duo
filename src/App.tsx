import React, { useState, useEffect } from 'react';
import { setupIonicReact, IonApp, IonContent } from '@ionic/react';
import { UserProfile, Unit, Flashcard } from './types';
import { genkiCurriculum } from './data/genkiCurriculum';
import { initialFlashcards } from './data/flashcardsData';
import { dbService } from './services/db';
import { sound } from './services/sound';
import { TopBar } from './components/TopBar';
import { BottomNav, NavTab } from './components/BottomNav';
import { RoadmapPage } from './pages/RoadmapPage';
import { TheoryPage } from './pages/TheoryPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { KanaPage } from './pages/KanaPage';
import { ProfilePage } from './pages/ProfilePage';

// Ionic core CSS
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact({
  mode: 'ios' // Sleek uniform aesthetic
});

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('roadmap');
  const [profile, setProfile] = useState<UserProfile>({
    id: 'local_user',
    username: 'Estudiante Genki',
    xp: 0,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    hearts: 5,
    maxHearts: 5,
    gems: 100,
    soundEnabled: true,
    furiganaMode: 'always',
    showRomaji: true,
    darkMode: false
  });

  const [units, setUnits] = useState<Unit[]>(genkiCurriculum);
  const [flashcards, setFlashcards] = useState<Flashcard[]>(initialFlashcards);
  const [loading, setLoading] = useState(true);
  const [theoryUnitId, setTheoryUnitId] = useState<number>(0);

  const handleOpenTheory = (unitId: number) => {
    setTheoryUnitId(unitId);
    setActiveTab('theory');
  };

  // Initialize SQLite and load user state on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        await dbService.init();

        // 1. Load user profile
        const userProf = await dbService.getUserProfile();
        setProfile(userProf);
        sound.setEnabled(userProf.soundEnabled);
        if (userProf.darkMode) {
          document.documentElement.classList.add('dark');
          document.body.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
          document.body.classList.remove('dark');
        }

        // 2. Load lesson progress and sync with units
        const progressMap = await dbService.getLessonProgress();
        setUnits(prevUnits => {
          return prevUnits.map(unit => ({
            ...unit,
            nodes: unit.nodes.map(node => {
              const saved = progressMap[node.id];
              if (saved) {
                return {
                  ...node,
                  unlocked: saved.unlocked,
                  completedSteps: saved.completedSteps,
                  stars: saved.stars
                };
              }
              return node;
            })
          }));
        });

        // 3. Load flashcard SRS
        const srsMap = await dbService.getFlashcardSRSMap();
        setFlashcards(prevCards => {
          return prevCards.map(card => {
            const srs = srsMap[card.id];
            if (srs) {
              return {
                ...card,
                srsLevel: srs.srsLevel,
                intervalDays: srs.intervalDays,
                nextReviewDate: srs.nextReviewDate,
                timesReviewed: srs.timesReviewed,
                timesCorrect: srs.timesCorrect
              };
            }
            return card;
          });
        });
      } catch (err) {
        console.error('Error loading data from SQLite:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Sound toggle handler
  const handleSoundToggle = async () => {
    const newSoundState = !profile.soundEnabled;
    sound.setEnabled(newSoundState);
    const updated = { ...profile, soundEnabled: newSoundState };
    setProfile(updated);
    await dbService.saveUserProfile(updated);
  };

  // Romaji toggle handler
  const handleToggleRomaji = async () => {
    sound.playTap();
    const updated: UserProfile = { ...profile, showRomaji: !profile.showRomaji };
    setProfile(updated);
    await dbService.saveUserProfile(updated);
  };

  // Dark mode toggle handler
  const handleToggleDarkMode = async () => {
    sound.playTap();
    const newDarkMode = !profile.darkMode;
    const updated: UserProfile = { ...profile, darkMode: newDarkMode };
    setProfile(updated);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    await dbService.saveUserProfile(updated);
  };

  // Deduct heart on wrong answer
  const handleDeductHeart = async () => {
    if (profile.hearts <= 0) return;
    const updated = { ...profile, hearts: profile.hearts - 1 };
    setProfile(updated);
    await dbService.saveUserProfile(updated);
  };

  // Refill hearts using gems
  const handleRefillHearts = async () => {
    if (profile.gems < 30) return;
    const updated = {
      ...profile,
      hearts: profile.maxHearts,
      gems: profile.gems - 30
    };
    setProfile(updated);
    await dbService.saveUserProfile(updated);
  };

  // Complete a lesson node: mark completed, award XP, unlock next node in curriculum
  const handleCompleteLesson = async (nodeId: string, earnedXp: number, stars: number) => {
    // 1. Update Profile (XP + gems)
    const updatedProfile: UserProfile = {
      ...profile,
      xp: profile.xp + earnedXp,
      gems: profile.gems + 10
    };
    setProfile(updatedProfile);
    await dbService.saveUserProfile(updatedProfile);

    // 2. Update node and find next node to unlock
    let foundCurrent = false;
    let nextNodeToUnlock: { nodeId: string; unitId: number } | null = null;

    const newUnits = units.map(unit => {
      const newNodes = unit.nodes.map(node => {
        if (node.id === nodeId) {
          foundCurrent = true;
          return {
            ...node,
            stars: Math.max(node.stars, stars),
            completedSteps: node.totalSteps
          };
        }
        if (foundCurrent && !nextNodeToUnlock && !node.unlocked) {
          nextNodeToUnlock = { nodeId: node.id, unitId: unit.id };
          return {
            ...node,
            unlocked: true
          };
        }
        return node;
      });
      return { ...unit, nodes: newNodes };
    });

    setUnits(newUnits);

    // 3. Save completed node to SQLite
    const currentUnit = units.find(u => u.nodes.some(n => n.id === nodeId));
    await dbService.saveLessonNodeProgress(nodeId, currentUnit?.id || 0, true, 3, 3, stars);

    // 4. Save next unlocked node to SQLite if applicable
    if (nextNodeToUnlock) {
      await dbService.saveLessonNodeProgress(
        (nextNodeToUnlock as { nodeId: string; unitId: number }).nodeId,
        (nextNodeToUnlock as { nodeId: string; unitId: number }).unitId,
        true,
        0,
        3,
        0
      );
    }
  };

  // Skip a unit and immediately unlock the next one
  const handleSkipUnit = async (unitId: number) => {
    const unitIndex = units.findIndex(u => u.id === unitId);
    if (unitIndex === -1) return;

    const targetUnit = units[unitIndex];
    const isUnlocked = targetUnit.nodes.some(n => n.unlocked);
    if (!isUnlocked) return;

    // 1. Mark all nodes in this unit as completed with at least 1 star
    const updatedNodes = targetUnit.nodes.map(n => ({
      ...n,
      unlocked: true,
      completedSteps: n.totalSteps,
      stars: Math.max(n.stars, 1)
    }));

    // 2. Unlock the first node of the next unit if it exists
    let nextUnitFirstNodeId: string | null = null;
    let nextUnitId: number | null = null;

    const newUnits = units.map((unit, idx) => {
      if (idx === unitIndex) {
        return { ...unit, nodes: updatedNodes };
      }
      if (idx === unitIndex + 1 && unit.nodes.length > 0) {
        nextUnitFirstNodeId = unit.nodes[0].id;
        nextUnitId = unit.id;
        const newNodes = [...unit.nodes];
        newNodes[0] = { ...newNodes[0], unlocked: true };
        return { ...unit, nodes: newNodes };
      }
      return unit;
    });

    setUnits(newUnits);

    // 3. Award +50 XP and play victory sound
    const updatedProfile: UserProfile = {
      ...profile,
      xp: profile.xp + 50,
      gems: profile.gems + 20
    };
    setProfile(updatedProfile);
    await dbService.saveUserProfile(updatedProfile);

    // 4. Persist to SQLite
    for (const node of updatedNodes) {
      await dbService.saveLessonNodeProgress(node.id, unitId, true, node.totalSteps, node.totalSteps, node.stars);
    }
    if (nextUnitFirstNodeId && nextUnitId !== null) {
      await dbService.saveLessonNodeProgress(nextUnitFirstNodeId, nextUnitId, true, 0, 3, 0);
    }

    sound.playLessonComplete();
  };

  // Rate a flashcard in SRS
  const handleRateCard = async (cardId: string, category: string, rating: 'again' | 'hard' | 'good' | 'easy') => {
    await dbService.updateFlashcardSRS(cardId, category, rating);

    // Also award +2 XP for studying flashcards
    const updatedProfile: UserProfile = {
      ...profile,
      xp: profile.xp + 2
    };
    setProfile(updatedProfile);
    await dbService.saveUserProfile(updatedProfile);

    // Refresh local state
    const srsMap = await dbService.getFlashcardSRSMap();
    setFlashcards(prev => prev.map(c => {
      if (c.id === cardId && srsMap[cardId]) {
        return {
          ...c,
          srsLevel: srsMap[cardId].srsLevel,
          intervalDays: srsMap[cardId].intervalDays,
          nextReviewDate: srsMap[cardId].nextReviewDate
        };
      }
      return c;
    }));
  };

  // Reset database progress
  const handleResetProgress = async () => {
    await dbService.resetAllProgress();
    window.location.reload();
  };

  return (
    <IonApp className="font-['Nunito',sans-serif]">
      <IonContent fullscreen className="bg-gray-50 dark:bg-[#131f24] transition-colors duration-200">
        <div className="min-h-screen bg-gray-50 dark:bg-[#131f24] text-gray-800 dark:text-gray-100 flex flex-col transition-colors duration-200">
          {/* Top Status Bar (Duolingo style) */}
          <TopBar profile={profile} onSoundToggle={handleSoundToggle} />

          {/* Active Tab Screen */}
          <main className="flex-1">
            {activeTab === 'roadmap' && (
              <RoadmapPage
                units={units}
                userProfile={profile}
                onCompleteLesson={handleCompleteLesson}
                onSkipUnit={handleSkipUnit}
                onDeductHeart={handleDeductHeart}
                onOpenTheory={handleOpenTheory}
              />
            )}
            {activeTab === 'theory' && (
              <TheoryPage
                initialUnitId={theoryUnitId}
                onBackToRoadmap={() => setActiveTab('roadmap')}
              />
            )}
            {activeTab === 'flashcards' && (
              <FlashcardsPage
                cards={flashcards}
                onRateCard={handleRateCard}
                showRomaji={profile.showRomaji}
              />
            )}
            {activeTab === 'kanas' && (
              <KanaPage showRomaji={profile.showRomaji} />
            )}
            {activeTab === 'profile' && (
              <ProfilePage
                profile={profile}
                units={units}
                onRefillHearts={handleRefillHearts}
                onResetProgress={handleResetProgress}
                onToggleRomaji={handleToggleRomaji}
                onToggleDarkMode={handleToggleDarkMode}
              />
            )}
          </main>

          {/* Bottom Navigation */}
          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </IonContent>
    </IonApp>
  );
};

export default App;

