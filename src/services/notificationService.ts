import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const NOTIFICATION_STORAGE_KEY = 'nihongo_notifications_enabled';
const NOTIFICATION_TIME_KEY = 'nihongo_notification_time';
const DAILY_REMINDER_ID = 1001;

export const REMINDER_MESSAGES = [
  {
    title: '🔥 ¡Mantén viva tu racha en NihonGo!',
    body: 'Practica 5 minutos hoy y continúa tu camino hacia el dominio del japonés (Genki).'
  },
  {
    title: '🗾 ¡Hora de estudiar japonés!',
    body: 'Mary y Takeshi te están esperando para tu lección diaria de hoy.'
  },
  {
    title: '⚡ ¡Tus corazones están listos!',
    body: 'Completa una lección en NihonGo!, gana gemas y sube de nivel en el Roadmap.'
  },
  {
    title: '🌸 Un pequeño paso cada día',
    body: 'Repasa tus flashcards con repetición espaciada (SRS) y no olvides tus Kanas.'
  }
];

export const notificationService = {
  isEnabled(): boolean {
    try {
      const saved = localStorage.getItem(NOTIFICATION_STORAGE_KEY);
      return saved === null ? false : saved === 'true';
    } catch {
      return false;
    }
  },

  getReminderTime(): string {
    try {
      return localStorage.getItem(NOTIFICATION_TIME_KEY) || '20:00';
    } catch {
      return '20:00';
    }
  },

  async requestPermission(): Promise<boolean> {
    if (Capacitor.isNativePlatform()) {
      try {
        const perm = await LocalNotifications.requestPermissions();
        return perm.display === 'granted';
      } catch (e) {
        console.warn('Error requesting native notification permission:', e);
        return false;
      }
    } else if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const res = await Notification.requestPermission();
        return res === 'granted';
      } catch {
        return false;
      }
    }
    return false;
  },

  async scheduleDailyReminder(timeStr: string = '20:00'): Promise<boolean> {
    const hasPerm = await this.requestPermission();
    if (!hasPerm) return false;

    const [hourStr, minStr] = timeStr.split(':');
    const hour = parseInt(hourStr, 10) || 20;
    const minute = parseInt(minStr, 10) || 0;

    localStorage.setItem(NOTIFICATION_STORAGE_KEY, 'true');
    localStorage.setItem(NOTIFICATION_TIME_KEY, timeStr);

    if (Capacitor.isNativePlatform()) {
      try {
        // Cancel previous reminder if existing
        await LocalNotifications.cancel({ notifications: [{ id: DAILY_REMINDER_ID }] }).catch(() => {});

        // Pick random message
        const msg = REMINDER_MESSAGES[Math.floor(Math.random() * REMINDER_MESSAGES.length)];

        // Calculate next trigger date
        const now = new Date();
        const trigger = new Date();
        trigger.setHours(hour, minute, 0, 0);
        if (trigger.getTime() <= now.getTime()) {
          trigger.setDate(trigger.getDate() + 1);
        }

        await LocalNotifications.schedule({
          notifications: [
            {
              id: DAILY_REMINDER_ID,
              title: msg.title,
              body: msg.body,
              schedule: {
                at: trigger,
                repeats: true,
                every: 'day'
              },
              sound: undefined,
              actionTypeId: '',
              extra: null
            }
          ]
        });
        return true;
      } catch (err) {
        console.warn('Failed to schedule native notification:', err);
        return false;
      }
    } else {
      // In web browser, preference saved
      return true;
    }
  },

  async cancelDailyReminder(): Promise<void> {
    localStorage.setItem(NOTIFICATION_STORAGE_KEY, 'false');
    if (Capacitor.isNativePlatform()) {
      try {
        await LocalNotifications.cancel({ notifications: [{ id: DAILY_REMINDER_ID }] });
      } catch (e) {
        console.warn('Error canceling notifications:', e);
      }
    }
  },

  async sendTestNotification(): Promise<boolean> {
    const hasPerm = await this.requestPermission();
    if (!hasPerm) return false;

    const msg = REMINDER_MESSAGES[Math.floor(Math.random() * REMINDER_MESSAGES.length)];

    if (Capacitor.isNativePlatform()) {
      try {
        await LocalNotifications.schedule({
          notifications: [
            {
              id: Math.floor(Math.random() * 10000) + 2000,
              title: msg.title,
              body: msg.body,
              schedule: { at: new Date(Date.now() + 1000) }
            }
          ]
        });
        return true;
      } catch (err) {
        console.warn('Error sending test notification:', err);
        return false;
      }
    } else if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification(msg.title, {
          body: msg.body,
          icon: './app-icon.png'
        });
        return true;
      }
    }
    return false;
  }
};
