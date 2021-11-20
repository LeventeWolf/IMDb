import React from 'react'

export default function Actor({ actor }) {
    return (
        <tr>
            <td>{actor.name} </td>
            <td>{actor.movieTitle}</td>
        </tr>
    )
}
