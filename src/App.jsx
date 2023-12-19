import { useEffect, useState } from "react";
import "./App.scss";
import MovieCard from "./MovieCard/MovieCard";
import SearchBar from "./SearchBar/SearchBar";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const query = new URLSearchParams({
      api_key: apiKey,
      language: "en-EN",
    });
    fetch(`https://api.themoviedb.org/3/movie/top_rated?${query.toString()}`)
      .then((response) => response.json())
      .then((obj) => setMovies(obj.results))
      .catch((error) => {
        console.error(error);
        setErrorMessage("There was a problem. Try again.");
      });
  }, []);

  const search = async (searchValue) => {
    const searchParams = new URLSearchParams({
      api_key: apiKey,
      language: "en-EN",
      query: searchValue,
    });
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?${searchParams.toString()}`
    );
    if (!response.ok) {
      console.log(response);
      setErrorMessage("There was a problem. Try again.");
      return;
    }
    const { results } = await response.json();
    setMovies(results);
  };

  return (
    <>
      <h1>
        exercise-tmdb <br /> 15/12
      </h1>

      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {!errorMessage && (
        <>
          <SearchBar onSearch={search} />
          {movies.length !== 0 && (
            <div className="movieList">
              {movies.map((movie) => (
                <MovieCard key={`movie-${movie.id}`} data={movie} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
