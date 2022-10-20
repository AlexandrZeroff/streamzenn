import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { send } from 'emailjs-com'

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()
  const [modalOpen, setModalOpen] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)
  const sendFormData = async (data, error) => {
    send('service_2cewt1s', 'template_hc0wk7c', data, 'oJgWz0frqEkRbP81f')
    reset()
    setSendSuccess(true)
  }
  return (
    <section id="userform">
      <form
        onSubmit={handleSubmit(sendFormData)}
        className="userform flex flex-col mb-20"
      >
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
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email?.type === 'required' && (
          <span className="error-span">Please enter your email address</span>
        )}
        {errors.email?.type === 'pattern' && (
          <span className="error-span">Please enter a valid email address</span>
        )}
        <label className="text-base text-[#87898D] mt-4">Your company</label>
        <input
          type="text"
          placeholder="Unit City"
          {...register('company', { required: true })}
          aria-invalid={errors.company ? 'true' : 'false'}
        />
        {errors.company && (
          <span className="error-span">This field is required</span>
        )}
        <label className="text-base text-[#87898D] mt-4">Message</label>
        <input
          aria-multiline
          type=""
          placeholder="Start typing a question..."
          defaultValue=""
          {...register('message')}
        />
        {sendSuccess && (
          <span className="success-span">
            Your data was sent successfully! We`ll contact you as soon as
            possible.
          </span>
        )}

        <button type="submit" className="purple-btn mt-12 text-base">
          Book Demo
        </button>
      </form>
    </section>
  )
}

export default UserForm
