import React, {useState} from 'react';
import AllActors from './AllActors';
import Search from './Search';
import Axios from 'axios';

function Actors() {
    const [actors, setActors] = useState([])
    const [showActorState, setShowActorState] = useState({allActors: false, editActors: false, searchActors: false});

    function handleShowAllActors(mode) {
        if (mode === 'allActors') {
            setShowActorState(() => {
                return {allActors: true, editActors: false, searchActors: false}
            });
        }

        if (mode === 'editActors') {
            setShowActorState(() => {
                return {allActors: false, editActors: true, searchActors: false}
            });
        }

        Axios.post('http://localhost:3001/api/actors')
            .then(response => {
                setActors(response.data);
            });
    }

    function deleteActor(id) {
        Axios.post('http://localhost:3001/api/actors/delete', {actorID: id});

        setActors(prevState => {
            return prevState.filter(actor => {
                return actor.id !== id
            })
        })
    }

    function editActor(id, values) {
        Axios.post('http://localhost:3001/api/actors/update', {id, values})
            .then(response => {
                setActors(response.data)
            })
            .catch(response => {
                setActors(actors)
            })

        ;
    }

    function resetActors() {
        Axios.post('http://localhost:3001/api/actors/reset')
            .then(response => {
                setActors(response.data)
            });
    }

    function handleShowSearch() {
        setShowActorState(() => {
            return {allActors: true, editActors: false, searchActors: !showActorState.searchActors}
        });

    }

    function search(){
        const title_value = document.getElementById('search-title').value;
        const rating_value = document.getElementById('search-rating').value;
        const filter_method = document.getElementById('rating-search-filter').value;
        Axios.post('http://localhost:3001/api/actors/search', {title_value, rating_value, filter_method})
            .then(response => {
                setActors(response.data)
            });

    }

    return (
        <div id="main">
            <h1 className="">Actors</h1>

            <div style={{width: "100%"}}>
                <button onClick={() => handleShowAllActors('allActors')} className="btn btn-outline-info p-3 m-3">
                    Show all Actors
                </button>

                <button onClick={() => handleShowAllActors('editActors')} className="btn btn-outline-info p-3 m-3">
                    Edit Actors
                </button>
                <button onClick={() => handleShowSearch()} className="btn btn-outline-info p-3 m-3">
                    Search Actors
                </button>

                <button onClick={resetActors} className="btn btn-outline-danger p-3 m-3"
                        style={{position: "relative", float: "right", marginRight: "20px"}}>
                    Reset actors
                </button>
            </div>

            <Search showState={showActorState.searchActors} search={search}/>

            <AllActors actors={actors} deleteActor={deleteActor} editActor={editActor} showActorState={showActorState} />
        </div>
    );
}

export default Actors;
