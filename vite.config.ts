import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ isSsrBuild }) => ({
    build: {
        rollupOptions: isSsrBuild
            ? {
                  input: "./workers/app.ts",
              }
            : undefined,
    },
    ssr: {
        target: "webworker",
        noExternal: true,
        resolve: {
            conditions: ["workerd", "browser"],
        },
        optimizeDeps: {
            include: [
                "react",
                "react/jsx-runtime",
                "react/jsx-dev-runtime",
                "react-dom",
                "react-dom/server",
                "react-router",
            ],
        },
    },
    plugins: [
        cloudflare({ viteEnvironment: { name: "ssr" } }),
        tailwindcss(),
        reactRouter(),
        tsconfigPaths(),
    ],
}));
