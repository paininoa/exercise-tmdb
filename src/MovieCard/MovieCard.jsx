import "./MovieCard.scss";

export default ({ data }) => {
  const { poster_path, title, overview, release_date } = data;
  return (
    <>
      <div className="movieCard">
        <figure>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        </figure>
        <h4>{title}</h4>
        <p>{overview}</p>
        <p className="date">
          <strong>{release_date}</strong>
        </p>
      </div>
    </>
  );
};
