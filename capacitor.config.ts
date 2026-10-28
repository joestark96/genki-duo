import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.genkiduo.japanese',
  appName: 'GenkiDuo Japanese',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

