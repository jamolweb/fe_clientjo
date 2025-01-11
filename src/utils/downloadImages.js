import fs from 'fs/promises'
import path from 'path'
import { imageData } from '../constants/imageData'

const downloadImage = async (imageId, category) => {
	try {
		const url = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg`
		const response = await fetch(url)
		const buffer = Buffer.from(await response.arrayBuffer())

		const dirPath = path.join(process.cwd(), 'public', 'assets', category)
		await fs.mkdir(dirPath, { recursive: true })

		const filePath = path.join(dirPath, `${imageId}.jpg`)
		await fs.writeFile(filePath, buffer)

		console.log(`Downloaded: ${filePath}`)
	} catch (error) {
		console.error(`Error downloading image ${imageId}:`, error)
	}
}

const extractImageId = path => {
	const match = path.match(/\/(\d+)\.jpg$/)
	return match ? match[1] : null
}

export const downloadAllImages = async () => {
	for (const [category, images] of Object.entries(imageData)) {
		for (const image of images) {
			const imageId = extractImageId(image.path)
			if (imageId) {
				await downloadImage(imageId, category)
			}
		}
	}
}
