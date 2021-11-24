import React from 'react'
import Actor from './Actor'
import Edit from './Edit'
import v4 from "uuid/v4";
const { uuid } = require('uuidv4');


export default function AllActors({actors, showActorState, deleteActor, editActor}) {
    return (
        <div id="table-wrapper">
            <div id="table-scroll" className={'style-8'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Movie</th>

                        {showActorState.editActors ? <th>Edit</th> : null}
                        {showActorState.editActors ? <th>Del</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        showActorState.editActors ?
                            actors.map(actor => {
                                return <Edit key={v4()} actor={actor}
                                             deleteActor={() => deleteActor(actor.id)}
                                             editActor={editActor}
                                />
                            })
                            :
                            actors.map(actor => {
                                return <Actor key={v4()} actor={actor}/>
                            })
                    }
                    </tbody>
                </table>
            </div>
        </div>


    );
};
