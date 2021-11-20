CREATE TABLE IF NOT EXISTS movie
(
    id           serial PRIMARY KEY,
    title        VARCHAR(255) UNIQUE NOT NULL,
    release_date INT                 NOT NULL,
    director     VARCHAR(55)         NOT NULL,
    genres       VARCHAR(55)         NOT NULL,
    the_movie_is VARCHAR(55)         NOT NULL,
    length       INT                 NOT NULL,
    write_down   VARCHAR(3000)       NOT NULL,
    src          VARCHAR(1000),
    imdb_score   NUMERIC(2, 1),
    seen         INT,
    trailer_url  VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS actor
(
    id       INT            NOT NULL AUTO_INCREMENT,
    name     VARCHAR(10000) NOT NULL,
    movie_id INT            NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS imdb.director
(
    id       INT           NOT NULL AUTO_INCREMENT,
    name     VARCHAR(500)  NOT NULL,
    nationality VARCHAR(2000) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS imdb.studio
(
    id       INT          NOT NULL AUTO_INCREMENT,
    name     VARCHAR(500) NOT NULL,
    location VARCHAR(500) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB;