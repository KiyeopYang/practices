const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const { PORT } = app.nextConfig.env;

	const server = express();

	server.use('/api', (req, res) => {
		const time = Math.round(Math.random() * 1000);
		setTimeout(
			() =>
				res.json({
					text: `Random Value : ${time}`,
					time,
				}),
			time,
		);
	});

	server.get('*', (req, res) => {
		handle(req, res);
	});

	server.listen(PORT, () => {
		console.log(`SERVER ON ${PORT}`);
	});
});
