const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px]
    sm:min-w-[350px] w-full rounded-[20px] 
    shadow-3xl dark:shadow-black px-10 py-16">
        <div className="w-11 h-11 justify-center items-center
         bg-coral-red rounded-full flex">
            <img src={imgURL} alt={label} 
            width={24} height={24}
            />
        </div>
        <h3 className="mt-5 font-palanquin
        text-3xl leading-normal font-bold dark:text-[var(--text-dark)]">{label}</h3>
        <p className="mt-3 break-words leading-normal
        font-montserrat text-lg text-slate-gray dark:text-[var(--menu-text-dark)]">{subtext}</p>
    </div>
  )
}

export default ServiceCard