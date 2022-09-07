import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置 mock 插件
    viteMockServe({
      // default
      mockPath: "mock",
    }),
  ],
  base: "./", // 配置打包文件路径
  server: {
    open: true, // 在默认浏览器中自动打开该地址
    proxy: {
      "/test": {
        target: "www.baidu.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test/, ""),
      },
    },
  },
  resolve: {
    // 别名配置
    alias: {
      // "@": "./src",
    },
  },
  build: {
    minify: "terser",
    terserOptions: {
      // 生产环境移除 console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
