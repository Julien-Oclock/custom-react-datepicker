import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.js'),
            name: 'custom-datepicker-react',
            fileName: 'index'
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }

    }
})