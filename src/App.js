import { useState } from 'react'
import HeaderNavBar from './components/sections/header'
import HeroSection from './components/sections/hero'
import LoginSection from './components/sections/login'
import RegisterPage from './components/sections/register'
function App() {
  const [step, setStep] = useState('Login')
  //Login
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //type login
  const [passwordType, setPasswordType] = useState(false)
  // error login
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  //Create account

  const [usernameCreate, setUsernameCreate] = useState('')
  const [usernameErrorCreate, setUsernameErrorCreate] = useState(false)

  const [emailCreate, setEmailCreate] = useState('')
  const [emailErrorCreate, setEmailErrorCreate] = useState(false)

  const [passwordCreate, setPasswordCreate] = useState('')
  const [passwordErrorCreate, setPasswordErrorCreate] = useState(false)
  const [passwordTypeCreate, setPasswordTypeCreate] = useState()

  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false)
  const [passwordTypeRepeat, setPasswordTypeRepeat] = useState()

  return (
    <>
      <HeaderNavBar setStep={setStep} step={step} />
      {step === 'Login' && (
        <div className="App flex items-center justify-center lg:flex-row flex-col">
          <HeroSection
            title="Welcome Again!"
            subtitle={
              <a href="#login-section">
                <span className="lg:hidden">Click here to a</span>
                <span className="hidden lg:inline">A</span>ccess your account
                with e-mail and password!
              </a>
            }
            buttontext="Register Here!"
            onClick={() => setStep('Register')}
          />
          <LoginSection
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            passwordType={passwordType}
            setPasswordType={setPasswordType}
            usernameError={usernameError}
            setUsernameError={setUsernameError}
            passwordError={passwordError}
            setPasswordError={setPasswordError}
            onClick={''}
          />
        </div>
      )}
      {step === 'Register' && (
        <RegisterPage
          setStep={setStep}
          username={usernameCreate}
          setUsername={setUsernameCreate}
          usernameError={usernameErrorCreate}
          setUsernameError={setUsernameErrorCreate}
          email={emailCreate}
          setEmail={setEmailCreate}
          emailError={emailErrorCreate}
          setEmailError={setEmailErrorCreate}
          password={passwordCreate}
          setPassword={setPasswordCreate}
          passwordError={passwordErrorCreate}
          setPasswordError={setPasswordErrorCreate}
          passwordType={passwordTypeCreate}
          setPasswordType={setPasswordTypeCreate}
          passwordRepeat={passwordRepeat}
          setPasswordRepeat={setPasswordRepeat}
          passwordErrorRepeat={passwordErrorRepeat}
          setPasswordErrorRepeat={setPasswordErrorRepeat}
          passwordTypeRepeat={passwordTypeRepeat}
          setPasswordTypeRepeat={setPasswordTypeRepeat}
        />
      )}
    </>
  )
}

export default App
