import React, {useState} from 'react'
import editLogo from '../../media/edit.png';
import deleteLogo from '../../media/delete.png';
import tickLogo from '../../media/tick.png';

export default function Edit({movie, deleteMovie, editMovie}) {
    const [inputMode, setInputMode] = useState(false);

    function changeInputMode() {
        setInputMode(prevState => !prevState);
    }

    function input_values() {
        const title = document.getElementsByName(movie.id + '-title').item(0).value;
        const genres = document.getElementsByName(movie.id + '-genres').item(0).value;
        const imdb_score = document.getElementsByName(movie.id + '-imdb_score').item(0).value;
        const release_date = document.getElementsByName(movie.id + '-release_date').item(0).value;
        const length = document.getElementsByName(movie.id + '-length').item(0).value;
        const seen = document.getElementsByName(movie.id + '-seen').item(0).value;

        return {title, genres, imdb_score, release_date, length, seen}
    }

    if (inputMode){
        return (
            <tr>
                <td><input type={'text'} defaultValue={movie.title}        name={movie.id + '-title'}   />  </td>
                <td><input type={'text'} defaultValue={movie.release_date} name={movie.id + '-release_date'}/></td>
                <td><input type={'text'} defaultValue={movie.genres}       name={movie.id + '-genres'}   />  </td>
                <td><input type={'text'} defaultValue={movie.imdb_score}   name={movie.id + '-imdb_score'}/></td>
                <td><input type={'text'} defaultValue={movie.length}   name={movie.id + '-length'}/></td>
                <td><input type={'text'} defaultValue={movie.seen}   name={movie.id + '-seen'}/></td>
                <td onClick={function(){changeInputMode(); editMovie(movie.id, input_values())}}>
                    <img src={tickLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteMovie}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{movie.title} </td>
                <td>{movie.release_date}</td>
                <td>{movie.genres}</td>
                <td>{movie.imdb_score}</td>
                <td>{movie.length}</td>
                <td>{movie.seen}</td>
                <td onClick={changeInputMode}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteMovie}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    }

}
