import React, {useState} from "react";
import AllMovies from "../home/AllMovies";
import Axios from "axios";

function Home() {
    const [movies, setMovies] = useState([])
    const [showState, setShowState] = useState({query_1: false, query_2: false, query_3: false});

    function handleShowAllMovies(mode) {
        if (mode === 'query_1') {
            setShowState(() => {
                return {query_1: true, query_2: false, query_3: false}
            });

            Axios.post('http://localhost:3001/api/nested-query/highest-rated-movies')
                .then(response => {
                    setMovies(response.data);
                });
        }

        if (mode === 'query_2') {
            setShowState(() => {
                return {query_1: false, query_2: true, query_3: false}
            });

            Axios.post('http://localhost:3001/api/nested-query/number-of-actors-per-movie')
                .then(response => {
                    setMovies(response.data);
                });
        }

        if (mode === 'query_3') {
            setShowState(() => {
                return {query_1: false, query_2: false, query_3: true}
            });
        }
    }


    return (
        <div id="main">
            <h1>Home</h1>
            <div id="nested-query-container" className="p-3" style={{height: "500px"}}>
                <h3>Nested Queries</h3>
                <div id="query-1">
                    <button type="button" id="all-movie-btn" className="btn btn-outline-warning p-3 m-3"
                            onClick={() => handleShowAllMovies('query_1')}>
                        Highest rated movies
                    </button>

                    <button type="button" id="all-movie-btn" className="btn btn-outline-warning p-3 m-3"
                            onClick={() => handleShowAllMovies('query_2')}>
                        Number of actors / movie
                    </button>

                    <button type="button" id="all-movie-btn" className="btn btn-outline-warning p-3 m-3"
                            onClick={() => handleShowAllMovies('query_3')}>
                        Nested Query 3
                    </button>
                </div>

                <AllMovies movies={movies} showState={showState} />

            </div>



            <div id="diagram-container" className="p-3">
                <h3>Diagrams</h3>
                <button type="button" id="all-movie-btn" className="btn btn-outline-success p-3 m-3"
                        onClick={function(){}}>
                    Movie diagram
                </button>

            </div>
        </div>
    );
}

export default Home;
