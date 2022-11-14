import HeroSection from './components/sections/hero'
import LoginSection from './components/sections/login'
function App() {
  return (
    <div className="App flex items-center justify-center lg:flex-row flex-col">
      <HeroSection
        title="Welcome Again!"
        subtitle={
          <a href="#login-section">
            <span className="lg:hidden">Click here to a</span>
            <span className="hidden lg:inline">A</span>ccess your account with
            e-mail and password!
          </a>
        }
        buttontext="Register Here!"
        onClick={''}
      />
      <LoginSection />
    </div>
  )
}

export default App
