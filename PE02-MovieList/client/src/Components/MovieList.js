import React, { useState } from 'react';
import './MovieList.css';

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const movies = [
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
    { title: 'Gladiator', genre: 'Drama', releaseYear: 2000 },
    { title: 'Titanic', genre: 'Romance', releaseYear: 1997 },
    { title: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999 },
    { title: 'The Godfather', genre: 'Drama', releaseYear: 1972 },
    { title: 'Avengers: Endgame', genre: 'Action', releaseYear: 2019 },
    { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994 },
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Lion King', genre: 'Animation', releaseYear: 1994 },
    { title: 'Jurassic Park', genre: 'Adventure', releaseYear: 1993 },
    { title: 'The Silence of the Lambs', genre: 'Thriller', releaseYear: 1991 },
    { title: 'Schindler\'s List', genre: 'Biography', releaseYear: 1993 },
    { title: 'Fight Club', genre: 'Drama', releaseYear: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', releaseYear: 2001 },
    { title: 'The Lord of the Rings: The Two Towers', genre: 'Fantasy', releaseYear: 2002 },
    { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', releaseYear: 2003 },
    { title: 'Star Wars: Episode IV - A New Hope', genre: 'Sci-Fi', releaseYear: 1977 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', genre: 'Sci-Fi', releaseYear: 1980 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', genre: 'Sci-Fi', releaseYear: 1983 },
    { title: 'The Terminator', genre: 'Action', releaseYear: 1984 },
    { title: 'Terminator 2: Judgment Day', genre: 'Action', releaseYear: 1991 },
    { title: 'Alien', genre: 'Horror', releaseYear: 1979 },
    { title: 'Aliens', genre: 'Horror', releaseYear: 1986 },
    { title: 'Blade Runner', genre: 'Sci-Fi', releaseYear: 1982 },
    { title: 'Back to the Future', genre: 'Adventure', releaseYear: 1985 },
    { title: 'Indiana Jones and the Raiders of the Lost Ark', genre: 'Adventure', releaseYear: 1981 },
    { title: 'Indiana Jones and the Temple of Doom', genre: 'Adventure', releaseYear: 1984 },
    { title: 'Indiana Jones and the Last Crusade', genre: 'Adventure', releaseYear: 1989 },
    { title: 'The Good, the Bad and the Ugly', genre: 'Western', releaseYear: 1966 },
    { title: 'The Godfather: Part II', genre: 'Drama', releaseYear: 1974 },
    { title: 'The Godfather: Part III', genre: 'Drama', releaseYear: 1990 },
    { title: 'Goodfellas', genre: 'Crime', releaseYear: 1990 },
    { title: 'The Departed', genre: 'Crime', releaseYear: 2006 },
    { title: 'The Wolf of Wall Street', genre: 'Biography', releaseYear: 2013 },
    { title: 'Django Unchained', genre: 'Western', releaseYear: 2012 },
    { title: 'Inglourious Basterds', genre: 'Adventure', releaseYear: 2009 },
    { title: 'Kill Bill: Vol. 1', genre: 'Action', releaseYear: 2003 },
    { title: 'Kill Bill: Vol. 2', genre: 'Action', releaseYear: 2004 },
    { title: 'Reservoir Dogs', genre: 'Crime', releaseYear: 1992 },
    { title: 'The Hateful Eight', genre: 'Western', releaseYear: 2015 },
    { title: 'Once Upon a Time in Hollywood', genre: 'Comedy', releaseYear: 2019 },
    { title: 'The Big Lebowski', genre: 'Comedy', releaseYear: 1998 },
    { title: 'Fargo', genre: 'Crime', releaseYear: 1996 },
    { title: 'No Country for Old Men', genre: 'Crime', releaseYear: 2007 },
    { title: 'There Will Be Blood', genre: 'Drama', releaseYear: 2007 },
    { title: 'The Social Network', genre: 'Biography', releaseYear: 2010 },
    { title: 'The Imitation Game', genre: 'Biography', releaseYear: 2014 },
    { title: 'A Beautiful Mind', genre: 'Biography', releaseYear: 2001 },
    { title: 'The Theory of Everything', genre: 'Biography', releaseYear: 2014 },
    { title: 'Bohemian Rhapsody', genre: 'Biography', releaseYear: 2018 },
    { title: 'Rocketman', genre: 'Biography', releaseYear: 2019 },
    { title: 'La La Land', genre: 'Drama', releaseYear: 2016 },
    { title: 'Whiplash', genre: 'Drama', releaseYear: 2014 },
    { title: 'Black Swan', genre: 'Drama', releaseYear: 2010 },
    { title: 'Birdman', genre: 'Comedy', releaseYear: 2014 },
    { title: 'The Grand Budapest Hotel', genre: 'Comedy', releaseYear: 2014 },
    { title: 'Moonrise Kingdom', genre: 'Comedy', releaseYear: 2012 },
    { title: 'The Royal Tenenbaums', genre: 'Comedy', releaseYear: 2001 },
    { title: 'Fantastic Mr. Fox', genre: 'Animation', releaseYear: 2009 },
    { title: 'Isle of Dogs', genre: 'Animation', releaseYear: 2018 },
    { title: 'The French Dispatch', genre: 'Comedy', releaseYear: 2021 },
    { title: 'Parasite', genre: 'Thriller', releaseYear: 2019 },
    { title: 'Oldboy', genre: 'Thriller', releaseYear: 2003 },
    { title: 'Memories of Murder', genre: 'Crime', releaseYear: 2003 },
    { title: 'The Handmaiden', genre: 'Drama', releaseYear: 2016 },
    { title: 'Snowpiercer', genre: 'Action', releaseYear: 2013 },
    { title: 'Train to Busan', genre: 'Horror', releaseYear: 2016 },
    { title: 'The Host', genre: 'Horror', releaseYear: 2006 },
    { title: 'Burning', genre: 'Drama', releaseYear: 2018 },
    { title: 'Shoplifters', genre: 'Drama', releaseYear: 2018 },
    { title: 'Spirited Away', genre: 'Animation', releaseYear: 2001 },
    { title: 'My Neighbor Totoro', genre: 'Animation', releaseYear: 1988 },
    { title: 'Princess Mononoke', genre: 'Animation', releaseYear: 1997 },
    { title: 'Howl\'s Moving Castle', genre: 'Animation', releaseYear: 2004 },
    { title: 'The Wind Rises', genre: 'Animation', releaseYear: 2013 },
    { title: 'Your Name', genre: 'Animation', releaseYear: 2016 },
    { title: 'Weathering with You', genre: 'Animation', releaseYear: 2019 },
    { title: 'Akira', genre: 'Animation', releaseYear: 1988 },
    { title: 'Ghost in the Shell', genre: 'Animation', releaseYear: 1995 },
    { title: 'Perfect Blue', genre: 'Animation', releaseYear: 1997 },
    { title: 'Paprika', genre: 'Animation', releaseYear: 2006 },
    { title: 'The Girl Who Leapt Through Time', genre: 'Animation', releaseYear: 2006 },
    { title: 'A Silent Voice', genre: 'Animation', releaseYear: 2016 },
    { title: 'Grave of the Fireflies', genre: 'Animation', releaseYear: 1988 },
    { title: 'The Tale of the Princess Kaguya', genre: 'Animation', releaseYear: 2013 },
    { title: 'The Secret World of Arrietty', genre: 'Animation', releaseYear: 2010 },
    { title: 'When Marnie Was There', genre: 'Animation', releaseYear: 2014 },
    { title: 'The Red Turtle', genre: 'Animation', releaseYear: 2016 },
    { title: 'The Breadwinner', genre: 'Animation', releaseYear: 2017 },
    { title: 'Song of the Sea', genre: 'Animation', releaseYear: 2014 },
    { title: 'The Secret of Kells', genre: 'Animation', releaseYear: 2009 },
    { title: 'Wolfwalkers', genre: 'Animation', releaseYear: 2020 },
  ];

  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>
      <div className="filter-container">
        <label htmlFor="genre-select">Filter by Genre: </label>
        <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <ul className="movie-list">
        {filteredMovies.map((movie, index) => (
          <li key={index} className="movie-card" onClick={() => handleMovieClick(movie.title)}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
