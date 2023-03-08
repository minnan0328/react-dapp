import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import EnvironmentPlugin from 'vite-plugin-environment';
import config from './src/config/vite';

console.log(config);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		EnvironmentPlugin({
			IS_DEV: config.isDev
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},

	css: {
        devSourcemap: config.isDev
    },
	server: {
        host: true
	}
})
