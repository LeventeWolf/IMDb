import React from 'react'

export default function Studio({ studio }) {
    return (
        <tr>
            <td>{studio.name} </td>
            <td>{studio.movieTitle}</td>
        </tr>
    )
}
