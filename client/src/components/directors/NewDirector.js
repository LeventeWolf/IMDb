import React from 'react'
import tickLogo from "../../media/tick.png";
import deleteLogo from "../../media/delete.png";

export default function NewDirector({addNewDirector}) {
    function newDirectorValues(){
        const name = document.getElementsByName(0 + '-name').item(0).value;
        const oscars = document.getElementsByName(0 + '-oscars').item(0).value;
        const title = document.getElementsByName(0 + '-title').item(0).value;

        return {name, oscars, title}
    }

    return (
        <tr>
            <td><input type={'text'}  name={0 + '-name'}   />  </td>
            <td><input type={'text'}  name={0 + '-oscars'}/></td>
            <td><input type={'text'}  name={0 + '-title'}   />  </td>
            <td onClick={() => {addNewDirector(newDirectorValues())}}>
                <img src={tickLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
            <td><img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
        </tr>
    );
};
