import Hero from "./app/components/Hero"
import Movielist from "./app/components/Movielist"
import MovieCard from "./app/components/Movielist/MovieCard"
import Nav from "./app/components/nav"



function App() {
  

  return (
    <div className="bg-gray-900 min-h-screen ">
   <div className="max-w-4xl mx-auto">
       <Nav  />
       <Hero/>
        <Movielist/>
       
        
   </div>
    </div>
  )
}

export default App




