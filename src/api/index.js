// https://api.themoviedb.org/3/movie/upcoming?api_key=571200d7381f2981c98ffe9da9be47e7&language=en-US&page=1
// https://api.themoviedb.org/3/movie/${params}?api_key=571200d7381f2981c98ffe9da9be47e7&language=en-US`
import axios from "axios";


let url_api="https://api.themoviedb.org/3/movie";
let apikey="571200d7381f2981c98ffe9da9be47e7";
let url="http://localhost:8080"

export const Moviedata=async({type})=>
{
    // console.log(`${url}/${type}?api_key=${apikey}&language=en-US&page=1`);
    const {data} = await axios.get(
      `${url_api}/${type}?api_key=${apikey}&language=en-US&page=1`
    );

    console.log(data);
    return data;
}
export const Movieallinfo = async ({ id }) => {
  // console.log(`${url}/${type}?api_key=${apikey}&language=en-US&page=1`);
  console.log(id);
  const { data } = await axios.get(
    `${url_api}/${id}?api_key=${apikey}&language=en-US`
  );

  console.log(data);
  return data;
};


export const register=async({formdata})=>
{

  if(formdata){
    try{
    const { data } = await axios.post(
      `${url}/register`,formdata
    );
    
    return {data};
    }
    catch(err)
    {
      return false;
    }
  }
  else{
    console.log("err")
  }

}



export const login = async ({ formdata }) => {
  if (formdata) {
    try {
      const { data } = await axios.post(`${url}/login`, formdata);

      return { data };
    } catch (err) {
      return false;
    }
  } else {
    console.log('err');
  }
};