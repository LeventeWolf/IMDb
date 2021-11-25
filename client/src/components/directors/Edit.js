import React, {useState} from 'react'
import editLogo from '../../media/edit.png';
import deleteLogo from '../../media/delete.png';
import tickLogo from '../../media/tick.png';


export default function Edit({director, deleteDirector, editDirector}) {
    const [inputMode, setInputMode] = useState(false);

    function changeInputMode() {
        setInputMode(prevState => !prevState);
    }

    function input_values(id) {
        const directorName = document.getElementsByName(id + '-name').item(0).value;
        const oscars = document.getElementsByName(id + '-oscars').item(0).value;

        return {id, directorName, oscars}
    }

    if (inputMode){
        return (
            <tr>
                <td><input type={'text'} defaultValue={director.name}        name={director.id + '-name'}   />  </td>
                <td><input type={'text'} defaultValue={director.oscars}        name={director.id + '-oscars'}   />  </td>
                <td> {director.movieTitle} </td>
                <td onClick={function(){changeInputMode(); editDirector(director.id, input_values(director.id))}}>
                    <img src={tickLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteDirector}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{director.name} </td>
                <td>{director.oscars} </td>
                <td>{director.movieTitle}</td>
                <td onClick={changeInputMode}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteDirector}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    }

}
