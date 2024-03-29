import React, {useState} from 'react';
import AllDirectors from './AllDirectors';
import Search from './Search';
import Axios from 'axios';

function Directors() {
    const [directors, setDirectors] = useState([])
    const [showState, setShowState] = useState({allDirectors: false, editDirectors: false, searchDirectors: false});
    const [addNewDirectorState, setAddNewDirectorState] = useState(false);

    function handleShowAllDirectors(mode) {
        if (mode === 'allDirectors') {
            setShowState(() => {
                return {allDirectors: true, editDirectors: false, searchDirectors: false}
            });

            const addNewMovieButton = document.getElementById('addNewDirectorButton')
            addNewMovieButton.classList.add('d-none')
            setAddNewDirectorState(false)
        }

        if (mode === 'editDirectors') {
            setShowState(() => {
                return {allDirectors: false, editDirectors: true, searchDirectors: false}
            });

            const addNewMovieButton = document.getElementById('addNewDirectorButton')
            addNewMovieButton.classList.remove('d-none')
            setAddNewDirectorState(false)
        }

        Axios.post('http://localhost:3001/api/directors')
            .then(response => {
                setDirectors(response.data);
            });
    }

    function deleteDirector(id) {
        Axios.post('http://localhost:3001/api/directors/delete', {directorID: id});

        setDirectors(prevState => {
            return prevState.filter(director => {
                return director.id !== id
            })
        })
    }

    function editDirector(id, values) {
        Axios.post('http://localhost:3001/api/directors/update', {id, values})
            .then(response => {
                setDirectors(response.data)
            })
            .catch(response => {
                setDirectors(directors)
            })

        ;
    }

    function resetDirectors() {
        Axios.post('http://localhost:3001/api/directors/reset')
            .then(response => {
                setDirectors(response.data)
            });
    }

    function handleShowSearch() {
        setShowState(() => {
            return {allDirectors: true, editDirectors: false, searchDirectors: !showState.searchDirectors}
        });
    }

    function addNewDirectorToggle() {
        setAddNewDirectorState(!addNewDirectorState)
    }

    function addNewDirector(values){
        Axios.post('http://localhost:3001/api/directors/add', {values})
            .then(response => {
                setDirectors(response.data)
            });

    }

    function search(){
        const title_value = document.getElementById('search-title').value;
        const rating_value = document.getElementById('search-rating').value;
        const filter_method = document.getElementById('rating-search-filter').value;
        Axios.post('http://localhost:3001/api/directors/search', {title_value, rating_value, filter_method})
            .then(response => {
                setDirectors(response.data)
            });

    }

    return (
        <div id="main">
            <h1 className="">Directors</h1>

            <div style={{width: "100%"}}>
                <button onClick={() => handleShowAllDirectors('allDirectors')} className="btn btn-outline-info p-3 m-3">
                    Show all Directors
                </button>

                <button onClick={() => handleShowAllDirectors('editDirectors')} className="btn btn-outline-info p-3 m-3">
                    Edit Directors
                </button>

                <button id={'addNewDirectorButton'} onClick={addNewDirectorToggle} className="d-none btn btn-outline-info p-3 m-3"
                        style={{position: "relative", float: "right", marginRight: "20px"}}>
                    Add New Director
                </button>
            </div>

            <Search showState={showState.searchDirectors} search={search}/>

            <AllDirectors directors={directors} deleteDirector={deleteDirector} editDirector={editDirector} showState={showState}
                          addNewDirector={addNewDirector} addNewDirectorSate={addNewDirectorState} />
        </div>
    );
}

export default Directors;
