import React from 'react'
import Director from './Director'
import Edit from './Edit'
import NewDirector from "../directors/NewDirector";

export default function AllDirectors({directors, showState, deleteDirector, editDirector, addNewDirectorSate, addNewDirector}) {
    return (
        <div id="table-wrapper">
            <div id="table-scroll" className={'style-8'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Oscars</th>
                        <th>Title</th>

                        {showState.editDirectors ? <th>Edit</th> : null}
                        {showState.editDirectors ? <th>Del</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        addNewDirectorSate ? <NewDirector key={0} addNewDirector={addNewDirector}/> : null
                    }
                    {
                        showState.editDirectors ?
                            directors.map(director => {
                                return <Edit key={director.id} director={director}
                                             deleteDirector={() => deleteDirector(director.id)}
                                             editDirector={editDirector}
                                />
                            })
                            :
                            directors.map(director => {
                                return <Director key={director.id} director={director}/>
                            })
                    }
                    </tbody>
                </table>
            </div>
        </div>


    );
};
