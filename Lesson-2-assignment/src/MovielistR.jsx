// src/components/MoviesList.jsx
import './Profile.css';
import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', description: 'A mind-bending thriller', showDetails: false },
        { title: 'Titanic', genre: 'Drama', description: 'A romantic drama', showDetails: false },
        { title: 'The Matrix', genre: 'Action', description: 'A sci-fi classic', showDetails: false },
        { title: 'The Godfather', genre: 'Crime', description: 'A crime drama', showDetails: false }
    ]);

    const toggleDetails = (index) => {
        setMovies(movies.map((movie, i) => i === index ? { ...movie, showDetails: !movie.showDetails } : movie));
    };

    const removeMovie = (index) => {
        setMovies(movies.filter((_, i) => i !== index));
    };

    return (
        <div>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)}>{movie.title}</span>
                        {movie.showDetails && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
