import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.zoobitat.app",
  appName: "zoobitat-app",
  webDir: "build",
  server: {
    androidScheme: "https",
  },
};

export default config;
