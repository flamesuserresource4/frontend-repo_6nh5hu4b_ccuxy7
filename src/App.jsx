import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Stories from './components/Stories'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stories />
      <CTA />
      <footer className="py-10 border-t border-blue-100 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} DTEF — Department of Tertiary Education Financing, Botswana</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-700">Privacy</a>
            <a href="#" className="hover:text-blue-700">Terms</a>
            <a href="/test" className="hover:text-blue-700">System test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
