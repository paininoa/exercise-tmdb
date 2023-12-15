import "./MovieCard.scss";

export default ({ title, description, cover, date }) => {
  return (
    <>
      <div className="movieCard">
        <figure>
          <img src={`${cover}`} alt={`cover ${title}`} />
        </figure>
        <h4>{title}</h4>
        <p>{description}</p>
        <p className="date">
          <strong>{date}</strong>
        </p>
      </div>
    </>
  );
};
