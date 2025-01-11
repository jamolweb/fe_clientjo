'use client'

import { forwardRef, useImperativeHandle, useState } from 'react'

const ContactInputs2 = forwardRef(({ onSubmit }, ref) => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: '',
		location: '',
		file: null,
		english_level: '',
		job_position: '',
		experience_years: '',
		have_a_laptop: '',
		hybrid: '',
	})
	const [errors, setErrors] = useState({})
	const [touched, setTouched] = useState({})

	// Add reset functionality
	useImperativeHandle(ref, () => ({
		resetForm: () => {
			setFormData({
				name: '',
				phone: '',
				email: '',
				subject: '',
				message: '',
				location: '',
				file: null,
				english_level: '',
				job_position: '',
				experience_years: '',
				have_a_laptop: '',
				hybrid: '',
			})
			setErrors({})
			setTouched({})
		},
	}))

	const handleChange = e => {
		const { name, value, type } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'file' ? e.target.files[0] : value,
		}))
		if (errors[name]) {
			setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }))
		}
	}

	const validate = () => {
		let formErrors = {}
		if (!formData.name.trim()) formErrors.name = 'Name is required'
		if (!formData.phone.trim()) formErrors.phone = 'Phone is required'
		if (!formData.email) {
			formErrors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			formErrors.email = 'Email address is invalid'
		}
		if (!formData.subject) formErrors.subject = 'Subject is required'
		if (!formData.message) formErrors.message = 'Message is required'
		if (!formData.location) formErrors.location = 'Location is required'
		if (!formData.english_level)
			formErrors.english_level = 'English level is required'
		if (!formData.job_position)
			formErrors.job_position = 'Job Position is required'
		if (!formData.experience_years) {
			formErrors.experience_years = 'Experience years is required'
		} else if (isNaN(formData.experience_years)) {
			formErrors.experience_years = 'Experience years must be a number'
		}
		if (!formData.have_a_laptop)
			formErrors.have_a_laptop = 'Laptop ownership is required'
		if (!formData.hybrid) formErrors.hybrid = 'Work preference is required'
		if (!formData.file) formErrors.file = 'CV file is required'

		setErrors(formErrors)
		return Object.keys(formErrors).length === 0
	}

	const handleBlur = e => {
		const { name } = e.target
		setTouched(prev => ({ ...prev, [name]: true }))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const allFieldsTouched = Object.keys(formData).reduce(
			(acc, field) => ({
				...acc,
				[field]: true,
			}),
			{}
		)
		setTouched(allFieldsTouched)

		if (!validate()) return

		const submitData = new FormData()
		Object.keys(formData).forEach(key => {
			if (key === 'file' && formData[key]) {
				submitData.append('file', formData[key])
			} else {
				submitData.append(key, formData[key])
			}
		})

		onSubmit(submitData)
	}

	return (
		<div className='w-full max-w-5xl'>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
				{/* Responsive grid container */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6'>
					<InputField
						name='name'
						placeholder='Full Name'
						value={formData.name}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.name}
						touched={touched.name}
					/>
					<InputField
						name='phone'
						placeholder='Phone'
						type='tel'
						value={formData.phone}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.phone}
						touched={touched.phone}
					/>
					<InputField
						name='email'
						placeholder='Email'
						type='email'
						value={formData.email}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.email}
						touched={touched.email}
					/>
					<InputField
						name='location'
						placeholder='Location'
						value={formData.location}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.location}
						touched={touched.location}
					/>

					<SelectField
						name='english_level'
						placeholder='English Level'
						value={formData.english_level}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.english_level}
						touched={touched.english_level}
						options={[
							{ value: '', label: 'English Level' },
							{ value: 'amateur', label: 'Amateur' },
							{ value: 'intermediate', label: 'Intermediate' },
							{ value: 'professional', label: 'Professional' },
							{ value: 'fluent', label: 'Fluent/Native' },
						]}
					/>
					<SelectField
						name='job_position'
						placeholder='Job Position'
						value={formData.job_position}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.job_position}
						touched={touched.job_position}
						options={[
							{ value: '', label: 'Job Position' },
							{
								value: 'customerService',
								label: 'Customer Service Specialist',
							},
							{ value: 'telesales', label: 'Telesales' },
							{ value: 'socialMedia', label: 'Social Media Specialist' },
						]}
					/>
					<InputField
						name='experience_years'
						placeholder='Experience Years'
						type='number'
						value={formData.experience_years}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.experience_years}
						touched={touched.experience_years}
					/>
					<SelectField
						name='have_a_laptop'
						placeholder='Do you own a laptop?'
						value={formData.have_a_laptop}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.have_a_laptop}
						touched={touched.have_a_laptop}
						options={[
							{ value: '', label: 'Do you own a laptop?' },
							{ value: 'yes', label: 'Yes' },
							{ value: 'no', label: 'No' },
						]}
					/>
					<SelectField
						name='hybrid'
						placeholder='Work Hybrid?'
						value={formData.hybrid}
						onChange={handleChange}
						onBlur={handleBlur}
						error={errors.hybrid}
						touched={touched.hybrid}
						options={[
							{ value: '', label: 'Work Hybrid?' },
							{ value: 'yes', label: 'Yes' },
							{ value: 'no', label: 'No' },
						]}
					/>
					{/* File input spans full width */}
					<input
						type='file'
						name='file'
						id='file'
						onChange={handleChange}
						className='w-full bg-transparent text-gray-500 border-2 border-gray-500 focus:border-gray-500 outline-none px-3 sm:px-5 py-2 sm:py-1 transition duration-150 ease-linear
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-gray-100 file:text-gray-500
                hover:file:bg-gray-200'
					/>
					<div className='col-span-1 sm:col-span-2'>
						<InputField
							name='subject'
							placeholder='Subject'
							value={formData.subject}
							onChange={handleChange}
							onBlur={handleBlur}
							error={errors.subject}
							touched={touched.subject}
						/>
					</div>
					<div className='col-span-1 sm:col-span-2'>
						<textarea
							name='message'
							placeholder='Message'
							value={formData.message}
							onChange={handleChange}
							onBlur={handleBlur}
							className={`w-full bg-transparent border-2 
								${errors.message && touched.message ? 'border-red-500' : 'border-gray-500'}
								outline-none px-3 sm:px-5 py-2 sm:py-3
								text-sm sm:text-base min-h-[100px]
								transition duration-150 ease-linear
								placeholder:text-gray-500 text-black`}
						/>
						{errors.message && touched.message && (
							<span className='text-red-500 text-xs sm:text-sm mt-1'>
								{errors.message}
							</span>
						)}
					</div>
				</div>

				{/* Submit button container */}
				<div className='mt-4 sm:mt-6 flex justify-start'>
					<button
						type='submit'
						className='w-full sm:w-auto min-w-[200px] text-sm font-semibold tracking-widest uppercase
              border border-gray-500 bg-transparent hover:bg-gray-500 hover:text-white
              transition duration-300 ease-linear p-3 sm:p-4'
					>
						Apply now
					</button>
				</div>
			</form>
		</div>
	)
})

