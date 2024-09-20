
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="flex items-center flex-col mx-auto px-8 py-16 gap-8 max-w-7xl">
  <h1 className="font-extrabold text-[48px] md:text-[64px] mt-3 text-center leading-tight">
    <span className="text-[#e7445a]">Discover Your Next Adventure with AI</span>
    <br /> Personalized Itineraries at Your Fingertips
  </h1>

  <p className="text-lg md:text-xl text-[#1f2927] text-center max-w-3xl">
    Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
  </p>
  <img src="https://wallpaperswide.com/download/travel_the_world_3-wallpaper-1280x720.jpg" className='rounded-xl shadow-2xl -mt-5'/>
  <Link to="/create-trip">
    <Button className="bg-blue-500 text-white font-semibold px-8 py-4 rounded-md shadow-md hover:bg-blue-600 transition-all">
      Get Started, For Free
    </Button>
  </Link>
  
</div>

  )
}



export default Hero
