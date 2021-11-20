import React, {useState} from 'react'
import editLogo from '../../media/edit.png';
import deleteLogo from '../../media/delete.png';

export default function Edit({movie, deleteMovie, editMovie}) {
    const [inputMode, setInputMode] = useState(false);

    function changeInputMode() {
        setInputMode(prevState => !prevState);
    }

    function input_values(id) {
        const title = document.getElementsByName(id + '-title').item(0).value;
        const genres = document.getElementsByName(id + '-genres').item(0).value;
        const imdb_score = document.getElementsByName(id + '-imdb_score').item(0).value;
        const director = document.getElementsByName(id + '-director').item(0).value;
        const studio = document.getElementsByName(id + '-studio').item(0).value;
        const release_date = document.getElementsByName(id + '-release_date').item(0).value;

        console.log(id, title, imdb_score);
        return {title, genres, imdb_score, director, studio, release_date}
    }

    if (inputMode){
        return (
            <tr>
                <td><input type={'text'} defaultValue={movie.title}        name={movie.id + '-title'}   />  </td>
                <td><input type={'text'} defaultValue={movie.genres}       name={movie.id + '-genres'}   />  </td>
                <td><input type={'text'} defaultValue={movie.imdb_score}   name={movie.id + '-imdb_score'}/></td>
                <td><input type={'text'} defaultValue={movie.director}     name={movie.id + '-director'} /></td>
                <td><input type={'text'} defaultValue={movie.studio}       name={movie.id + '-studio'}/></td>
                <td><input type={'text'} defaultValue={movie.release_date} name={movie.id + '-release_date'}/></td>
                <td onClick={function(){changeInputMode(); editMovie(movie.id, input_values(movie.id))}}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteMovie}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>{movie.title} </td>
                <td>{movie.genres}</td>
                <td>{movie.imdb_score}</td>
                <td>{movie.director}</td>
                <td>{movie.studio}</td>
                <td>{movie.release_date}</td>
                <td onClick={changeInputMode}>
                    <img src={editLogo} style={{width: "20px", marginLeft: "6px"}} alt={"edit"}/></td>
                <td onClick={deleteMovie}>
                    <img src={deleteLogo} style={{width: "20px", textAlign: "center"}} alt={"del"}/></td>
            </tr>
        )
    }

}
