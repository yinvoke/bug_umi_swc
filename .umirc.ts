import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  srcTranspiler:'swc',
  jsMinifier:'swc',
  npmClient: 'pnpm',
});
