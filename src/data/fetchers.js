import Axios from "axios"
import Constants from "expo-constants"

const {apiUrl, apiKey} = Constants.manifest.extra;

const popularMovies = async () => {
  const data = await Axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}&language=es-AR&page=1`);
  return data
}

export {
  popularMovies
}
