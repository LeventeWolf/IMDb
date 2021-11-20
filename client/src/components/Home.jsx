import React from "react";

function Home() {
    return (
        <div id="main">
            <h1>Home</h1>
            <div id="nested-query-container" className="p-3" style={{height: "500px"}}>
                <h3>Nested Queries</h3>
                <div id="query-1">
                    <button type="button" id="all-movie-btn" className="btn btn-outline-warning p-3 m-3"
                            onClick="show('all-movie')">
                        Highest rated movies
                    </button>

                    <button type="button" id="all-movie-btn" className="btn btn-outline-warning p-3 m-3"
                            onClick="show('all-movie')">
                        Nested Query 2
                    </button>

                    <button type="button" id="all-movie-btn" className="btn btn-outline-warning p-3 m-3"
                            onClick="show('all-movie')">
                        Nested Query 3
                    </button>
                </div>


            </div>

            <div id="diagram-container" className="p-3">
                <h3>Diagrams</h3>
                <button type="button" id="all-movie-btn" className="btn btn-outline-success p-3 m-3"
                        onClick="show('all-movie')">
                    Movie diagram
                </button>

            </div>
        </div>
    );
}

export default Home;
