import { useState } from "react"
import PrimaryButton from "../form/button/primary"
import PrimaryInput from "../form/input/primary"

const LoginSection = () => {
    // vars
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //type
    const [passwordType, setPasswordType] = useState(false)

    // error
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    return (
        <div id="login-section" className="py-20 min-h-screen lg:w-1/2 w-full flex items-center justify-center flex-col bg-blue-500 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mb-10 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20 animate-bounce">React Login Page</h3>
            <PrimaryInput type="text" label="Type your username:*" placeholder="Username" value={username} onChange={setUsername} error={usernameError} textError="Username not valid" />
            <PrimaryInput type={passwordType === false ? 'password' : 'text'} label="Type your password:*" placeholder="password" value={password} onChange={setPassword} error={passwordError} textError="Password not valid" />
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 text-right mb-10 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20 text-xs sm:text-sm md:text-base lg:text-lg">
                <p className="cursor-pointer underline" onClick={passwordType === false ? () => setPasswordType(true) : () => setPasswordType(false)}>Click to {passwordType === false ? 'show' : 'hide'} your Password</p>

            </div>
            <PrimaryButton text='Sign In!' onClick='' />
        </div>
    )
}

export default LoginSection