import path from 'path';
import {promises as fs} from 'fs';
import {fileURLToPath} from 'url';

import t from 'libtap';
import {testBrowser, grabImage} from '@cfware/tap-selenium-manager';
import {FastifyTestHelper} from '@cfware/fastify-test-helper';

const cwd = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

const imageFile = fullname => path.join(
	cwd,
	'tap-snapshots',
	fullname.replace(/[^\w.-]+/gu, '-')
);

const processImage = async (t, element, imageID) => {
	const image64 = await grabImage(element);
	t.matchSnapshot(image64, imageID);
	await fs.writeFile(imageFile(`${t.fullname}-${imageID}.png`), image64);
};

const pages = {
	async 'full-center.html'(t, selenium) {
		const element = await selenium.findElement({id: 'test'});
		await processImage(t, element, 'test');
	}
};

const daemon = new FastifyTestHelper({
	customGetters: {
		'/full-center.js': 'full-center.js'
	}
});

t.test('browsers', async t => {
	await testBrowser(t, 'firefox', daemon, pages);
	await testBrowser(t, 'chrome', daemon, pages);
});
