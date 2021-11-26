import React from 'react'
import Movie from './Movie'
import Edit from './Edit'
import NewMovie from "./NewMovie";

export default function AllMovies({movies, showState, deleteMovie, editMovie, addNewMovie, addNewMovieState}) {
    return (
        <div id="table-wrapper">
            <div id="table-scroll" className={'style-8'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Genres</th>
                        <th>Rating</th>
                        <th>Length</th>
                        <th>Seen</th>

                        {showState.editMovies ? <th>Edit</th> : null}
                        {showState.editMovies ? <th>Del</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        addNewMovieState ? <NewMovie key={0} addNewMovie={addNewMovie}/> : null
                    }
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
