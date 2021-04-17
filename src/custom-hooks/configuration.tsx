import { useEffect, useState } from "react";
import api from "../api/api";
import Movie from "../types/Movie";

function useConfiguration() {
    const [configuration, setConfiguration] = useState(null as any);
  
    useEffect(() => {
      if(configuration) return;  
      const getConfig = async () => {
        const response = await api.getConfiguration();
        setConfiguration(response.data.images);
      }
      getConfig();
    }, [configuration]);
  
    return configuration;
}

function formatMovie(configuration: any, movie: Movie): Movie {
  const { backdrop_sizes, base_url } = configuration;
  const { backdrop_path } = movie;
  return {
    ...movie,
    backdrop_path: base_url + backdrop_sizes[backdrop_sizes.length - 1] + backdrop_path,
    hasImage: backdrop_path ? true : false
  };
}

export { useConfiguration, formatMovie };