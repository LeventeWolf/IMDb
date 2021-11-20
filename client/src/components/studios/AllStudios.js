import React from 'react'
import Studio from './Studio'
import Edit from './Edit'

export default function AllStudios({studios, showState, deleteStudio, editStudio}) {
    return (
        <div id="table-wrapper">
            <div id="table-scroll" className={'style-8'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>

                        {showState.editStudios ? <th>Edit</th> : null}
                        {showState.editStudios ? <th>Del</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        showState.editStudios ?
                            studios.map(actor => {
                                return <Edit key={actor.id} actor={actor}
                                             deleteStudio={() => deleteStudio(actor.id)}
                                             editStudio={editStudio}
                                />
                            })
                            :
                            studios.map(actor => {
                                return <Studio key={actor.id} actor={actor}/>
                            })
                    }
                    </tbody>
                </table>
            </div>
        </div>


    );
};
