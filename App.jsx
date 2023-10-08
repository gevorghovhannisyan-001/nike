import { Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscribe,Footer } from './sections';
import Nav from './components/Nav';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  return (
    <main className="relative dark:bg-[var(--bg-dark)]">
      <BackToTopButton />
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue dark:bg-[var(--customers-bg-dark)] padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding bg-black dark:bg-[var(--footer-dark)]">
          <Footer />
        </section>
      </section>
    </main>
  )
}

export default App