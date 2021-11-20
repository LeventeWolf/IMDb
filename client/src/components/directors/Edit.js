import React, {useState} from 'react'
import editLogo from '../../media/edit.png';
import deleteLogo from '../../media/delete.png';

export default function Edit({director, deleteDirector, editDirector}) {
    const [inputMode, setInputMode] = useState(false);

    function changeInputMode() {
        setInputMode(prevState => !prevState);
    }

    function input_values(id) {
        const directorName = document.getElementsByName(id + '-name').item(0).value;

        console.log(id, directorName);
        return {id, directorName}
    }

    if (inputMode){
        return (
            <tr>
                <td><input type={'text'} defaultValue={director.name}        name={director.id + '-name'}   />  </td>
                <td> {director.movieTitle} </td>
                <td onClick={function(){changeInputMode(); editDirector(director.id, input_values(director.id))}}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteDirector}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{director.name} </td>
                <td>{director.movieTitle}</td>
                <td onClick={changeInputMode}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteDirector}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    }

}
