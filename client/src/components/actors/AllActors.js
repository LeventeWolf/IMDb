import React from 'react'
import Actor from './Actor'
import Edit from './Edit'

export default function AllMovies({actors, showActorState, deleteActor, editActor}) {
    return (
        <div id="table-wrapper">
            <div id="table-scroll" className={'style-8'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>

                        {showActorState.editActors ? <th>Edit</th> : null}
                        {showActorState.editActors ? <th>Del</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        showActorState.editActors ?
                            actors.map(actor => {
                                return <Edit key={actor.id} actor={actor}
                                             deleteActor={() => deleteActor(actor.id)}
                                             editActor={editActor}
                                />
                            })
                            :
                            actors.map(actor => {
                                return <Actor key={actor.id} actor={actor}/>
                            })
                    }
                    </tbody>
                </table>
            </div>
        </div>


    );
};
