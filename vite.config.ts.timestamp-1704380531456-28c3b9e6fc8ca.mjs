// vite.config.ts
import { defineConfig } from "file:///home/hyeon9782/ReactProject/black-ui/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///home/hyeon9782/ReactProject/black-ui/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { vanillaExtractPlugin } from "file:///home/hyeon9782/ReactProject/black-ui/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import libCss from "file:///home/hyeon9782/ReactProject/black-ui/node_modules/vite-plugin-libcss/index.js";
import dts from "file:///home/hyeon9782/ReactProject/black-ui/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/hyeon9782/ReactProject/black-ui";
var vite_config_default = defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    dts({
      insertTypesEntry: true
      // 컴포넌트 타입 생성
    }),
    libCss()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/components/index.ts"),
      name: "@black-ui/react",
      fileName: "index",
      // 어떤 모듈형태로 빌드할건지 : es, umd, cjs
      formats: ["es", "umd", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9oeWVvbjk3ODIvUmVhY3RQcm9qZWN0L2JsYWNrLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9oeWVvbjk3ODIvUmVhY3RQcm9qZWN0L2JsYWNrLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2h5ZW9uOTc4Mi9SZWFjdFByb2plY3QvYmxhY2stdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHsgdmFuaWxsYUV4dHJhY3RQbHVnaW4gfSBmcm9tIFwiQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpblwiO1xuaW1wb3J0IGxpYkNzcyBmcm9tIFwidml0ZS1wbHVnaW4tbGliY3NzXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbigpLFxuICAgIHJlYWN0KCksXG4gICAgZHRzKHtcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsIC8vIFx1Q0VGNFx1RDNFQ1x1QjEwQ1x1RDJCOCBcdUQwQzBcdUM3ODUgXHVDMEREXHVDMTMxXG4gICAgfSksXG4gICAgbGliQ3NzKCksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcIkBibGFjay11aS9yZWFjdFwiLFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICAgIC8vIFx1QzVCNFx1QjVBNCBcdUJBQThcdUI0QzhcdUQ2MTVcdUQwRENcdUI4NUMgXHVCRTRDXHVCNERDXHVENTYwXHVBQzc0XHVDOUMwIDogZXMsIHVtZCwgY2pzXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcInVtZFwiLCBcImNqc1wiXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxvQkFBb0I7QUFDOVQsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sV0FBVztBQUNsQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBTGhCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLHFCQUFxQjtBQUFBLElBQ3JCLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBO0FBQUEsSUFDcEIsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxNQUNuRCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUE7QUFBQSxNQUVWLFNBQVMsQ0FBQyxNQUFNLE9BQU8sS0FBSztBQUFBLElBQzlCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
