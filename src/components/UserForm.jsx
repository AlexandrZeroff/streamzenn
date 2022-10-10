import React from 'react'
import { useForm } from 'react-hook-form'

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const sendFormData = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(sendFormData)} className='userform flex flex-col mb-20'>
      <label className="text-base text-[#87898D] mt-4">Name</label>
      <input
        type="text"
        placeholder="Alex System"
        {...register('name', { maxLength: 20 })}
      />
      <label className="text-base text-[#87898D] mt-4">Email</label>
      <input
        type="email"
        placeholder="yourmail@mail.com"
        {...register('email', {
          required: true,
          pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email?.type === 'required' && (
        <span>Please enter your email address</span>
      )}
      {errors.email?.type === 'pattern' && (
        <span>Please enter a valid email address</span>
      )}
      <label className="text-base text-[#87898D] mt-4">Your company</label>
      <input
        type="text"
        placeholder="Unit City"
        {...register('company', { required: true })}
        aria-invalid={errors.company ? "true" : "false"}
      />
      {errors.company && <span>This field is required</span>}
      <label className="text-base text-[#87898D] mt-4">Message</label>
      <input
        aria-multiline
        type=""
        placeholder="Start typing a question..."
        defaultValue=""
        {...register('message')}
      />

      <button type="submit" className='purple-btn mt-12 text-base'>Book Demo</button>
    </form>
  )
}

export default UserForm
