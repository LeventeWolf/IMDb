import React from 'react'
import Movie from './Movie'

export default function AllMovies({movies, showState}) {
    /* Highest Rated Movies */
    if (showState.query_1) {
        return (
            <div id="table-wrapper" className={'query'}>
                <div id="table-scroll" style={{height: "300px"}} className={'style-8 query'}>
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Genre</th>
                            <th className={'yellow'}>Rating</th>
                            <th>Director</th>
                            <th>Studio</th>
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map(movie => {return <Movie key={movie.id} movie={movie} showState={showState}/>})}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    /* Number of actors / movie */
    if (showState.query_2) {
        return (
            <div id="table-wrapper" className={'query'}>
                <div id="table-scroll" style={{height: "300px"}} className={'style-8 query'}>
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th className={'yellow text-center'}>Number of Actors</th>
                            <th>Genres</th>
                            <th>Studio</th>
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map(movie => {return <Movie key={movie.id} movie={movie} showState={showState}/>})}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }



    return null;
};
