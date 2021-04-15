import { useEffect, useState } from "react";
import api from "../api/api";

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

export default useConfiguration;