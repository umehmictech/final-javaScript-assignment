const MOVIE_URL = 'https://dummyapi.online/api/movies' ;

const fetchMovies = async () =>{
    try{
        const response = await fetch (`${MOVIE_URL}`);
        const result = await response.json();
        return result.movies;
    } 
    catch (err){
        console.log (err);
    }
};
console.log (fetchMovies())

const renderMovies = (movie) => {
    const movieContainer = document.querySelector('movie-container');
    movie.forEach( movie => {

        movieDiv = document.createElement('div');
        movieDiv.classList.add(movie-card);

        const moviePoster = document.createElement('img');
        moviePoster.src = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
        movieCard.appendChild(moviePoster);


        const movieTitle = document.createElement('h1');
        movieTitle.textContent = movie.title;
        movieCard.appendChild(movieTitle);

        const movieReleaseDate = document.createElement('p');
        movieReleaseDate.textContent = 'Release Date: ' + movie.release_date;
        movieCard.appendChild(movieReleaseDate);

        const moviePlot = document.createElement('p');
        moviePlot.textContent = movie.overview;
        movieCard.appendChild(moviePlot);

    } );
};
 
document.addEventListener("DOMContentLoaded", async() => {
    const ListOfProducts = await fetchProduct ();
    renderProduct (ListofProducts);
})


