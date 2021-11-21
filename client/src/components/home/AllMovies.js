import React from 'react'
import Movie from './Movie'

export default function AllMovies({movies, showState}) {
    return (
        <div id="table-wrapper" className={'query'}>
            <div id="table-scroll" style={{height: "300px"}} className={'style-8 query'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th className={showState.query_1 ? 'yellow' : null}>Rating</th>
                        <th>Director</th>
                        <th>Studio</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie => {return <Movie key={movie.id} movie={movie} showState={showState}/>})}
                    </tbody>
                </table>
            </div>
        </div>


    );
};
