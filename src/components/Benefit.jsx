import React from 'react'

const Benefit = ({
  number,
  header,
  text,
  style = {},
  align = {},
  textAlign = {},
}) => {
  return (
    <article style={style}>
      <div className="benefit mt-12 md:mt-8 lg:mt-20 flex flex-col" style={align}>
        <div className="bg-[#6038F2] w-9 h-9 rounded-[20px] flex">
          <p className="text-lg text-white text-center font-bold m-auto md:text-base lg:text-lg">
            {number}
          </p>
        </div>
        <h2 className="mt-3 purple-gradient-text">{header}</h2>
        <p className="mt-2 text-sm md:text-base lg:text-lg" style={textAlign}>
          {text}
        </p>
      </div>
    </article>
  )
}

export default Benefit
