import random
import re

from pandas_ods_reader import read_ods

adatok = read_ods("adatok.ods", 'movie', headers=True)

actors = {}

person_id = 1

def generate_actors():
    global out, insert, row, actors, actor
    with open('actors_insert.sql', 'w') as out:
        insert_to_actor = "INSERT INTO actor (id,  age) VALUES ({}, {});"
        insert_to_person = "INSERT INTO person (id,  name) VALUES ({}, '{}');"
        for row in adatok['Actors']:
            actors = row.split(", ")

            for actor in actors:
                global person_id
                print(insert_to_person.format(person_id, re.sub(r'[^\w]', ' ', actor)), file=out)
                print(insert_to_actor.format(person_id, random.randint(20, 60)), file=out)
                person_id += 1

def generate_cast():
    global out, insert, row, actors, actor
    with open('cast_insert.sql', 'w') as out:
        insert = "INSERT INTO cast (movie_id, actor_id) VALUES ({}, {});"

        movie_id = 1
        actor_id = 1
        for row in adatok['Actors']:
            actors = row.split(", ")

            for actor in actors:
                print(insert.format(movie_id, actor_id), file=out)

                actor_id += 1
                pass
            movie_id += 1

directors = {}

def generate_directors():
     # get director names
     director_names = set()
     for index, row in adatok.iterrows():
           director_names.add(row['Director'])

     # generate directors (id, name)

     for director in director_names:
        global person_id
        person_id += 1
        directors[director] = person_id

     insert_into_director = "INSERT INTO director (id, oscars) VALUES({}, {}) ;"
     insert_into_person   = "INSERT INTO person (id, name) VALUES({}, '{}') ;"

     with open('directors_insert.sql', 'w') as out:
         for name, id in directors.items():
             print(insert_into_person.format(id, name), file=out)
             print(insert_into_director.format(id,  random.randint(0, 4)), file=out)

studios = {}


def generate_studios():
    # get studio names
    studio_names = set()
    for index, row in adatok.iterrows():
        studio_names.add(row['Studio'])

    # generate studios (id, name)
    id = 1
    for studio in studio_names:
        studios[studio] = [id]
        id += 1


    for index, row in adatok.iterrows():
        studios[row['Studio']].append(row['Location'].split(', ')[-1])

    insert = "INSERT INTO studio (id, name, location) VALUES({}, '{}', '{}') ;"

    with open('studios_insert.sql', 'w') as out:
        for name, data in studios.items():
            print(insert.format(data[0], name, data[1]), file=out)


def generate_movies():
    insert = "INSERT INTO movie (id, title, year, genres, imdb_score, length, seen, director_id, studio_id ) " \
             "VALUES            ({},  '{}',    {},   '{}',     {},      {},    {},       {},         {});"

    with open('movie_insert.sql', 'w') as out:
        for index, row in adatok.iterrows():
            print(insert.format(
                    int(row['id']), re.sub(r'[^\w]', ' ', row['Title']), int(row['Year']), row['Genres'],
                    row['imdb_score'], int(row['Length']), int(row['seen']), directors[row['Director']], studios[row['Studio']][0]
            ), file=out)


if __name__ == '__main__':
    generate_actors()
    generate_cast()
    generate_studios()
    generate_directors()
    generate_movies()


