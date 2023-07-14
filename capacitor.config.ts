import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zoobitat.zoobitat',
  appName: 'zoobitat',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
