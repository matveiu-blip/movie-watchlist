import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([])
  const [text, setText] = useState("")
  const [editId, setEditId] = useState(-1)

  function addMovie() {
    if (text === "") return

    if (editId === -1) {
      let newMovies = [...movies]
      newMovies.push(text)
      setMovies(newMovies)
    } else {
      let newMovies = [...movies]
      newMovies[editId] = text
      setMovies(newMovies)
      setEditId(-1)
    }

    setText("")
  }

  function deleteMovie(index) {
    let newMovies = []

    for (let i = 0; i < movies.length; i++) {
      if (i !== index) {
        newMovies.push(movies[i])
      }
    }

    setMovies(newMovies)
  }

  function editMovie(index) {
    setText(movies[index])
    setEditId(index)
  }

  return (
    <div>
      <h2 className="title">My Movies</h2>

      <div className="top">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Movie name"
        />

        <button onClick={addMovie}>
          {editId === -1 ? "Add" : "Edit"}
        </button>
      </div>

      <ul className="movieListWrapper">
        {movies.map((movie, index) => (
          <li className="movieList" key={index}>
            {movie}

            <div className="buttonsAtTheEnd" >
              <button onClick={() => editMovie(index)}>Edit</button>
              <button onClick={() => deleteMovie(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
