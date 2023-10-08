import React from 'react'

const Button = ({label, iconURL, filled}) => {
  return (
    <button className={`flex justify-center items-center 
    gap-2 px-7 py-4 font-montserrat 
    border ${ filled ? 'border-coral-red text-white' : 'bg-transparent border-slate-gray dark:border-[var(--menu-text-dark)] text-slate-gray dark:text-[var(--menu-text-dark)]'} 
    text-lg leading-none bg-coral-red rounded-full mt-14 max-sm:w-full`}>
        {label}
        {iconURL && (
          <img 
          src={iconURL} 
          alt="arrowRight"
          className="ml-2 rounded-full w-5 h-5"
          />
        )}
    </button>
  )
}

export default Button