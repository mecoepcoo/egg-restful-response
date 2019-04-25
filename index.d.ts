import 'egg';

declare module 'egg' {
  // 扩展 context
  interface Context {
    sendOK: ({ data: any, extend: any }) => void;
  }
}
