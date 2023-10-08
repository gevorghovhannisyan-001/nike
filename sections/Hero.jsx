import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics, shoes } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  
  return (
    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red max-lg:-z-1">Our Summer Collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap dark:xl:bg-[var(--bg-dark)] relative z-10 
          pr-10 dark:text-[var(--text-dark)]">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike </span>
          <span className="dark:text-[var(--text-dark)]">Shoes</span>
        </h1>
        <p className="mt-5 text-slate-gray 
        dark:text-[var(--menu-text-dark)] text-xl leading-8 font-montserrat">Discover stylish Nike arrivals, quality <br /> comfort, and 
           innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} filled={true}/>
        <div className="flex justify-start items-start max-sm:flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold dark:text-[var(--text-dark)]">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray dark:text-[var(--menu-text-dark)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 
      bg-primary bg-hero dark:bg-darkHero bg-cover bg-center">
        <img 
        src={bigShoeImg} 
        alt="shoe collection" 
        width={610}
        height={500}
        className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 
        gap-4 absolute -bottom-[8%]
        sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage=
              {(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero