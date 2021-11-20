const db = require('../config/db');
const fs = require('fs').promises;

class DAO {
    async getAllMovie() {
        const rows = await db.pool.query(`
            SELECT *
            FROM movie
            ORDER BY imdb_score DESC
        `);

        return rows.splice(0);
    }

    async getAllActors() {
        const rows = await db.pool.query(`
            SELECT actor.id, actor.name, movie.title as movieTitle
            FROM actor 
            INNER JOIN movie 
            ON actor.movie_id = movie.id 
        `);

        return rows.splice(0);
    }

    async deleteMovieByID(id) {

        await db.pool.query(`
            DELETE FROM movie 
            WHERE movie.id = ${id}`
        ).catch();

        console.log("DB (movie) => delete id: " + id)
    }

    async deleteActorByID(actor_id) {
        await db.pool.query(`
            DELETE FROM actor 
            WHERE actor.id = ${actor_id}`
        ).catch();

        console.log("DB (actor) => delete id: " + actor_id)

    }

    async resetMovies() {
        let dataSql = await fs.readFile("./database/top20.sql", "binary");
        dataSql = dataSql.split(';\n');

        await db.pool.query('DELETE FROM movie WHERE 1')

        for (const sql of dataSql) {
            await db.pool.query(sql).catch();
        }
    }

    async updateMovieByID(movie_id, title, genres, score, director, release_date) {
        const sql = `
            UPDATE movie
            SET title        = "${title}",
                genres       = "${genres}",
                imdb_score   = "${score}",
                director     = "${director}",
                release_date = "${release_date}"
            WHERE movie.id = ${movie_id};`;

        await db.pool.query(sql);

        console.log("DB => updated: " + title)
    }

    async searchMovieByTitle(title) {
        const sql = `
            SELECT *
            FROM movie
            WHERE title LIKE '%${title}%'`;

        let result = await db.pool.query(sql);

        if (result === undefined) {
            return {};
        } else {
            return result;
        }
    }

    async searchMovieByRating(rating, filter_method) {
        const sql = `
            SELECT *
            FROM movie
            WHERE imdb_score ${filter_method} ${rating}`;

        let result = await db.pool.query(sql);

        if (result === undefined) {
            return {};
        } else {
            return result;
        }
    }

    async searchMovieByTitleAndRating(title, rating, filter_method) {
        console.log("Search:")
        console.log("Title: " + title, " | Rating: " + filter_method + " " + rating)

        let sql;

        if (title !== undefined && (rating == -1 || rating === undefined || rating === '')) {
            console.log(' Only Title');
            sql = `
                SELECT *
                FROM movie
                WHERE title LIKE '%${title}%'`;
        } else if (title === '' && rating != -1) {
            console.log(' Only Rating');
            sql = `
                SELECT *
                FROM movie
                WHERE imdb_score ${filter_method} ${rating}`;
        } else {
            console.log(' Title & Rating');
            sql = `
                SELECT *
                FROM movie
                WHERE title LIKE '%${title}%'
                  AND imdb_score ${filter_method} ${rating}`;
        }

        let result;
        try {
            result = await db.pool.query(sql);
        } catch (e) {
            console.log(e.message)
            result = [{}]
        }

        if (result === undefined) {
            return {};
        } else {
            return result;
        }
    }

    async updateActorByID(actor_id, name, title) {
        const sql = `
            UPDATE actor
            SET name = '${name}'
            WHERE id = ${actor_id}`;

        await db.pool.query(sql);

        console.log("DB (actor) => updated: " + name)
    }


    async addNewMovie(title, genres, score, director, year) {
        const sql = `
        INSERT INTO movie (title, release_date,    director,    genres,   the_movie_is, length, write_down, src, imdb_score, seen, trailer_url)
        VALUES           ('${title}', '${year}', '${director}', '${genres}',   'a',     0,  'write_down', 'src', ${score}, 0, 'trailer')`;

        try {
            await db.pool.query(sql);
            console.log('DB (movie) => INSERT INTO: ' + title + " " + genres)
        } catch (e) {
            console.log('DB (movie) => INSERT INTO FAILED')
            throw e;
        }
    }

    async resetActors() {
        
    }

    async searchActorByTitleOrActor(title_value, actor_value) {
        console.log("Search Actor:")
        console.log("Title: " + title_value, " | Actor: " + actor_value)

        let sql;

        if (title_value !== undefined && (actor_value === '' || actor_value === undefined)) {
            console.log(' Only Title');
            sql = `
                SELECT actor.id, actor.name, movie.title as movieTitle
                FROM actor 
                INNER JOIN movie 
                ON actor.movie_id = movie.id 
                WHERE movie.title LIKE '%${title_value}%'`;
        } else if (title_value === '' && (actor_value !== undefined || actor_value !== '')){
            console.log(' Only Actor');
            sql = `
                SELECT actor.id, actor.name, movie.title as movieTitle
                FROM actor 
                INNER JOIN movie 
                ON actor.movie_id = movie.id 
                WHERE actor.name LIKE '%${actor_value}%'`;
        } else {
            console.log(' Title & Actor');
            sql = `
                SELECT actor.id, actor.name, movie.title as movieTitle
                FROM actor 
                INNER JOIN movie 
                ON actor.movie_id = movie.id 
                WHERE movie.title LIKE '%${title_value}%'
                  AND actor.name LIKE '%${actor_value}%'`;
        }

        let result;
        try {
            result = await db.pool.query(sql);
        } catch (e) {
            console.log(e.message)
            result = [{}]
        }

        if (result === undefined) {
            return {};
        } else {
            return result;
        }
    }
}

module.exports = DAO