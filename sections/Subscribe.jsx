import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container 
    flex justify-between items-center
    max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] 
      lg:max-w-md font-palanquin font-bold dark:text-[var(--text-dark)]">
        Sign Up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <div className="lg:max-w-[40%] relative w-full flex items-center max-sm:flex-col 
      gap-5 p-5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" 
        placeholder="subscribe@nike.com" 
        className="input dark:bg-transparent dark:text-[var(--menu-text-dark)]"/>
        <div className="absolute flex right-1 -top-[50px] max-sm:relative max-sm:w-full">
          <Button label="Sign Up" filled={true}/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe