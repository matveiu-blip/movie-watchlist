function LikeDislike({ value, onLike, onDislike }) {
  return (
    <div className="likes">
      <button
        className={value === "like" ? "active" : ""}
        onClick={onLike}
      >
        👍
      </button>

      <button
        className={value === "dislike" ? "active" : ""}
        onClick={onDislike}
      >
        👎
      </button>
    </div>
  )
}

export default LikeDislike;
