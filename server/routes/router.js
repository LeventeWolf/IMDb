const router = require("express").Router();
const mainDAO = require("../dao/main_dao");
const DAO = new mainDAO()


// Movies

router.post("/api/movies", async (req, res) => {
    const allMovies = await DAO.getAllMovie();

    return res.status(200).send(allMovies);
});

router.post("/api/movies/delete", async (req, res) => {
    const movieID = req.body.movieID;

    await DAO.deleteMovieByID(movieID);

    console.log("DB => Delete successful movie (ID: " + movieID + ")")

    return res.status(200).end();
});

router.post("/api/movies/update", async (req, res) => {
    const movieID = req.body.id;
    const title = req.body.values.title;
    const genres = req.body.values.genres;
    const imdb_score = parseFloat(req.body.values.imdb_score);
    const director = req.body.values.director;
    const release_date = parseInt(req.body.values.release_date);

    console.log("Movie ID: " + movieID)
    try {
        await DAO.updateMovieByID(movieID, title, genres, imdb_score, release_date);
        console.log("DB => Update successful (ID: " + movieID + ")")
    } catch (e) {
        console.log(e.message);
    }

    const allMovies = await DAO.getAllMovie();
    return res.status(200).send(allMovies);
});

router.post("/api/movies/add", async (req, res) => {
    const title = req.body.values.title;
    const genres = req.body.values.genres;
    const year = req.body.values.release_date;
    const imdb_score = req.body.values.imdb_score;
    const director = req.body.values.director;
    const studio = req.body.values.studio;


    try {
        await DAO.addNewMovie(title, year, genres, imdb_score, studio, director);
        console.log("DB add new movie (title): " + title)
    } catch (e){
        console.log(e.message)
    }

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


// Actors

router.post("/api/actors", async (req, res) => {
    const allMovies = await DAO.getAllActors();

    return res.status(200).send(allMovies);
});

router.post("/api/actors/delete", async (req, res) => {
    const actorID = req.body.actorID;

    await DAO.deleteActorByID(actorID);

    console.log("DB => Delete successful actor (ID: " + actorID + ")")

    return res.status(200).end();
});

router.post("/api/actors/update", async (req, res) => {
    const actorID = req.body.id;
    const actorName = req.body.values.actorName;
    const actorAge = req.body.values.actorAge;

    try {
        await DAO.updateActorByID(actorID, actorAge, actorName);
    } catch (e) {
        console.log(e.message);
    }


    console.log("DB => Update successful actor (ID: " + actorName + ")")

    const allMovies = await DAO.getAllActors();
    return res.status(200).send(allMovies);
});

router.post("/api/actors/search", async (req, res) => {
    const title_value = req.body.title_value;
    const actor_value = req.body.name_value;
    const foundMovies = await DAO.searchActorByTitleOrActor(title_value, actor_value);

    return res.status(200).send(foundMovies);
});

// Directors

router.post("/api/directors", async (req, res) => {
    const allDirectors = await DAO.getAllDirectors();

    return res.status(200).send(allDirectors);
});

router.post("/api/directors/delete", async (req, res) => {
    const directorID = req.body.directorID;

    await DAO.deleteDirectorByID(directorID);

    console.log("DB => Delete successful director with movie (ID: " + directorID + ")")

    return res.status(200).end();
});

router.post("/api/directors/update", async (req, res) => {
    const directorID = req.body.id;
    const directorName = req.body.values.directorName;
    const oscars = req.body.values.oscars;

    try {
        await DAO.updateDirectorByID(directorID, directorName, oscars);
    } catch (e) {
        console.log(e.message);
    }


    const allMovies = await DAO.getAllDirectors();
    return res.status(200).send(allMovies);
});

router.post("/api/directors/search", async (req, res) => {
    const title_value = req.body.title_value;
    const actor_value = req.body.name_value;
    const foundMovies = await DAO.searchDirectorByTitleOrActor(title_value, actor_value);

    return res.status(200).send(foundMovies);
});


// Studios

router.post("/api/studios", async (req, res) => {
    const allMovies = await DAO.getAllStudios();

    return res.status(200).send(allMovies);
});

router.post("/api/studios/update", async (req, res) => {
    const studioID = req.body.id;
    const studioName = req.body.values.studioName;
    const location = req.body.values.location;

    try {
        await DAO.updateStudioByID(studioID, studioName, location);
    } catch (e) {
        console.log(e.message);
    }

    const allStudios = await DAO.getAllStudios();
    return res.status(200).send(allStudios);
});

router.post("/api/studios/delete", async (req, res) => {
    const studioID = req.body.studioID;

    try {
        await DAO.deleteStudioByID(studioID);
        console.log("DB delete Studio with Movie: (studioID: " + studioID + ")")
    } catch (e) {
        console.log(e.message);
    }

    const allStudios = await DAO.getAllStudios();
    return res.status(200).send(allStudios);
});



// Nested Queries

router.post("/api/nested-query/highest-rated-movies", async (req, res) => {
    const result = await DAO.highestRatedMovies();

    return res.status(200).send(result);
});

router.post("/api/nested-query/number-of-actors-per-movie", async (req, res) => {
    const result = await DAO.numberOfActorsPerMovie();

    return res.status(200).send(result);
});

router.post("/api/nested-query/query-3", async (req, res) => {
    const result = await DAO.studios_average_rating();

    return res.status(200).send(result);
});



// Diagram

router.post("/api/chart/genre-chart-data", async (req, res) => {
    const result = await DAO.getGenreChartData();

    return res.status(200).send(result);
});

router.post("/api/chart/bar-chart-data", async (req, res) => {
    const result = await DAO.getBarChartData();

    return res.status(200).send(result);
});




module.exports = router;
