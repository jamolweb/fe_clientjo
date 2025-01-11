import Image from 'next/image'

const SolutionImage = ({ src, alt, title }) => {
	return (
		<div className='relative'>
			<Image
				src={src}
				alt={alt}
				width={400}
				height={300}
				className='rounded-lg'
			/>
			<div className='absolute inset-0 flex items-end justify-center p-2 bg-black bg-opacity-50 text-white text-center text-sm'>
				{title}
			</div>
		</div>
	)
}

export default SolutionImage
