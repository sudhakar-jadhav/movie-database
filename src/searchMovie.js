import React, { useState } from "react";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchmovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=014611f8c5d711f0a05b25a4687c39de&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={searchmovies}>
        <label className="label" htmlFor="query">
          <input
            className="input"
            type="text"
            name="query"
            placeholder=""
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>{" "}
          <br></br>
          <button className="button" type="submit">
            Search
          </button>
        </label>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="card" key={movie.id}>
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>RELEASE DATE: {movie.release_date}</small>
                </p>
                <p>
                  <small>RATING: {movie.vote_average}</small>
                </p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchMovies;

/* 
API link - https://www.themoviedb.org/settings/api
*/
