// next.config.js
const path = require('path');
module.exports = {
	webpack: config => {
		config.resolve.alias.components = path.resolve(__dirname, 'src/components');
		config.resolve.alias.containers = path.resolve(__dirname, 'src/containers');
		return config;
	},
};
