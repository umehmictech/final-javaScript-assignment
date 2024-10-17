//const MOVIE_URL = "https://dummyjson.com/products";

//const fetchMovies = async () =>{
   // try{
 //       const response = await fetch (`${MOVIE_URL}`);
  //      const result = await response.json();
   //     return result.movies;
   // } catch (err){
  //      console.log (err);
   // }
//};
//console.log (fetchMovies())

fetch('https://dummyapi.online/api/movies')
    .then((response) => response.json())
    .then((json) => console.log(json));