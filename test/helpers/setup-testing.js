import {setup, page} from '@cfware/ava-selenium-manager';
import {FastifyTestHelper} from '@cfware/fastify-test-helper';

page('full-center.html', async t => {
	const {selenium, snapshotImage, grabImage} = t.context;
	const ele = await selenium.findElement({id: 'test'});

	await snapshotImage(ele);
	await grabImage(ele);
});

export function setupTesting(browserBuilder) {
	setup(new FastifyTestHelper(browserBuilder, {
		customGetters: {
			'/full-center.js': 'full-center.js'
		}
	}));
}
