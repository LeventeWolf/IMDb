import React, {useState} from 'react';
import AllMovies from './AllMovies';
import Search from './Search';
import Axios from 'axios';

function Movies() {
    const [movies, setMovies] = useState([])
    const [showState, setShowState] = useState({allMovies: false, editMovies: false, searchMovies: false});
    const [addNewMovieState, setAddNewMovieState] = useState(false);

    function handleShowAllMovies(mode) {
        if (mode === 'allMovies') {
            setShowState(() => {
                return {allMovies: true, editMovies: false, searchMovies: false}
            });
            const addNewMovieButton = document.getElementById('addNewMovie')
            addNewMovieButton.classList.add('d-none')
            setAddNewMovieState(false)
        }

        if (mode === 'editMovies') {
            setShowState(() => {
                return {allMovies: false, editMovies: true, searchMovies: false}
            });
            const addNewMovieButton = document.getElementById('addNewMovie')
            addNewMovieButton.classList.remove('d-none')
        }

        Axios.post('http://localhost:3001/api/movies')
            .then(response => {
                setMovies(response.data);
            });
    }

    function deleteMovie(id) {
        Axios.post('http://localhost:3001/api/movies/delete', {movieID: id});

        setMovies(prevState => {
            return prevState.filter(movie => {
                return movie.id !== id
            })
        })
    }

    function editMovie(id, values) {
        Axios.post('http://localhost:3001/api/movies/update', {id, values})
            .then(response => {
                setMovies(response.data)
            })
            .catch(response => {
                setMovies(movies)
            })
        ;
    }

    function addNewMovieToggle() {
        setAddNewMovieState(!addNewMovieState)
    }

    function addNewMovie(values){
        Axios.post('http://localhost:3001/api/movies/add', {values})
            .then(response => {
                setMovies(response.data)
            });

    }

    function handleShowSearch() {
        setShowState(() => {
            return {allMovies: true, editMovies: false, searchMovies: !showState.searchMovies}
        });

        const addNewMovieButton = document.getElementById('addNewMovie')
        addNewMovieButton.classList.add('d-none')
        setAddNewMovieState(false)


    }

    function search(){
        const title_value = document.getElementById('search-title').value;
        const rating_value = document.getElementById('search-rating').value;
        const filter_method = document.getElementById('rating-search-filter').value;
        Axios.post('http://localhost:3001/api/movies/search', {title_value, rating_value, filter_method})
            .then(response => {
                setMovies(response.data)
            });

    }

    return (
        <div id="main">
            <h1 className="">Movies</h1>

            <div style={{width: "100%"}}>
                <button onClick={() => handleShowAllMovies('allMovies')} className="btn btn-outline-info p-3 m-3">
                    Show all Movies
                </button>

                <button onClick={() => handleShowAllMovies('editMovies')} className="btn btn-outline-info p-3 m-3">
                    Edit Movies
                </button>
                <button onClick={() => handleShowSearch()} className="btn btn-outline-info p-3 m-3">
                    Search Movies
                </button>

                <button onClick={addNewMovieToggle} id={'addNewMovie'} className="d-none btn btn-outline-info p-3 m-3"
                        style={{position: "relative", float: "right", marginRight: "20px"}}>
                    Add New Movie
                </button>
            </div>

            <Search showState={showState.searchMovies} search={search}/>

            <AllMovies movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} showState={showState}
                       addNewMovie={addNewMovie} addNewMovieState={addNewMovieState} />
        </div>
    );
}

export default Movies;
