import React from 'react'
import Director from './Director'
import Edit from './Edit'

export default function AllDirectors({directors, showState, deleteDirector, editDirector}) {
    return (
        <div id="table-wrapper">
            <div id="table-scroll" className={'style-8'}>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>

                        {showState.editDirectors ? <th>Edit</th> : null}
                        {showState.editDirectors ? <th>Del</th> : null}
                    </tr>
                    </thead>
                    <tbody>
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
