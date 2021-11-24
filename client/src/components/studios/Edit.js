import React, {useState} from 'react'
import editLogo from '../../media/edit.png';
import deleteLogo from '../../media/delete.png';
import tickLogo from '../../media/tick.png';

export default function Edit({studio, deleteStudio, editStudio}) {
    const [inputMode, setInputMode] = useState(false);

    function changeInputMode() {
        setInputMode(prevState => !prevState);
    }

    function input_values(id) {
        const studioName = document.getElementsByName(id + '-name').item(0).value;

        console.log(id, studioName);
        return {id, studioName}
    }

    if (inputMode){
        return (
            <tr>
                <td><input type={'text'} defaultValue={studio.name}        name={studio.id + '-name'}   />  </td>
                <td> {studio.movieTitle} </td>
                <td onClick={function(){changeInputMode(); editStudio(studio.id, input_values(studio.id))}}>
                    <img src={tickLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteStudio}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{studio.name} </td>
                <td>{studio.movieTitle}</td>
                <td onClick={changeInputMode}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteStudio}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    }

}
