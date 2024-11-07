document.addEventListener("DOMContentLoaded", () => {
    fetchMovies ();
   // console.log (ListOfMovies)
    
})

const MOVIE_URL = 'https://dummyapi.online/api/movies' ;
//console.log(MOVIE_URL)

const fetchMovies = async () =>{
    try{
        const response = await fetch (MOVIE_URL);
        console.log (response)
        const result = await response.json();
        console.log (result);
        renderMovies (result);
        return result;
    } 
    catch (err){
        console.log (err);
    }
};
//console.log (fetchMovies())

const renderMovies = (movies) => {

    const movieContainer = document.getElementById('movie-container');
    movies.forEach( movie => {

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-card');

        const moviePoster = document.createElement('img');
        moviePoster.src = "https://via.placeholder.com/150?text=No+Image+Available";
        movieDiv.appendChild(moviePoster);

        const movieTitle = document.createElement('h1');
        movieTitle.textContent = movie.movie;
        movieDiv.appendChild(movieTitle);

        const movieRating = document.createElement('p');
        movieRating.textContent = 'rating: ' + movie.rating;
        movieDiv.appendChild(movieRating);

        //const moviePlot = document.createElement('p');
       // moviePlot.textContent = movie.overview;
        //movieDiv.appendChild(moviePlot);
        movieContainer.appendChild(movieDiv)
    } );
};