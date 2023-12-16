import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 " id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign up for
        <span className=" text-coral-red"> Updates </span> & NewsLetter
      </h3>
      <div className=" lg:max-w-[40%] w-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
           <Button label="Sign Up"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe