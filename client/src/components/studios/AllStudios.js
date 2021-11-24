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
                            studios.map(studio => {
                                return <Edit key={studio.id} studio={studio}
                                             deleteStudio={() => deleteStudio(studio.id)}
                                             editStudio={editStudio}
                                />
                            })
                            :
                            studios.map(studio => {
                                return <Studio key={studio.id} studio={studio}/>
                            })
                    }
                    </tbody>
                </table>
            </div>
        </div>


    );
};
