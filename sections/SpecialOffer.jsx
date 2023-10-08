import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
      <section className="flex justify-wrap
      items-center
      max-xl:flex-col-reverse 
      gap-10 max-container"
      >
        <div className="flex-1">
          <img src={offer} width={773} height={687} 
          className="object-contain w-full"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg dark:text-[var(--text-dark)]">
            <span className="text-coral-red"> Special </span>
            Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text dark:text-[var(--menu-text-dark)]">
          Embark on a shopping journey that redefines your experience 
          with unbeatable deals. From premier selections to incredible 
          savings, we offer unparalleled value that sets us apart.
            <span className="block mt-6 lg:max-w-lg">
            Navigate a realm of possibilities designed to fulfill your unique 
            desires, surpassing the loftiest expectations. Your journey with us 
            is nothing short of exceptional.
            </span>
          </p>
          <div className="-mt-3 flex gap-4">
            <Button label="Shop now" iconURL={arrowRight} filled={true}/>
            <Button label="Learn more" filled={false} />
          </div>
        </div>
      </section>
  )
}

export default SpecialOffer