import { useEffect, useState } from "react";
import "./App.scss";
import MovieCard from "./MovieCard/MovieCard";
import SearchBar from "./SearchBar/SearchBar";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  console.log(movies);
  console.log(filteredMovies);
  console.log(searchValue);

  const handleChange = (inputValue) => setSearchValue(inputValue);

  const onSearch = () => {
    setFilteredMovies(movies);
    const newList = movies.filter((title) =>
      title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredMovies(newList);
  };

  useEffect(() => {
    const query = new URLSearchParams({
      api_key: apiKey,
      language: "en-EN",
    });
    fetch(`https://api.themoviedb.org/3/movie/top_rated?${query.toString()}`)
      .then((response) => response.json())
      .then((obj) => {
        return setMovies(obj.results), setFilteredMovies(obj.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>
        exercise-tmdb <br /> 15/12
      </h1>

      <div className="searchWrapper">
        <SearchBar
          searchValue={searchValue}
          handleChange={handleChange}
          handleClick={onSearch}
        />
      </div>

      <div className="cardsWrapper">
        {filteredMovies.map((m) => (
          <MovieCard
            key={m.id}
            title={m.title}
            description={m.overview}
            cover={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
            date={m.release_date}
          />
        ))}
      </div>
    </>
  );
}

export default App;
