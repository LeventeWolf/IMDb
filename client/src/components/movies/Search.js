import React from 'react'

export default function Search({showState, search}) {
    if (!showState) return null;


    return (
        <div id={'search-container'} className="container-md border border-dark rounded bg-dark p-3">
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm" style={{height: "30px"}}>Title</span>
                </div>
                <input id="search-title" className="form-control"
                       style={{flex: "none", width: "400px", height: "30px", fontSize: "13pt"}} type="text" name="title"
                       placeholder="" onChange={search}/>
            </div>

            <div id="rating-input-group" className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm" style={{height: "30px"}}>Rating</span>
                </div>
                <select id="rating-search-filter" onChange={search}>
                    <option>=</option>
                    <option>></option>
                    <option>{'<'}</option>
                </select>
                <input id="search-rating" className="form-control" onChange={search}
                       style={{flex: "none", width: "60px", height: "30px", fontSize: "13pt"}} type="text" name="title"
                       placeholder=""/>
            </div>


            <button id="search-movie-btn" className="btn btn-outline-info ">
                Search
            </button>

            <button id="search-movie-btn" className="btn btn-outline-danger"
                    style={{position: "relative", float: "right"}}>
                Reset results
            </button>
        </div>
)
}
