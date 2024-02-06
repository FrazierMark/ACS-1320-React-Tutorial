// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	envDir: './src/envs',
// });

import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return defineConfig({
		base: env.VITE_ROUTER_BASE_URL || '/',
		define: {
			'process.env': env,
		},
	});
};
