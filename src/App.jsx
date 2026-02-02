import { useState } from "react";
import MovieItem from "./MovieItem";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([])
  const [text, setText] = useState("")
  const [showWatched, setShowWatched] = useState(false)

  function addMovie() {
    if (text === "") return

    const newMovie = {
      id: Date.now(),
      name: text,
      watched: false,
      like: null
    }

    setMovies([...movies, newMovie])
    setText("")
  }

  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id))
  }

  function toggleWatched(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched, like: null }
          : movie
      )
    )
  }

  function setLike(id, value) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, like: value } : movie
      )
    )
  }

  const filteredMovies = movies.filter(
    (movie) => movie.watched === showWatched
  )

  return (
    <div className="box">
      <h2>Фильмы</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Название фильма"
      />
      <button onClick={addMovie}>Add</button>

      <div className="filter">
        <button onClick={() => setShowWatched(!showWatched)}>
          {showWatched
            ? "Показать не просмотренные"
            : "Показать просмотренные"}
        </button>
      </div>

      {filteredMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={deleteMovie}
          onToggleWatched={toggleWatched}
          onLike={setLike}
        />
      ))}
    </div>
  )
}

export default App;
