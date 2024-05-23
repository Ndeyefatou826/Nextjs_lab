import { useEffect, useState } from "react";
function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    const response = await fetch("api/movies");
    const movies = await response.json();
    setMovies(movies);
  }, []);
    return (
        <div>
            <h1>Movie List</h1>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Release Year</th>
                </tr>
                </thead>
                <tbody>
                {movies.map(movie => {
                    return (
                    <tr key={movie.id}>
                        <td>{movie.title}</td>
                        <td>{movie.releaseYear}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
    );
}
export default MovieList;