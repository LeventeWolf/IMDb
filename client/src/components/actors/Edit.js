import React, {useState} from 'react'
import editLogo from '../../media/edit.png';
import deleteLogo from '../../media/delete.png';
import tickLogo from '../../media/tick.png';


export default function Edit({actor, deleteActor, editActor}) {
    const [inputMode, setInputMode] = useState(false);

    function changeInputMode() {
        setInputMode(prevState => !prevState);
    }

    function input_values(id) {
        const actorName = document.getElementsByName(id + '-name').item(0).value;
        const actorAge = document.getElementsByName(id + '-age').item(0).value;

        return {id, actorName, actorAge}
    }

    if (inputMode){
        return (
            <tr>
                <td><input type={'text'} defaultValue={actor.name}        name={actor.id + '-name'}   />  </td>
                <td><input type={'text'} defaultValue={actor.age}        name={actor.id + '-age'}   />  </td>
                <td> {actor.movieTitle} </td>
                <td onClick={function(){changeInputMode(); editActor(actor.id, input_values(actor.id))}}>
                    <img src={tickLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteActor}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{actor.name} </td>
                <td>{actor.age}</td>
                <td>{actor.movieTitle}</td>
                <td onClick={changeInputMode}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteActor}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    }

}
