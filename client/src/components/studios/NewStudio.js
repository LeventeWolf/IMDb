import React from 'react'
import tickLogo from "../../media/tick.png";
import deleteLogo from "../../media/delete.png";

export default function NewStudio({addNewStudio}) {
    function newStudioValues(){
        const name = document.getElementsByName(0 + '-name').item(0).value;
        const age = document.getElementsByName(0 + '-location').item(0).value;
        const title = document.getElementsByName(0 + '-title').item(0).value;

        return {name, age, title}
    }

    return (
        <tr>
            <td><input type={'text'}  name={0 + '-name'}   />  </td>
            <td><input type={'text'}  name={0 + '-location'}/></td>
            <td><input type={'text'}  name={0 + '-title'}   />  </td>
            <td onClick={() => {addNewStudio(newStudioValues())}}>
                <img src={tickLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
            <td><img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
        </tr>
    );
};
