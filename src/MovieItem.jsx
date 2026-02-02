import LikeDislike from "./LikeDislike";

function MovieItem({ movie, onDelete, onToggleWatched, onLike }) {
  return (
    <div className="movie">
      <span className={movie.watched ? "watched" : ""}>
        {movie.name}
      </span>

      <button onClick={() => onToggleWatched(movie.id)}>
        {movie.watched ? "Просмотрен" : "Не просмотрен"}
      </button>

      {movie.watched && (
        <LikeDislike
          value={movie.like}
          onLike={() => onLike(movie.id, "like")}
          onDislike={() => onLike(movie.id, "dislike")}
        />
      )}

      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </div>
  )
}

export default MovieItem;
