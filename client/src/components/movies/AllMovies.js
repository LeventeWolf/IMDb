import React from 'react'
import Movie from './Movie'
import Edit from './Edit'

export default function AllMovies({movies, showState, deleteMovie, editMovie}) {
    return (
        <div id="table-wrapper">
            <div id="table-scroll" className={'style-8'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Director</th>
                        <th>Studio</th>
                        <th>Year</th>

                        {showState.editMovies ? <th>Edit</th> : null}
                        {showState.editMovies ? <th>Del</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        showState.editMovies ?
                            movies.map(movie => {
                                return <Edit key={movie.id} movie={movie}
                                             deleteMovie={() => deleteMovie(movie.id)}
                                             editMovie={editMovie}
                                />
                            })
                            :
                            movies.map(movie => {
                                return <Movie key={movie.id} movie={movie}/>
                            })
                    }
                    </tbody>
                </table>
            </div>
        </div>


    );
};
