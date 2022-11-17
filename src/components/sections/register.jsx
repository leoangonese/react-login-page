import { useState } from "react"
import PrimaryInput from "../form/input/primary"
import PrimaryButton from "../form/button/primary"

const RegisterPage = ({ setStep }) => {
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [passwordType, setPasswordType] = useState()

    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false)
    const [passwordTypeRepeat, setPasswordTypeRepeat] = useState()

    return (
        <div className="w-full min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white pt-14">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black my-10 sm:my-12 md:my-14 lg:my-16 2xl:my-20 animate-bounce ">Create your Account</h1>
            <div className="w-full xl:w-2/3 flex flex-col items-center justify-center">
                <PrimaryInput type="text" label="Type your username:*" placeholder="Username" value={username} onChange={setUsername} error={usernameError} textError="Username not valid" visibility={null} />
                <PrimaryInput type='email' label="Type your e-mail:*" placeholder="E-mail" value={email} onChange={setEmail} error={emailError} textError="E-mail not valid" visibility={null} />

                <PrimaryInput type={passwordType === false ? 'password' : 'text'} label="Type your password:*" placeholder="Password" value={password} onChange={setPassword} error={passwordError} textError="Password not valid" setVisibility={passwordType === false ? () => setPasswordType(true) : () => setPasswordType(false)} visibility={passwordType} />

                <PrimaryInput type={passwordTypeRepeat === false ? 'password' : 'text'} label="Confirm your password:*" placeholder="Password Repeat" value={passwordRepeat} onChange={setPasswordRepeat} error={passwordErrorRepeat} textError="Password its not equal"
                    setVisibility={passwordTypeRepeat === false ? () => setPasswordTypeRepeat(true) : () => setPasswordTypeRepeat(false)} visibility={passwordTypeRepeat} />
                <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 text-right mb-10 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20 text-xs sm:text-sm md:text-base lg:text-lg">
                    <p className="cursor-pointer underline" onClick={() => setStep('Login')}>Do you already have login?</p>
                </div>
            </div>

            <PrimaryButton text='Sign Up!' onClick='' />
            <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20"></div>
        </div>
    )
}
export default RegisterPage