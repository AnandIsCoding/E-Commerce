import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Ensure jsdom is used for the tests

    setupFiles: './vitest.setup.js',  // Include the setup file for jest-dom
    globals: true,         // Optional: Allows you to use global functions like 'test' without importing them
  },
});
