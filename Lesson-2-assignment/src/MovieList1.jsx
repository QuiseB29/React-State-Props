// src/components/MoviesList.jsx
import './Profile.css';
import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', description: 'A mind-bending thriller' },
        { title: 'Titanic', genre: 'Drama', description: 'A romantic drama' },
        { title: 'The Matrix', genre: 'Action', description: 'A sci-fi classic' },
        { title: 'The Godfather', genre: 'Crime', description: 'A crime drama' }
    ]);

    return (
        <div>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
