import {Hero, CustomerReviews, PopularProducts, SuperQuality, Services, SpecialOffer, Subscribe, Footer} from './sections'
import Nav from './components/Nav'

const App = () => {
  return (
      <main className="relative">
          <Nav />
        <section className=" xl:padding-l wide:padding-r paddin-b">
          <Hero />
        </section>
        <section className="padding">
          {/* add product detail page later on */}
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
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t pb-8 bg-black">
          <Footer />
        </section>
      </main>
    )
}

export default App