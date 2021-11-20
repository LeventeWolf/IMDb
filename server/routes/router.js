const router = require("express").Router();
const mainDAO = require("../dao/main_dao");
const DAO = new mainDAO()



router.post("/api/movies", async (req, res) => {
    const allMovies = await DAO.getAllMovie();

    return res.status(200).send(allMovies);
});

router.post("/api/movies/delete", async (req, res) => {
    const movieID = req.body.movieID;

    await DAO.deleteMovieByID(movieID);

    console.log("DB => Delete successful (ID: " + movieID + ")")

    return res.status(200).end();
});

router.post("/api/movies/update", async (req, res) => {
    const movieID = req.body.id;
    const title = req.body.values.title;
    const genres = req.body.values.genres;
    const imdb_score = parseFloat(req.body.values.imdb_score);
    const director = req.body.values.director;
    const release_date = parseInt(req.body.values.release_date);

    try {
        await DAO.updateMovieByID(movieID, title, genres, imdb_score, director, release_date);
    } catch (e) {
        console.log(e.message);
    }


    console.log("DB => Update successful (ID: " + movieID + ")")

    const allMovies = await DAO.getAllMovie();
    return res.status(200).send(allMovies);
});

router.post("/api/movies/reset", async (req, res) => {
    await DAO.resetMovies();

    const allMovies = await DAO.getAllMovie();

    return res.status(200).send(allMovies);
});

router.post("/api/movies/search", async (req, res) => {
    const title_value = req.body.title_value;
    const rating_value = req.body.rating_value;
    const filter_method = req.body.filter_method;
    const foundMovies = await DAO.searchMovieByTitleAndRating(title_value, rating_value, filter_method);

    return res.status(200).send(foundMovies);
});



module.exports = router;
