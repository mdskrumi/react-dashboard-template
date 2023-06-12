import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build',
    },
    server: {
        port: 3000,
    },
    plugins: [
        react(),
        viteTsconfigPaths(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
            },
            includeAssets: [
                'favicon.ico',
                'apple-touch-icon.png',
                'masked-icon.svg',
            ],
            manifest: {
                name: 'React Dashboard Template',
                short_name: 'dashboard',
                display: 'standalone',
                start_url: '/',
                theme_color: '#00AB55',
                background_color: '#FFFFFF',
                icons: [
                    {
                        src: 'favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                    },
                    {
                        src: 'favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'masked-icon.svg',
                        sizes: '196x196',
                        type: 'image/svg',
                        purpose: 'maskable',
                    },
                ],
            },
        }),
    ],
    envPrefix: 'DASHBOARD_',
});
