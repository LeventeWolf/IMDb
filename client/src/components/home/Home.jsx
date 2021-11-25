import React, {useEffect, useState} from "react";
import AllMovies from "../home/AllMovies";
import Axios from "axios";
import Diagrams from "./Diagrams";

function Home() {
    const [movies, setMovies] = useState([])
    const [showState, setShowState] = useState({query_1: false, query_2: false, query_3: false});
    const [showDiagram, setShowDiagram] = useState(false);
    const [diagramData, setDiagramData] = useState({pieData: {}, barData: {}, xData: {}})

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

            Axios.post('http://localhost:3001/api/nested-query/query-3')
                .then(response => {
                    setMovies(response.data);
                });
        }
    }

    function handleShowDiagram() {
        setShowDiagram(!showDiagram);

        Axios.post('http://localhost:3001/api/chart/genre-chart-data')
            .then(response => {
                setDiagramData(prevState => {return {...prevState, pieData: response.data}})
            });

        Axios.post('http://localhost:3001/api/chart/bar-chart-data')
            .then(response => {
                setDiagramData(prevState => {return {...prevState, barData: response.data}})
            });
    }


    useEffect(() => {
        const diagrams = document.getElementById("diagrams-container");

        if (diagrams) {
            diagrams.scrollIntoView();
        }
    }, [showDiagram]);


    return (
        <div id="main">
            <h1>Home</h1>

            {/*Nested Queries*/}
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


            {/*Diagrams*/}
            <div id="diagram-container" className="p-3">
                <h3>Diagrams</h3>
                <button type="button" id="all-movie-btn" className="btn btn-outline-success p-3 m-3"
                        onClick={() => handleShowDiagram()}>
                    Show diagrams
                </button>

                <Diagrams show={showDiagram} data={diagramData}/>
            </div>
        </div>
    );
}

export default Home;
