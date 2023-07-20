import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.zoobitat.app",
  appName: "zoobitat-app",
  webDir: "build",
  server: {
    url: "http://zoobitat.joswald.info:7106/api/",
  },
};

export default config;
