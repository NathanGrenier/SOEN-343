import { defineConfig, loadEnv, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";

const ROOT_DIR = "./../../";


export default defineConfig((env: ConfigEnv) => {
  const envars = loadEnv(env.mode, ROOT_DIR);
  const serverURL = new URL(envars.VITE_SERVER_URL ?? "http://localhost:3001");
  const serverAPIPath = envars.API_PATH ?? "/api";

  return {
    envDir: ROOT_DIR,

    // make the API path globally available in the client
    define: {
      __API_PATH__: JSON.stringify(serverAPIPath),
    },

    plugins: [react()],

    server: {
      host: true,
      port: 5173,
      proxy: {
        // proxy requests with the API path to the server
        // http://localhost:5173/api -> http://localhost:3001/api
        [serverAPIPath]: serverURL.origin,
      },
    },

    // Ensure assets like .png, .jpg are properly handled
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],

    resolve: {
      alias: {
        '@': ROOT_DIR,
      },
    },
  };
});
