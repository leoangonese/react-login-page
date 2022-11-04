import HeroSection from './components/sections/hero'
import LoginSection from './components/sections/login'
function App() {
  return (
    <div className="App flex items-center justify-center lg:flex-row flex-col">
      <HeroSection
        title="Welcome Again!"
        subtitle="Access your account with your e-mail and password!"
        buttontext="Register Here!"
        onClick={''}
      />
      <LoginSection />
    </div>
  )
}

export default App
