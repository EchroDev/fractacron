import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    root: "./sample",
    plugins: [tailwindcss()]
})