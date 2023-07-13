import { CapacitorConfig } from "@capacitor/cli";
import { networkInterfaces } from "os";

// Obtén la dirección IP local del ordenador
function getLocalIPAddress() {
  const interfaces = networkInterfaces();

  for (const interfaceName in interfaces) {
    const networkInterface = interfaces[interfaceName];
    for (const info of networkInterface) {
      if (!info.internal && info.family === "IPv4") {
        return info.address;
      }
    }
  }

  return "127.0.0.1"; // Dirección IP predeterminada si no se encuentra ninguna dirección IP local
}

const localIPAddress = getLocalIPAddress();
const port = 3000; // Puerto por defecto

const config: CapacitorConfig = {
  appId: "com.zoobitat.app",
  appName: "zoobitat-app",
  webDir: "build",
  server: {
    url: `http://${localIPAddress}:${port}`,
    cleartext: true,
  },
};

export default config;
