import React from 'react'
import tickLogo from "../../media/tick.png";
import deleteLogo from "../../media/delete.png";

export default function NewMovie({addNewMovie}) {
    function newMovieValues(){
        const title = document.getElementsByName(0 + '-title').item(0).value;
        const genres = document.getElementsByName(0 + '-genres').item(0).value;
        const imdb_score = document.getElementsByName(0 + '-imdb_score').item(0).value;
        const release_date = document.getElementsByName(0 + '-release_date').item(0).value;
        const director = document.getElementsByName(0 + '-director').item(0).value;
        const studio = document.getElementsByName(0 + '-studio').item(0).value;

        return {title, genres, imdb_score, release_date, director, studio}
    }

    return (
        <tr>
            <td><input type={'text'}  name={0 + '-title'}   />  </td>
            <td><input type={'text'}  name={0 + '-release_date'}/></td>
            <td><input type={'text'}  name={0 + '-genres'}   />  </td>
            <td><input type={'text'}  name={0 + '-imdb_score'}/></td>
            <td><input type={'text'}  name={0 + '-director'}/></td>
            <td><input type={'text'}  name={0 + '-studio'}/></td>
            <td onClick={() => {addNewMovie(newMovieValues())}}>
                <img src={tickLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
            <td><img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
        </tr>
    );
};
