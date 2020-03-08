// next.config.js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const path = require('path');

module.exports = phase => {
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;
	return {
		// 클라이언트에서 사용될 환경 변수
		publicRuntimeConfig: {
			BASE_URL: isDev ? 'http://localhost:3000' : 'http://domain.com',
		},
		// 서버에서 사용될 환경 변수
		env: {
			PORT: process.env.PORT || 3000,
		},
		webpack: config => {
			config.resolve.alias.components = path.resolve(
				__dirname,
				'src/components',
			);
			config.resolve.alias.containers = path.resolve(
				__dirname,
				'src/containers',
			);
			config.resolve.alias.libs = path.resolve(__dirname, 'src/libs');
			config.resolve.alias.pages = path.resolve(__dirname, 'src/pages');
			return config;
		},
	};
};
