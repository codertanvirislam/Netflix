import { useEffect } from "react";
import MovieCard from "./MovieCard"

const url = 'https://fakestoreapi.com/products'


function Movielist() {

  async function getMovies() {
    const respons = await fetch(url).then(res => res.json());
    
   console.log(respons)
   

  }
  useEffect(() => {
    getMovies();
  }, []);
  



  

  return (
    <div className="my-5 ">
     <h1 className="text-gray-100 font-bold text-3xl"> Popular on Netflix🔥</h1>
     <div className="my-4 flex items-center flex-wrap space-x-3 ">
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
     </div>
    </div>
  )
}

export default Movielist    