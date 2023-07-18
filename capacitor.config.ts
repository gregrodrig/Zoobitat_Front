import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zoobitat.app',
  appName: 'zooobitat',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
