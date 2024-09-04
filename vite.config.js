import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [react(), svgr(), FullReload(['images/**/*.svg'])],
    server: {
        host: '0.0.0.0'
    },
    build: {
        outDir: 'docs'
    },
    test: {
        globals: true,
        environment: 'jsdom',
        testIdAttribute: 'id'
    },

    base: '/01-grafiken-mit-svg/'
})
