import Button from "../components/Button";
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between 
    items-center max-lg:flex-col
    gap-10 w-full max-container"
    >
      <div className="flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg dark:text-[var(--text-dark)]">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-[var(--menu-text-dark)]">
          Ensuring premium comfort and style, our meticulously <br /> 
          crafted footwear is designed to elevate your experience, <br /> 
          providing you with unmatched quality, innovation, and a <br />
          touch of elegance.
          <span className="block mt-6 lg:max-w-lg">
            Our dedication to detail and excellence ensures your <br />
            satisfaction
          </span>
        </p>
        <div className="mt-11">
          <Button label="View details" filled={true}/>
        </div>
      </div>
      <div className="flex-1 flex 
      justify-center items-center">
        <img src={shoe8} 
        alt="shoe8" 
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality