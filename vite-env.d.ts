/// <reference types="vite/client" />

declare module '*.js?url' {
  const content: string;
  export default content;
}