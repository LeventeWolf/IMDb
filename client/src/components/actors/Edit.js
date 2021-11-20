import React, {useState} from 'react'
import editLogo from '../../media/edit.png';
import deleteLogo from '../../media/delete.png';

export default function Edit({actor, deleteActor, editActor}) {
    const [inputMode, setInputMode] = useState(false);

    function changeInputMode() {
        setInputMode(prevState => !prevState);
    }

    function input_values(id) {
        const actorName = document.getElementsByName(id + '-name').item(0).value;

        console.log(id, actorName);
        return {id, actorName}
    }

    if (inputMode){
        return (
            <tr>
                <td><input type={'text'} defaultValue={actor.name}        name={actor.id + '-name'}   />  </td>
                <td> {actor.movieTitle} </td>
                <td onClick={function(){changeInputMode(); editActor(actor.id, input_values(actor.id))}}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteActor}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{actor.name} </td>
                <td>{actor.movieTitle}</td>
                <td onClick={changeInputMode}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteActor}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    }

}
