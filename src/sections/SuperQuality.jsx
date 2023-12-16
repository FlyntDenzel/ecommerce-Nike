import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
   <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col">
    {/* <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p> */}
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you
          <span className=" text-coral-red"> Super</span>
          <span className=" text-coral-red"> Quality</span> Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing with unmatched quality, innovation and a touch of elegance.</p>
        <Button label="View details"/>
    </div>
   </section>
  )
}

export default SuperQuality