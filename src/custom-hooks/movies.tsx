import { useEffect, useState } from "react";
import api from "../api/api";
import Movie from "../types/Movie";

function useTopRatedMovies() {
    const [movies, setMovies] = useState(null as Movie[] | null);
  
    useEffect(() => {
      if(movies) return;  
      const getMovies = async () => {
        const response = await api.getTopRatedMovies();
        setMovies(response.data.results);
      };
      getMovies();
    }, [movies])
    
    return movies;
}

export { useTopRatedMovies };