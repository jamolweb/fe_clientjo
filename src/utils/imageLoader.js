export const downloadImage = async (url, path) => {
	try {
		const response = await fetch(url)
		const arrayBuffer = await response.arrayBuffer()
		const buffer = Buffer.from(arrayBuffer)
		await require('fs').promises.writeFile(path, buffer)
		console.log(`Downloaded: ${path}`)
	} catch (error) {
		console.error(`Error downloading ${url}:`, error)
	}
}

export const downloadAllImages = async () => {
	const images = {
		'sales-marketing': [
			{ id: '8117815', title: 'DIGITAL MARKETING' },
			{ id: '7970817', title: 'LEAD GENERATION' },
			{ id: '270637', title: 'SALES SUPPORT' },
			{ id: '67112', title: 'MARKET ANALYSIS' },
		],
		'web-dev': [
			{ id: '360591', title: 'WEB DEVELOPMENT' },
			{ id: '325111', title: 'APP DEVELOPMENT' },
			{ id: '7114', title: 'CODING' },
			{ id: '968631', title: 'TESTING' },
		],
		'social-media': [
			{ id: '1083792', title: 'SOCIAL STRATEGY' },
			{ id: '5956083', title: 'CONTENT CREATION' },
			{ id: '5053846', title: 'ENGAGEMENT' },
			{ id: '8296107', title: 'ANALYTICS' },
		],
		advertisement: [
			{ id: '1634278', title: 'DIGITAL ADS' },
			{ id: '6195316', title: 'OUTDOOR ADS' },
			{ id: '6476260', title: 'CAMPAIGN PLANNING' },
			{ id: '7495655', title: 'PRESENTATION' },
		],
		'graphic-design': [
			{ id: '326501', title: 'DESIGN TOOLS' },
			{ id: '15022089', title: 'WORKSPACE' },
			{ id: '326514', title: 'CREATIVE PROCESS' },
			{ id: '6913193', title: 'TEAM COLLABORATION' },
		],
		photography: [
			{ id: '306763', title: 'EQUIPMENT' },
			{ id: '212372', title: 'STUDIO SETUP' },
			{ id: '248519', title: 'CAMERA GEAR' },
			{ id: '403495', title: 'SHOOTING' },
		],
		recruitment: [
			{ id: '4344878', title: 'INTERVIEWS' },
			{ id: '935977', title: 'CANDIDATE SCREENING' },
			{ id: '5699479', title: 'CONSULTATION' },
			{ id: '5439137', title: 'ASSESSMENT' },
		],
	}

	for (const [category, categoryImages] of Object.entries(images)) {
		for (const image of categoryImages) {
			const url = `https://images.pexels.com/photos/${image.id}/pexels-photo-${image.id}.jpeg`
			const path = `public/assets/${category}/${image.id}.jpg`
			await downloadImage(url, path)
		}
	}
}
