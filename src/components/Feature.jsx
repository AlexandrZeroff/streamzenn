import React from 'react'

const Feature = ({number, pic, alt, header, margin = 'mt-[-5%]'}) => {
  return (
    <div className='feature mx-auto mt-10 sm:mt-8 sm:mx-4 bg-white rounded-2xl w-[280px] h-[200px] py-5 px-5'>
        <div className='flex'>
            <p className='text-xs'>streamzenn</p>
            <p className='text-xs ml-auto'>{number}</p>
        </div>
        <img src={pic} alt={alt} className='mx-auto'></img>
        <h2 className={margin}>{header}</h2>
    </div>
  )
}

export default Feature