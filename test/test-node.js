import FontNode from '../FontNode.js';

const file = process.argv[2];
if (file) {
	new FontNode(file)
		.then(font => console.log('*** Font Data ***\n', font, '\n'));
} else {
	console.warn(`Get the font data by typing: node test/test-node [filename]\n`);
}