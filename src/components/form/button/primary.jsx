const PrimaryButton = ({ text, onClick }) => {
    return (
        <button onClick={() => onClick} class="mx-auto h-16 w-44 sm:w-64 flex justify-center items-center">
            <div class="h-12 sm:h-14 md:h-16 xl:h-20 w-48 sm:w-52 md:w-56 xl:w-64 bg-green-500 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
            </div>
            <p class="text-center text-white font-light z-10 pointer-events-none sm:text-sm md:text-base lg:text-lg xl:text-xl">{text}</p>
        </button>
    )
}
export default PrimaryButton