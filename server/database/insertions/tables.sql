CREATE TABLE IF NOT EXISTS movie
(
    id           INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    title        VARCHAR(255) UNIQUE NOT NULL,
    year         INT                 NOT NULL,
    genres       VARCHAR(200)        NOT NULL,
    length       INT                 NOT NULL,
    imdb_score   FLOAT,
    seen         INT,
    director_id  INT,
    studio_id    INT,
    FOREIGN KEY (director_id) REFERENCES person (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (studio_id) REFERENCES studio (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS person (
    id       INT            NOT NULL AUTO_INCREMENT,
    name     VARCHAR(1000)  NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS imdb.actor
(
    id       INT            NOT NULL AUTO_INCREMENT,
    age      INT            NOT NULL,
    FOREIGN KEY (id) REFERENCES person (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS imdb.director
(
    id     INT NOT NULL AUTO_INCREMENT,
    oscars INT NOT NULL,
    FOREIGN KEY (id) REFERENCES person (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id) REFERENCES movie (director_id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS imdb.studio
(
    id       INT          NOT NULL AUTO_INCREMENT,
    name     VARCHAR(500) NOT NULL,
    location VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS imdb.cast
(
    movie_id INT NOT NULL,
    actor_id INT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (actor_id) REFERENCES person (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB;

ALTER TABLE `cast`
    ADD CONSTRAINT `actor_check` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `cast`
    ADD CONSTRAINT `movie_check` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE ;
