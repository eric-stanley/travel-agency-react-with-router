import path from "path-browserify";
import {
    reactRouter
} from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import {
    defineConfig
} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
    plugins: [reactRouter(), tsconfigPaths()],
    server: {
        open: true,
    },
    ssr: {
        // Add any SSR-specific settings here
        // noExternal: ["react-icons"], // Example of including external dependencies
        external: ["gray-matter", "path-browserify", "react-icons", "react-markdown", "remark", "remark-html", "shadcn", "tailwindcss-animate", "lucide-react"]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});