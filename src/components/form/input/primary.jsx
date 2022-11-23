import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

const PrimaryInput = ({ type, label, placeholder, value, onChange, error, textError, setVisibility, visibility }) => {
    const [shadow, setShadow] = useState(false)
    return (
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
            <label className="text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                {label}
            </label>
            {visibility !== null ? (
                <div className="w-full flex justify-end text-blue-500 text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                    <FontAwesomeIcon className="absolute pt-5 pr-4 lg:pr-8 md:pt-6 lg:pt-10 xl:pt-9 cursor-pointer" icon={visibility === true ? faEyeSlash : faEye} onClick={setVisibility} />
                </div>
            ) : ''}
            <input onFocusCapture={() => setShadow(true)} type={type} className={`${error} my-2 md:my-3 lg:my-5 text-black w-full rounded-full shadow-2xl p-2 md:p-3 lg:p-5 pl-5`} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} />

            <span className={`text-red-300 text-2xl font-bold ${error === true ? 'block' : 'hidden'}`}>{textError}</span>
        </div>
    )
}
export default PrimaryInput