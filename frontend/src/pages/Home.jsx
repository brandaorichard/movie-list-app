import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Spider-man", release_date: "1999" },
    { id: 3, title: "Inception", release_date: "2011" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter movie name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
