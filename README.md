# Ordinary CDK tables inside virtual scroll items

Minimal reproduction using Angular and CDK 22.2.6.

```sh
npm install
npm start
```

Open the app and the browser console. Initial rendering throws:

```text
Error: CdkVirtualScrollViewport is already attached.
```

Expected: the viewport scrolls through groups, with all three rows shown in each group's ordinary table.

Only the outer list is intended to use virtual scrolling. The tables inside its items should render normally.

The entire example is in `src/main.ts`.
