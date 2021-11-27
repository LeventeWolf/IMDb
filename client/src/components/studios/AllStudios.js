import React from 'react'
import Studio from './Studio'
import Edit from './Edit'
import v4 from "uuid/v4";
import NewStudio from "../studios/NewStudio";

export default function AllStudios({studios, showState, deleteStudio, editStudio, addNewStudioState, addNewStudio}) {
    return (
        <div id="table-wrapper">
            <div id="table-scroll" className={'style-8'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Produced Movie</th>

                        {showState.editStudios ? <th>Edit</th> : null}
                        {showState.editStudios ? <th>Del</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        addNewStudioState ? <NewStudio key={0} addNewStudio={addNewStudio}/> : null
                    }
                    
                    {
                        showState.editStudios ?
                            studios.map(studio => {
                                return <Edit key={v4()} studio={studio}
                                             deleteStudio={() => deleteStudio(studio.id)}
                                             editStudio={editStudio}
                                />
                            })
                            :
                            studios.map(studio => {
                                return <Studio key={v4()} studio={studio}/>
                            })
                    }
                    </tbody>
                </table>
            </div>
        </div>


    );
};
