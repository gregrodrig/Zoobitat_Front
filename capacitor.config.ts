import { CapacitorConfig } from "@capacitor/cli";
import { networkInterfaces } from "os";

// Función para obtener la dirección IP de la máquina por defecto
function getDefaultIPAddress(): string | undefined {
  const interfaces = networkInterfaces();
  for (const interfaceName of Object.keys(interfaces)) {
    const addresses = interfaces[interfaceName];
    for (const address of addresses) {
      if (address.family === "IPv4" && !address.internal) {
        return address.address;
      }
    }
  }
  return undefined;
}

// Obtener la dirección IP por defecto
const defaultIP = getDefaultIPAddress();

if (!defaultIP) {
  console.error("No se pudo obtener la dirección IP por defecto.");
  process.exit(1);
}

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "zoobitat_front",
  webDir: "build",
  server: {
    url: `http://${defaultIP}:3000`, // Utilizar la dirección IP por defecto en la URL
    cleartext: true,
  },
};

export default config;

// import { CapacitorConfig } from "@capacitor/cli";

// const config: CapacitorConfig = {
//   appId: "com.example.app",
//   appName: "zoobitat_front",
//   webDir: "build",
//   server: {
//     url: "http://192.168.102.52:3000",
//     cleartext: true,
//     // androidScheme: 'https'
//   },
// };

// export default config;
