> 该仓库仅用于bug复现


## 复现条件
电脑：MacBook Pro

芯片：Apple M3 Pro

版本：14.2.1 (23C71)

umi使用swc作为编码和压缩器时（仅1.3.67+版本）

package.json
```
  "devDependencies": {
    "@swc/core": "^1.3.67",
  }
```

## error message
```
fatal - Error: ERROR in ./src/.umi-production/umi.ts
Module build failed (from ./node_modules/.pnpm/@umijs+bundler-webpack@4.1.2_typescript@5.3.3_webpack@5.90.3/node_modules/@umijs/bundler-webpack/dist/loader/swc.js):
Error: failed to handle: failed to invoke plugin: failed to invoke plugin on 'Some("/Users/yinvoker/Desktop/study/umi/src/.umi-production/umi.ts")'

Caused by:
    0: failed to invoke `/Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/swc-plugin-auto-css-modules@1.5.0/node_modules/swc-plugin-auto-css-modules/swc_plugin_auto_css_modules.wasm` as js transform plugin at /Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/swc-plugin-auto-css-modules@1.5.0/node_modules/swc-plugin-auto-css-modules/swc_plugin_auto_css_modules.wasm
    1: RuntimeError: unreachable

webpack compiled with 1 error
    at handler (/Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-webpack@4.1.2_typescript@5.3.3_webpack@5.90.3/node_modules/@umijs/bundler-webpack/dist/build.js:82:79)
    at finalCallback (/Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-webpack@4.1.2_typescript@5.3.3_webpack@5.90.3/node_modules/@umijs/bundler-webpack/compiled/webpack/index.js:62945:32)
    at /Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-webpack@4.1.2_typescript@5.3.3_webpack@5.90.3/node_modules/@umijs/bundler-webpack/compiled/webpack/index.js:62962:13
    at Hook.eval [as callAsync] (eval at create (/Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-utils@4.1.2/node_modules/@umijs/bundler-utils/compiled/tapable/index.js:1:7682), <anonymous>:35:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-utils@4.1.2/node_modules/@umijs/bundler-utils/compiled/tapable/index.js:1:4851)
    at onCompiled (/Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-webpack@4.1.2_typescript@5.3.3_webpack@5.90.3/node_modules/@umijs/bundler-webpack/compiled/webpack/index.js:62960:21)
    at /Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-webpack@4.1.2_typescript@5.3.3_webpack@5.90.3/node_modules/@umijs/bundler-webpack/compiled/webpack/index.js:63704:17
    at _next0 (eval at create (/Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-utils@4.1.2/node_modules/@umijs/bundler-utils/compiled/tapable/index.js:1:7682), <anonymous>:16:1)
    at eval (eval at create (/Users/yinvoker/Desktop/study/umi/node_modules/.pnpm/@umijs+bundler-utils@4.1.2/node_modules/@umijs/bundler-utils/compiled/tapable/index.js:1:7682), <anonymous>:26:1)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
fatal - A complete log of this run can be found in:
fatal - /Users/yinvoker/Desktop/study/umi/node_modules/.cache/logger/umi.log
fatal - Consider reporting a GitHub issue on https://github.com/umijs/umi/issues
fatal - 如果你需要进交流群，请访问 https://fb.umijs.org 。
```
