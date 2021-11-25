const db = require('../config/db');
const fs = require('fs').promises;


class DAO {
    // Movie
    async getAllMovie() {
        const rows = await db.pool.query(`
            SELECT movie.id,
                   title,
                   genres,
                   imdb_score,
                   person.name as director,
                   studio.name as studio,
                   year        as release_date
            FROM movie
                     INNER JOIN studio
                                ON movie.studio_id = studio.id
                     INNER JOIN director ON
                movie.director_id = director.id
                     INNER JOIN person
                                ON director.id = person.id
            ORDER BY imdb_score DESC
        `);

        return rows.splice(0);
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

    async updateMovieByID(movie_id, title, genres, score, release_date) {
        const sql = `
            UPDATE movie

            SET title      = "${title}",
                genres     = "${genres}",
                imdb_score = "${score}",
                year       = "${release_date}"
            WHERE movie.id = ${movie_id};`;

        await db.pool.query(sql);

        console.log("DB => updated: " + title)
    }

    async deleteMovieByID(id) {
        await db.pool.query(`
            DELETE
            FROM movie
            WHERE movie.id = ${id}`
        ).catch();

        console.log("DB (movie) => delete id: " + id)
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
                SELECT movie.id,
                       title,
                       genres,
                       year        as release_date,
                       imdb_score,
                       person.name as director,
                       studio.name as studio
                FROM movie
                         INNER JOIN person on movie.director_id = person.id
                         INNER JOIN studio on movie.studio_id = studio.id
                WHERE title LIKE '%${title}%'`;
        } else if (title === '' && rating != -1) {
            console.log(' Only Rating');
            sql = `
                SELECT movie.id,
                       title,
                       genres,
                       year        as release_date,
                       imdb_score,
                       person.name as director,
                       studio.name as studio
                FROM movie
                         INNER JOIN person on movie.director_id = person.id
                         INNER JOIN studio on movie.studio_id = studio.id
                WHERE imdb_score ${filter_method} ${rating}`;
        } else {
            console.log(' Title & Rating');
            sql = `
                SELECT movie.id,
                       title,
                       genres,
                       year        as release_date,
                       imdb_score,
                       person.name as director,
                       studio.name as studio
                FROM movie
                         INNER JOIN person on movie.director_id = person.id
                         INNER JOIN studio on movie.studio_id = studio.id
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

    async resetMovies() {
        let dataSql = await fs.readFile("./database/top20.sql", "binary");
        dataSql = dataSql.split(';\n');

        await db.pool.query('DELETE FROM movie WHERE 1')

        for (const sql of dataSql) {
            await db.pool.query(sql).catch();
        }
    }

    // Actor
    async getAllActors() {
        const rows = await db.pool.query(`
            SELECT person.id, person.name, actor.age, movie.title as movieTitle
            FROM person
                     INNER JOIN actor ON person.id = actor.id
                     INNER JOIN cast ON actor.id = cast.actor_id
                     INNER JOIN movie on cast.movie_id = movie.id
            GROUP BY person.name
            ORDER BY person.name
            ;
        `);

        return rows.splice(0);
    }

    async updateActorByID(actor_id, actor_age, name) {
        console.log(actor_id, actor_age, name)

        const sql = `
            UPDATE person
            SET name = '${name}'
            WHERE id = ${actor_id}`;

        const sql2 = `
            UPDATE actor
            SET age = '${actor_age}'
            WHERE id = ${actor_id}`;

        await db.pool.query(sql2);
        await db.pool.query(sql);

        console.log("DB (actor) => updated: " + name)
    }

    async deleteActorByID(actor_id) {
        await db.pool.query(`
            DELETE
            FROM cast
            WHERE actor_id = ${actor_id}`
        ).catch();

        await db.pool.query(`
            DELETE
            FROM person
            WHERE id = ${actor_id}`
        ).catch();

        console.log("DB (actor) => delete id: " + actor_id)

    }

    async searchActorByTitleOrActor(title_value, actor_value) {
        console.log("Search Actor:")
        console.log("Title: " + title_value, " | Actor: " + actor_value)

        let sql;

        if (title_value !== undefined && (actor_value === '' || actor_value === undefined)) {
            console.log(' Only Title');
            sql = `
                SELECT person.id, person.name, actor.age, movie.title as movieTitle
                FROM person
                         INNER JOIN actor ON actor.id = person.id
                         INNER JOIN cast ON cast.actor_id = actor.id
                         INNER JOIN movie ON cast.movie_id = movie.id
                WHERE movie.title LIKE '%${title_value}%'`;
        } else if (title_value === '' && (actor_value !== undefined || actor_value !== '')) {
            console.log(' Only Actor');
            sql = `
                SELECT person.id, person.name, actor.age, movie.title as movieTitle
                FROM person
                         INNER JOIN actor ON actor.id = person.id
                         INNER JOIN cast ON cast.actor_id = actor.id
                         INNER JOIN movie ON cast.movie_id = movie.id
                WHERE person.name LIKE '%${actor_value}%'
            `;
        } else {
            console.log(' Title & Actor');
            sql = `
                SELECT person.id, person.name, actor.age, movie.title as movieTitle
                FROM person
                         INNER JOIN actor ON actor.id = person.id
                         INNER JOIN cast ON cast.actor_id = actor.id
                         INNER JOIN movie ON cast.movie_id = movie.id
                WHERE movie.title LIKE '%${title_value}%'
                  AND person.name LIKE '%${actor_value}%'`;
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

    async resetActors() {

    }

    // Director
    async getAllDirectors() {
        const rows = await db.pool.query(`
            SELECT person.id, person.name, movie.title, director.oscars as oscars, movie.title as movieTitle
            FROM person
                     INNER JOIN director on person.id = director.id
                     INNER JOIN movie on director.id = movie.director_id
            GROUP BY person.name
            ORDER BY person.name;
        `);

        return rows.splice(0);
    }

    async deleteDirector(id) {
        const rows = await db.pool.query(`
            DELETE FROM director
            where id = ${id};
        `);

        return rows.splice(0);
    }

    async updateDirectorByID(directorID, directorName, oscars) {
        const sql = `
            UPDATE person
            SET name = '${directorName}'
            WHERE id = ${directorID}`;

        const sql2 = `
            UPDATE director
            SET oscars = '${oscars}'
            WHERE id = ${directorID}`;

        await db.pool.query(sql2);
        await db.pool.query(sql);

        console.log("DB (director) => updated: " + directorName)
    }

    // Studio

    async getAllStudios() {
        const rows = await db.pool.query(`
            SELECT studio.id, location, name, movie.title as movieTitle
            FROM studio
                     INNER JOIN movie ON studio.id = studio_id
            ORDER BY name
            ;
        `);

        return rows.splice(0);
    }

    async updateStudioByID(studioID, studioName, location) {
        const sql = `
            UPDATE studio
            SET studio.name     = '${studioName}',
                studio.location = '${location}'
            WHERE id = ${studioID}`;

        await db.pool.query(sql);

        console.log("DB (studio) => updated: " + studioName)
    }


    // Nested Queries

    async highestRatedMovies() {
        const sql = `
            SELECT movie.id,
                   title,
                   genres,
                   imdb_score,
                   person.name as director,
                   studio.name as studio,
                   year        as release_date
            FROM movie
                     INNER JOIN studio ON movie.studio_id = studio.id
                     INNER JOIN director ON movie.director_id = director.id
                     INNER JOIN person ON director.id = person.id
            WHERE imdb_score IN (
                SELECT max(imdb_score)
                FROM movie
            )
            ORDER BY title;
        `;

        let result = await db.pool.query(sql);

        return result ?? {};
    }

    async numberOfActorsPerMovie() {
        const sql = `
            SELECT title,
                   imdb_score,
                   genres,
                   COUNT(cast.actor_id) as "Number_of_Actors",
                   year            as release_date,
                   studio.name as studio
            FROM movie
                INNER JOIN cast ON movie.id = cast.movie_id
                INNER JOIN studio ON movie.studio_id = studio.id
            GROUP BY movie_id;
        `;

        let result = await db.pool.query(sql);

        return result ?? {};
    }

    // Diagrams

    async getGenreChartData() {
        // language=MySQL
        const sql = `
            SELECT genres
            FROM movie
            GROUP BY genres;
        `;

        const result = [['Genres Distribution', '%']];

        const genres = new Set();
        const allGenres = []

        for (const element of await db.pool.query(sql)) {
            for (let genre of element.genres.split(', ')) {
                genres.add(genre)
                allGenres.push(genre)
            }
        }

        for (const genre of genres) {
            result.push([genre, count(genre, allGenres)])
        }

        function count(genre, list) {
            let result = 0;
            for (let i = 0; i < list.length; i++) {
                if (list[i] === genre)
                    result++;
            }
            return result
        }

        return result ?? {};
    }

    async getBarChartData() {
        // language=MySQL
        const sql = `
            SELECT imdb_score, COUNT(imdb_score) as count
            FROM movie
            GROUP BY imdb_score
            ORDER BY imdb_score DESC;
        `;

        const fillColor = '#19723C';
        const result = [['Search', 'Movies']]
        for (const element of await db.pool.query(sql)) {
            result.push([element.imdb_score, element.count])
        }
        // const result = [['Search', 'Movies', '{role: \'style\'}']]
        // for (const element of await db.pool.query(sql)) {
        //     result.push([parseFloat(element.imdb_score), element.count, `fill-color: ${fillColor}`])
        // }


        return result ?? {};
    }


}

module.exports = DAO