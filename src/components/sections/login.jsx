import PrimaryButton from "../form/button/primary"
import PrimaryInput from "../form/input/primary"

const LoginSection = ({ username, setUsername, password, setPassword, passwordType, setPasswordType, usernameError, setUsernameError, passwordError, setPasswordError, onClick }) => {
    return (
        <div id="login-section" className="pt-28 py-20 min-h-screen lg:w-1/2 w-full flex items-center justify-center flex-col bg-blue-500 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black mb-10 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20 animate-bounce">React Login Page</h3>
            <PrimaryInput type="text" label="Type your username:*" placeholder="Username" value={username} onChange={setUsername} error={usernameError} textError="Username not valid" visibility={null} />
            <PrimaryInput type={passwordType === false ? 'password' : 'text'} label="Type your password:*" placeholder="Password" value={password} onChange={setPassword} error={passwordError} textError="Password not valid" setVisibility={passwordType === false ? () => setPasswordType(true) : () => setPasswordType(false)} visibility={passwordType} />
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 text-right mb-10 sm:mb-12 md:mb-14 lg:mb-16 2xl:mb-20 text-xs sm:text-sm md:text-base lg:text-lg">
            </div>
            <PrimaryButton text='Sign In!' onClick={onClick} />
        </div>
    )
}

export default LoginSection