import React, {useState} from 'react';
import AllStudios from './AllStudios';
import Search from './Search';
import Axios from 'axios';

function Studios() {
    const [studios, setStudios] = useState([])
    const [showState, setShowState] = useState({allStudios: false, editStudios: false, searchStudios: false});

    function handleShowAllStudios(mode) {
        if (mode === 'allStudios') {
            setShowState(() => {
                return {allStudios: true, editStudios: false, searchStudios: false}
            });
        }

        if (mode === 'editStudios') {
            setShowState(() => {
                return {allStudios: false, editStudios: true, searchStudios: false}
            });
        }

        Axios.post('http://localhost:3001/api/studios')
            .then(response => {
                setStudios(response.data);
            });
    }

    function deleteMovie(id) {
        Axios.post('http://localhost:3001/api/studios/delete', {movieID: id});

        setStudios(prevState => {
            return prevState.filter(movie => {
                return movie.id !== id
            })
        })
    }

    function editMovie(id, values) {
        Axios.post('http://localhost:3001/api/studios/update', {id, values})
            .then(response => {
                setStudios(response.data)
            })
            .catch(response => {
                setStudios(studios)
            })

        ;
    }

    function resetStudios() {
        Axios.post('http://localhost:3001/api/studios/reset')
            .then(response => {
                setStudios(response.data)
            });
    }

    function handleShowSearch() {
        setShowState(() => {
            return {allStudios: true, editStudios: false, searchStudios: !showState.searchStudios}
        });

    }

    function search(){
        const title_value = document.getElementById('search-title').value;
        const rating_value = document.getElementById('search-rating').value;
        const filter_method = document.getElementById('rating-search-filter').value;
        Axios.post('http://localhost:3001/api/studios/search', {title_value, rating_value, filter_method})
            .then(response => {
                setStudios(response.data)
            });

    }

    return (
        <div id="main">
            <h1 className="">Studios</h1>

            <div style={{width: "100%"}}>
                <button onClick={() => handleShowAllStudios('allStudios')} className="btn btn-outline-info p-3 m-3">
                    Show all Studios
                </button>

                <button onClick={() => handleShowAllStudios('editStudios')} className="btn btn-outline-info p-3 m-3">
                    Edit Studios
                </button>
                <button onClick={() => handleShowSearch()} className="btn btn-outline-info p-3 m-3">
                    Search Studios
                </button>

                <button onClick={resetStudios} className="btn btn-outline-danger p-3 m-3"
                        style={{position: "relative", float: "right", marginRight: "20px"}}>
                    Reset Studios
                </button>
            </div>

            <Search showState={showState.searchStudios} search={search}/>

            <AllStudios studios={studios} deleteMovie={deleteMovie} editMovie={editMovie} showState={showState} />
        </div>
    );
}

export default Studios;
