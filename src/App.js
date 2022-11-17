import { useState } from 'react'
import HeaderNavBar from './components/sections/header'
import HeroSection from './components/sections/hero'
import LoginSection from './components/sections/login'
import RegisterPage from './components/sections/register'
function App() {
  const [step, setStep] = useState('Login')
  console.log(step)
  //Login
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //type login
  const [passwordType, setPasswordType] = useState(false)
  // error login
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  //Create account

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
      {step === 'Register' && <RegisterPage setStep={setStep} />}
    </>
  )
}

export default App
