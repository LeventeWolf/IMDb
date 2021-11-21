import React from 'react'

export default function Movie({ movie, showState }) {
    return (
        <tr>
            <td>{movie.title} </td>
            <td>{movie.genres}</td>
            <td className={showState ? 'yellow' : null}>{movie.imdb_score}</td>
            <td>{movie.director}</td>
            <td>{movie.studio}</td>
            <td>{movie.release_date}</td>
        </tr>
    )
}
