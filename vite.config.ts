import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import libCss from "vite-plugin-libcss";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    dts({
      insertTypesEntry: true, // 컴포넌트 타입 생성
    }),
    libCss(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@black-ui/react",
      fileName: "index",
      // 어떤 모듈형태로 빌드할건지 : es, umd, cjs
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      treeshake: "recommended",
      external: [
        "react",
        "react-dom",
        "husky",
        "**/*.stories.tsx",
        "**/*.test.tsx",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
