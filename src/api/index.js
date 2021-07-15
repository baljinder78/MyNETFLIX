// https://api.themoviedb.org/3/movie/upcoming?api_key=571200d7381f2981c98ffe9da9be47e7&language=en-US&page=1
import axios from "axios";


let url="https://api.themoviedb.org/3/movie";
let apikey="571200d7381f2981c98ffe9da9be47e7";


export const Moviedata=async({type})=>
{
    // console.log(`${url}/${type}?api_key=${apikey}&language=en-US&page=1`);
    const {data} = await axios.get(
      `${url}/${type}?api_key=${apikey}&language=en-US&page=1`
    );

    console.log(data);
    return data;
}