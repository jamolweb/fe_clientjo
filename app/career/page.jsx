'use client'

import person from '@/src/assets/career-img/new.jpeg'
import { sendCareerApplication } from '@/src/lib/axios'
import Image from 'next/image'
import { useRef, useState } from 'react'
import ContactInputs2 from '../../src/components/contact/ContactInputs2'

export default function Career() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [formData, setFormData] = useState(null)
	const formRef = useRef(null)
	const [submitMessage, setSubmitMessage] = useState('')

	const handleSubmit = data => {
		setFormData(data)
		setIsModalOpen(true)
	}

	const handleConfirm = async () => {
		setIsLoading(true)
		try {
			await sendCareerApplication(formData)
			if (formRef.current) {
				formRef.current.resetForm()
			}
			setSubmitMessage(
				'Thank you for your application. We will contact you soon.'
			)
			setTimeout(() => {
				setSubmitMessage('')
			}, 6000)
			setIsLoading(false)
			setIsModalOpen(false)
		} catch (error) {
			console.error('Error sending application:', error)
			setSubmitMessage('An error occurred while submitting the form.')
			setIsLoading(false)
		}
	}

	return (
		<section className='pt-28'>
			<div className='flex flex-col-reverse lg:flex-row gap-8 items-center justify-center'>
				{/* Images Grid */}
				<div className='md:w-[80%] w-full lg:w-[70%] h-90 flex items-center justify-center'>
					<Image
						src={person}
						alt='person'
						className='w-full lg:w-[90%] h-[90%] mx-auto px-auto'
					/>
				</div>

				{/* Content */}
				<div className='md:w-[90%] md:pr-10 container mx-auto flex flex-col justify-start py-2'>
					<h1 className=' md:text-[40px] font-bold md:tracking-[6px]'>
						CAREERS
					</h1>

					<h2 className=' md:text-[36px] font-semibold md:tracking-[6px]'>
						JOIN OUR TEAM
					</h2>
					<p className='sm:text-[16px] tracking-wide mb-2 mt-2'>
						{`At ClientJo, we're more than just a company. We're a community of
            talented individuals passionate about making a difference. We
            believe in fostering a collaborative and supportive environment
            where everyone can thrive and reach their full potential. Join us
            and become part of a dynamic team that's shaping the future of
            ClientJo.`}
					</p>
					<h2 className='text-black md:text-[32px] font-semibold md:tracking-[1px] leading-8 py-4'>
						Start making changes with us and apply now
					</h2>
					{/* form */}
					<div className='w-full'>
						<ContactInputs2 onSubmit={handleSubmit} ref={formRef} />
						{submitMessage && (
							<p
								className={`text-center mt-4 ${
									submitMessage.includes('error')
										? 'text-red-500'
										: 'text-green-500'
								}`}
							>
								{submitMessage}
							</p>
						)}
					</div>
					<p className='text-[18px] pt-4'>
						or email us your CV at{' '}
						<a href='mailto:info@clientjo.com' className='text-blue-500'>
							info@clientjo.com
						</a>{' '}
						and one of our representatives will be in touch.
					</p>
				</div>
			</div>

			{/* Confirmation Modal */}
			{isModalOpen && (
				<div
					className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'
					onClick={() => !isLoading && setIsModalOpen(false)}
				>
					<div
						className='relative p-4 w-full max-w-md'
						onClick={e => e.stopPropagation()}
					>
						<div className='relative bg-gray-900 rounded-lg shadow border border-gray-800'>
							<button
								type='button'
								className='absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
								onClick={() => !isLoading && setIsModalOpen(false)}
								disabled={isLoading}
							>
								<svg
									className='w-3 h-3'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 14 14'
								>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
									/>
								</svg>
								<span className='sr-only'>Close modal</span>
							</button>
							<div className='p-4 md:p-5 text-center'>
								<svg
									className='mx-auto mb-4 text-gray-400 w-12 h-12'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 20 20'
								>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M8 9h4m-2-2v4M3 12v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3M3 12h14M3 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2'
									/>
								</svg>
								<h3 className='mb-5 text-lg font-normal text-gray-400'>
									Are you sure you want to submit this application?
								</h3>
								<div className='flex items-center justify-center gap-2'>
									<button
										type='button'
										className='h-[42px] text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed'
										onClick={handleConfirm}
										disabled={isLoading}
									>
										{isLoading ? (
											<>
												<svg
													className='animate-spin h-5 w-5 mr-2'
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
												>
													<circle
														className='opacity-25'
														cx='12'
														cy='12'
														r='10'
														stroke='currentColor'
														strokeWidth='4'
													></circle>
													<path
														className='opacity-75'
														fill='currentColor'
														d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
													></path>
												</svg>
												Sending...
											</>
										) : (
											'Yes, submit it'
										)}
									</button>
									<button
										type='button'
										className='h-[42px] text-gray-300 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-800 rounded-lg border border-gray-700 text-sm font-medium px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed'
										onClick={() => setIsModalOpen(false)}
										disabled={isLoading}
									>
										No, cancel
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
