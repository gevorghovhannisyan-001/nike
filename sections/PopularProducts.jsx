import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id="products" 
    className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col 
      justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold dark:text-[var(--text-dark)]">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 
        font-montserrat text-slate-gray dark:text-[var(--menu-text-dark)]">
          <span className="block font-bold">🤝 Perfect Fit, Perfect You:</span>
          Experience the difference of a 
          shoe that fits like it was made for you. 
          Nike's dedication to innovation extends to 
          custom-fit technologies that ensure your shoes 
          feel like a natural extension of your body.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 sm:gap-4 gap-14 grid-cols-1">
         {
          products.map((product) => (
            <PopularProductCard key=
            {product.name} {...product} />
          ))
         }
      </div>
    </section>
  )
}

export default PopularProducts