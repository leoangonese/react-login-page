import PingButton from "../form/button/pinging"


const HeroSection = ({ title, subtitle, buttontext, onClick }) => {
  return (
    <div className="py-20 min-h-screen lg:w-1/2 w-full flex items-center lg:items-start justify-center flex-col text-center lg:text-left px-5 md:px-10 lg:px-28 xl:px-32 2xl:px-40 text-blue-500 bg-white">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mb-2">{title}</h1>
      <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-12 sm:mb-20 md:mb-24 lg:mb-40 font-light">{subtitle}</p>


      <PingButton text={buttontext} onClick={onClick} />
    </div>
  )
}
export default HeroSection