const InputField = ({
	name,
	placeholder,
	type = 'text',
	value,
	onChange,
	onBlur,
	error,
	touched,
}) => (
	<div className='flex flex-col'>
		<input
			type={type}
			name={name}
			id={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			className={`w-full bg-transparent border-2 border-gray-500
        ${error && touched ? 'border-red-500' : 'border-gray-500'}
        outline-none
        px-3 sm:px-5 py-2 sm:py-3
        text-sm sm:text-base
        transition duration-150 ease-linear
        placeholder:text-gray-500 text-black`}
		/>
		{error && touched && (
			<span className='text-red-500 text-xs sm:text-sm mt-1'>{error}</span>
		)}
	</div>
)

const SelectField = ({
	name,
	placeholder,
	value,
	onChange,
	onBlur,
	error,
	touched,
	options,
}) => (
	<div className='flex flex-col '>
		<select
			name={name}
			id={name}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			className={`w-full bg-transparent border-2
        ${error && touched ? 'border-red-500' : 'border-gray-500'}
        focus:border-gray-500 outline-none
        px-3 sm:px-5 py-2 sm:py-3
        text-sm sm:text-base
        transition duration-150 ease-linear
        text-gray-500`}
		>
			<option value='' disabled hidden>
				{placeholder}
			</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
		{error && touched && (
			<span className='text-red-500 text-xs sm:text-sm mt-1'>{error}</span>
		)}
	</div>
)

export default ContactInputs2
