import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard/MovieCard";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([{ title: "lotr" }]);
  console.log(movies);

  // return (
  //   <div>
  //     {movies.map((m) => (
  //       <div>{m.title}</div>
  //     ))}
  //   </div>
  // );

  useEffect(() => {
    const query = new URLSearchParams({
      api_key: apiKey,
      language: "en-EN",
    });
    fetch(`https://api.themoviedb.org/3/movie/top_rated?${query.toString()}`)
      .then((response) => response.json())
      .then((obj) => setMovies(obj.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>
        exercise-tmdb <br /> 15/12
      </h1>

      <div className="cardsWrapper">
        {movies.map((m) => (
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
