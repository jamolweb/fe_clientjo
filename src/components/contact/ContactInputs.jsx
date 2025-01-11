'use client'

import { useState } from 'react'

const ContactInputs = ({ onSubmit, formData, setFormData }) => {
	const [extraText, setExtraText] = useState(false)
	const [errors, setErrors] = useState({})
	const [touched, setTouched] = useState({})
	const [submitStatus, setSubmitStatus] = useState(null)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		setExtraText(false)
		if (errors[name]) {
			setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }))
		}
	}

	const validate = () => {
		let formErrors = {}

		if (!formData.name) formErrors.name = 'Name is required'
		if (!formData.email) {
			formErrors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			formErrors.email = 'Email address is invalid'
		}
		if (!formData.message) formErrors.message = 'Message is required'

		setErrors(formErrors)
		return Object.keys(formErrors).length === 0
	}

	const handleBlur = e => {
		const { name } = e.target
		setTouched(prev => ({ ...prev, [name]: true }))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setExtraText(false)
		setTouched({
			name: true,
			email: true,
			subject: true,
			message: true,
		})
		if (validate()) {
			onSubmit(formData) // This will trigger the modal
		}
	}

	return (
		<div className=''>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<div className='flex flex-col'>
						<input
							type='text'
							name='name'
							id='name'
							value={formData.name}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Name *'
							className={`bg-inherit border ${
								errors.email && touched.name
									? 'border-red-500'
									: 'border-gray-500'
							} focus:border-white outline-none px-5 py-3 transition duration-150 ease-linear placeholder:text-white`}
						/>
						{errors.name && (
							<span className='text-red-500 text-sm text-left'>
								{errors.name}
							</span>
						)}
					</div>
					<div className='flex flex-col'>
						<input
							type='email'
							name='email'
							id='email'
							value={formData.email}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Email *'
							className={`bg-inherit border ${
								errors.email && touched.email
									? 'border-red-500'
									: 'border-gray-500'
							} focus:border-white outline-none px-5 py-3 transition duration-150 ease-linear placeholder:text-white`}
						/>
						{errors.email && (
							<span className='text-red-500 text-sm text-left'>
								{errors.email}
							</span>
						)}
					</div>
					<div className='flex flex-col'>
						<input
							type='text'
							name='subject'
							id='subject'
							value={formData.subject}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Subject *'
							className={`bg-inherit border ${
								errors.subject && touched.subject
									? 'border-red-500'
									: 'border-gray-500'
							} focus:border-white outline-none px-5 py-3 transition duration-150 ease-linear placeholder:text-white`}
						/>
						{errors.subject && (
							<span className='text-red-500 text-sm text-left'>
								{errors.subject}
							</span>
						)}
					</div>
				</div>
				<div className='flex flex-col'>
					<textarea
						name='message'
						id='message'
						value={formData.message}
						onChange={handleChange}
						onBlur={handleBlur}
						placeholder='Message *'
						rows='4'
						className={`w-full bg-inherit border ${
							errors.message && touched.message
								? 'border-red-500'
								: 'border-gray-500'
						} focus:border-white outline-none px-5 py-3 transition duration-150 ease-linear placeholder:text-white`}
					></textarea>
					{errors.message && (
						<span className='text-red-500 text-sm text-left'>
							{errors.message}
						</span>
					)}
				</div>
				<button
					type='submit'
					className='mt-14 text-sm font-semibold tracking-widest uppercase border border-gray-500 bg-transparent hover:bg-white hover:text-black transition duration-300 ease-linear p-4 w-fit mx-auto'
				>
					Send email
				</button>
			</form>
		</div>
	)
}

export default ContactInputs
