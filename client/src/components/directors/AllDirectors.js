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
                            directors.map(actor => {
                                return <Edit key={actor.id} actor={actor}
                                             deleteDirector={() => deleteDirector(actor.id)}
                                             editDirector={editDirector}
                                />
                            })
                            :
                            directors.map(actor => {
                                return <Director key={actor.id} actor={actor}/>
                            })
                    }
                    </tbody>
                </table>
            </div>
        </div>


    );
};
