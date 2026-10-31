import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/mocks/setupTest.ts",

    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/tests/**',
      '**/*.spec.ts',
    ],
  }
});
