import path from 'path';

import {setup, page} from '@cfware/ava-selenium-manager';
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import fastifyBabel from 'fastify-babel';

const rootDir = path.resolve(__dirname, '..', '..');

page('full-center.html', async t => {
	const {selenium, snapshotImage, grabImage} = t.context;
	const ele = await selenium.findElement({id: 'test'});

	await snapshotImage(ele);
	await grabImage(ele);
});

export function setupTesting(browserBuilder) {
	setup({
		browserBuilder,
		async daemonFactory() {
			const daemon = fastify()
				.register(fastifyStatic, {
					root: rootDir,
					serve: false
				})
				.register(fastifyStatic, {
					root: path.resolve(rootDir, 'test', 'fixtures'),
					prefix: '/',
					decorateReply: false
				})
				.register(fastifyStatic, {
					root: path.resolve(rootDir, 'node_modules'),
					prefix: '/node_modules',
					decorateReply: false
				})
				.register(fastifyBabel, {
					babelrc: {
						babelrc: false,
						configFile: false,
						plugins: [
							'istanbul',
							'bare-import-rewrite'
						]
					},
					maskError: false
				})
				.get('/full-center.js', (_, reply) => reply.sendFile('full-center.js'));

			await daemon.listen(0);

			return daemon;
		},
		daemonStop(daemon) {
			daemon.server.unref();
		},
		daemonGetURL(t, daemon, pathname) {
			return `http://localhost:${daemon.server.address().port}/${pathname}`;
		}
	});
}
