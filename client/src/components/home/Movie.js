import React from 'react'

export default function Movie({ movie, showState }) {
    if (showState.query_1) {
        return (
            <tr>
                <td>{movie.title} </td>
                <td>{movie.release_date}</td>
                <td>{movie.genres}</td>
                <td className={showState ? 'yellow' : null}>{movie.imdb_score}</td>
                <td>{movie.director}</td>
                <td>{movie.studio}</td>
            </tr>
        );
    }

    if (showState.query_2) {
        return (
            <tr>
                <td style={{width: "300px"}}>{movie.title} </td>
                <td> {movie.release_date}</td>
                <td> {movie.imdb_score}</td>
                <td style={{textAlign: "center"}} className={showState ? 'yellow' : null} >{movie.Number_of_Actors}</td>
                <td>{movie.genres}</td>
                <td>{movie.studio}</td>
            </tr>
        );
    }

    if (showState.query_3) {
        return (
            <tr>
                <td style={{width: "300px"}}>{movie.title} </td>
                <td> {movie.release_date}</td>
                <td> {movie.imdb_score}</td>
                <td>{movie.genres}</td>
                <td>{movie.studio}</td>
            </tr>
        );
    }
}
