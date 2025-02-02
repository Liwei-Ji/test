import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Info from './components/Info'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Info />
    </div>
  )
}

