/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly TLDRAW_WORKER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
