import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./", // 配置打包文件路径
  server: {
    open: true, // 在默认浏览器中自动打开该地址
  },
});
