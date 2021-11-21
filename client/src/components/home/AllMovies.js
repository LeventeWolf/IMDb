import React from 'react'
import Movie from './Movie'

export default function AllMovies({movies, showStates}) {
    return (
        <div id="table-wrapper" className={'query'}>
            <div id="table-scroll2" className={'style-8 query'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Director</th>
                        <th>Studio</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie => {return <Movie key={movie.id} movie={movie}/>})}
                    </tbody>
                </table>
            </div>
        </div>


    );
};
