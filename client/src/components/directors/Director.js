import React from 'react'

export default function Director({ director }) {
    return (
        <tr>
            <td>{director.name} </td>
            <td>{director.movieTitle}</td>
        </tr>
    )
}
