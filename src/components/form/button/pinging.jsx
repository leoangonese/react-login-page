const PingButton = ({ text, onClick }) => {
    return (
        <button onClick={() => onClick}>
            <div class="relative mx-auto h-16 w-44 sm:w-64 flex justify-center items-center">
                <div class="h-12 sm:h-14 md:h-16 xl:h-20 w-48 sm:w-52 md:w-56 xl:w-64 bg-blue-500 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                </div>
                <p class="text-center text-white font-light z-10 pointer-events-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{text}</p>
                <span class="absolute flex h-6 w-6 top-0 right-0 sm:right-6 xl:right-0  transform translate-x-2.5 -translate-y-2.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                    <span class="absolute inline-flex rounded-full h-6 w-6 bg-blue-300"></span>
                </span>

            </div>
        </button>
    )
}
export default PingButton