import React from 'react'

export default function Movie({ movie }) {
    return (
        <tr>
            <td>{movie.title} </td>
            <td>{movie.release_date}</td>
            <td>{movie.genres}</td>
            <td>{movie.imdb_score}</td>
            <td>{movie.director}</td>
            <td>{movie.studio}</td>
        </tr>
    )
}
