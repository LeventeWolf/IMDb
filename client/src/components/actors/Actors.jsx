import React from "react";

function Actors() {
    return (
        <div id="main">
            <h1 className="">Actors</h1>

            <div id="button-container" style={{width: "100%"}}>
                <button className="btn btn-outline-info p-3 m-3">
                    Show all Actors
                </button>

                <button className="btn btn-outline-info p-3 m-3">
                    Edit Actors
                </button>
                <button className="btn btn-outline-info p-3 m-3">
                    Search Actors
                </button>

                <button type="button" className="btn btn-outline-danger p-3 m-3" style={{position: "relative", float: "right", marginRight: "20px"}}>
                    Reset Movies
                </button>


            </div>

            {/*Query Container*/}
            <div id="query-container" className="container-md d-none border border-dark rounded bg-dark p-3">
                <form action="javascript:void(0);">
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm"
                                  style={{height: "30px"}}>Title</span>
                        </div>
                        <input id="search-title" className="form-control"
                               style={{flex: "none", width: "400px", height: "30px", fontSize: "13pt"}} type="text"
                               name="title"
                               placeholder=""/>
                    </div>

                    <div id="rating-input-group" className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm"
                                  style={{height: "30px"}}>Rating</span>
                        </div>
                        <select id="rating-search-filter">
                            <option>a</option>
                            <option>b</option>
                            <option>c</option>
                        </select>
                    </div>


                    <button type="button" id="search-movie-btn" className="btn btn-outline-info ">
                        Search
                    </button>

                    <button type="button" id="search-movie-btn" className="btn btn-outline-danger"
                            style={{position: "relative", float: "right"}}
                    >
                        Reset results
                    </button>
                </form>

            </div>
        </div>
  );
}

export default Actors;
