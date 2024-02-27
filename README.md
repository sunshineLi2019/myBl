# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```文件结构
├── app.tsx
├── assets // 静态资源，会被打包优化
│   ├── favicon.svg
│   └── logo.svg
├── common // 公共配置，比如统一请求封装，session 封装
│   ├── http-client
│   └── session
├── components // 全局组件，分业务组件或 UI 组件
│   ├── Toast
├── config // 配置文件目录
│   ├── index.ts
├── hooks // 自定义 hook
│   └── index.ts
├── layouts // 模板，不同的路由，可以配置不同的模板
│   └── index.tsx
├── lib // 通常这里防止第三方库，比如 jweixin.js、jsBridge.js
│   ├── README.md
│   ├── jsBridge.js
│   └── jweixin.js
├── pages // 页面存放位置
│   ├── components // 就近原则页面级别的组件
│   ├── home
├── routes // 路由配置
│   └── index.ts
├── store // 全局状态管理
│   ├── common.ts
│   ├── index.ts
│   └── session.ts
├── styles // 全局样式
│   ├── global.less
│   └── reset.less
└── utils // 工具方法
  └── index.ts

```

```js
url(data:image/png;base64,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),default
```

24-02-27
https://www.ttzxh.icu/index
发现一个很棒的个人博客,样式参考进行修改
