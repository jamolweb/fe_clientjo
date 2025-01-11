const { downloadAllImages } = require('../utils/downloadImages')

async function main() {
	console.log('Starting image download...')
	await downloadAllImages()
	console.log('Image download complete!')
}

main().catch(console.error)
