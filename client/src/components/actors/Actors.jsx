import React, {useState} from 'react';
import AllActors from './AllActors';
import Search from './Search';
import Axios from 'axios';

function Actors() {
    const [actors, setActors] = useState([])
    const [showActorState, setShowActorState] = useState({allActors: false, editActors: false, searchActors: false});
    const [addNewActorState, setAddNewActorState] = useState(false);


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
        const name_value = document.getElementById('search-actor').value;
        Axios.post('http://localhost:3001/api/actors/search', {title_value, name_value})
            .then(response => {
                setActors(response.data)
            });

    }

    function addNewActorToggle(){
        setAddNewActorState(!addNewActorState)
    }

    function addNewActor(values){
        Axios.post('http://localhost:3001/api/actors/add', {values})
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

                <button onClick={addNewActorToggle} className="btn btn-outline-info p-3 m-3"
                        style={{position: "relative", float: "right", marginRight: "20px"}}>
                    Add New Actors
                </button>
            </div>

            <Search showState={showActorState.searchActors} search={search}/>

            <AllActors actors={actors} deleteActor={deleteActor} editActor={editActor} showActorState={showActorState}
                       addNewActor={addNewActor} addNewActorState={addNewActorState}
            />
        </div>
    );
}

export default Actors;
