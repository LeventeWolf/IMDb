-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 27, 2021 at 03:36 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `actor`
--

CREATE TABLE `actor` (
  `id` int(11) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `actor`
--

INSERT INTO `actor` (`id`, `age`) VALUES
(2, 28),
(4, 55),
(5, 53),
(6, 41),
(7, 44),
(8, 30),
(9, 53),
(10, 44),
(11, 22),
(12, 58),
(13, 33),
(16, 28),
(18, 25),
(19, 44),
(20, 53),
(21, 38),
(22, 26),
(23, 37),
(24, 45),
(25, 33),
(26, 55),
(27, 58),
(28, 48),
(29, 49),
(30, 36),
(31, 28),
(32, 40),
(33, 58),
(34, 49),
(35, 23),
(36, 40),
(37, 59),
(39, 58),
(40, 57),
(41, 35),
(42, 50),
(43, 30),
(44, 55),
(45, 47),
(46, 41),
(47, 34),
(48, 39),
(49, 60),
(50, 51),
(51, 49),
(52, 26),
(54, 60),
(55, 46),
(56, 20),
(57, 55),
(58, 20),
(59, 60),
(62, 41),
(63, 49),
(64, 47),
(65, 25),
(66, 60),
(67, 48),
(68, 32),
(69, 57),
(70, 27),
(71, 25),
(72, 33),
(73, 55),
(74, 60),
(75, 37),
(76, 44),
(77, 57),
(78, 44),
(80, 52),
(81, 30),
(82, 26),
(83, 22),
(84, 34),
(85, 58),
(86, 60),
(87, 30),
(88, 33),
(89, 33),
(90, 25),
(92, 32),
(93, 55),
(94, 41),
(96, 47),
(97, 54),
(98, 57),
(99, 55),
(100, 51),
(102, 58),
(103, 35),
(104, 26),
(107, 27),
(108, 59),
(109, 49),
(110, 42),
(112, 29),
(114, 28),
(115, 51),
(116, 53),
(117, 22),
(118, 49),
(119, 24),
(120, 60),
(121, 43),
(122, 33),
(123, 34),
(124, 47),
(126, 30),
(127, 59),
(128, 57),
(130, 29),
(131, 53),
(133, 54),
(135, 31),
(136, 55),
(137, 32),
(138, 29),
(139, 50),
(141, 39),
(142, 20),
(143, 35),
(144, 25),
(146, 38),
(147, 59),
(149, 46),
(151, 50),
(153, 54),
(154, 29),
(157, 59),
(158, 37),
(159, 24),
(160, 32),
(162, 54),
(163, 57),
(164, 35),
(165, 34),
(166, 58),
(167, 56),
(168, 26),
(169, 55),
(170, 26),
(171, 49),
(173, 22),
(174, 34),
(175, 30),
(176, 34),
(177, 39),
(178, 27),
(179, 31),
(180, 31),
(181, 51),
(182, 49),
(183, 54),
(184, 47),
(185, 29),
(186, 49),
(187, 27),
(188, 30),
(189, 31),
(190, 36),
(191, 30),
(192, 60),
(193, 32),
(194, 59),
(195, 37),
(196, 28),
(197, 58),
(198, 56),
(200, 52),
(250, 31);

-- --------------------------------------------------------

--
-- Table structure for table `cast`
--

CREATE TABLE `cast` (
  `movie_id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cast`
--

INSERT INTO `cast` (`movie_id`, `actor_id`) VALUES
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(4, 13),
(4, 16),
(6, 21),
(6, 22),
(6, 23),
(6, 24),
(7, 25),
(7, 26),
(7, 27),
(7, 28),
(8, 29),
(8, 30),
(8, 31),
(8, 32),
(10, 37),
(10, 39),
(10, 40),
(11, 41),
(11, 42),
(11, 43),
(11, 44),
(12, 45),
(12, 46),
(12, 47),
(12, 48),
(13, 49),
(13, 50),
(13, 51),
(13, 52),
(14, 54),
(14, 55),
(14, 56),
(15, 57),
(15, 58),
(15, 59),
(16, 62),
(16, 63),
(16, 64),
(17, 65),
(17, 66),
(17, 67),
(17, 68),
(19, 73),
(19, 74),
(19, 75),
(19, 76),
(20, 77),
(20, 78),
(20, 80),
(21, 81),
(21, 82),
(21, 83),
(21, 84),
(22, 85),
(22, 86),
(22, 87),
(22, 88),
(23, 89),
(23, 90),
(23, 92),
(24, 93),
(24, 94),
(24, 96),
(25, 97),
(25, 98),
(25, 99),
(25, 100),
(26, 102),
(26, 103),
(26, 104),
(27, 107),
(27, 108),
(28, 109),
(28, 110),
(28, 112),
(29, 114),
(29, 115),
(29, 116),
(30, 117),
(30, 118),
(30, 119),
(30, 120),
(32, 126),
(32, 127),
(32, 128),
(33, 130),
(33, 131),
(35, 137),
(35, 138),
(35, 139),
(36, 141),
(36, 142),
(36, 143),
(36, 144),
(37, 146),
(37, 147),
(38, 149),
(38, 151),
(39, 153),
(39, 154),
(41, 162),
(41, 163),
(41, 164),
(42, 165),
(42, 166),
(42, 167),
(42, 168),
(43, 169),
(43, 170),
(43, 171),
(44, 173),
(44, 174),
(44, 175),
(44, 176),
(47, 185),
(47, 186),
(47, 187),
(47, 188),
(48, 189),
(48, 190),
(48, 191),
(48, 192),
(49, 193),
(49, 194),
(49, 195),
(49, 196),
(50, 197),
(50, 198),
(50, 200),
(59, 250);

-- --------------------------------------------------------

--
-- Table structure for table `director`
--

CREATE TABLE `director` (
  `id` int(11) NOT NULL,
  `oscars` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `director`
--

INSERT INTO `director` (`id`, `oscars`) VALUES
(203, 1),
(206, 4),
(207, 2),
(208, 2),
(210, 1),
(211, 1),
(212, 0),
(213, 0),
(214, 1),
(217, 2),
(218, 0),
(219, 4),
(220, 2),
(221, 0),
(222, 4),
(223, 4),
(224, 0),
(225, 0),
(227, 1),
(230, 3),
(248, 5);

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `genres` varchar(200) NOT NULL,
  `length` int(11) NOT NULL,
  `imdb_score` float DEFAULT NULL,
  `seen` int(11) DEFAULT NULL,
  `director_id` int(11) DEFAULT NULL,
  `studio_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `title`, `year`, `genres`, `length`, `imdb_score`, `seen`, `director_id`, `studio_id`) VALUES
(3, 'The Godfather  Part II', 1974, 'Crime, Drama', 200, 9, 20000000, 216, 24),
(4, 'The Dark Knight', 2008, 'Action, Crime, Drama', 152, 9, 1802351, 202, 5),
(6, 'Schindler s List', 1993, 'Biography, Drama, History', 195, 8.9, 937837, 217, 21),
(7, 'The Lord of the Rings  The Return of the King', 2003, 'Adventure, Drama, Fantasy', 201, 8.9, 1304569, 206, 12),
(8, 'Pulp Fiction', 1994, 'Crime, Drama', 154, 8.9, 1427451, 227, 14),
(10, 'The Lord of the Rings  The Fellowship of the Ring', 2001, 'Adventure, Drama, Fantasy', 178, 8.8, 1326876, 206, 12),
(11, 'Forrest Gump', 1994, 'Comedy, Drama, Romance', 142, 8.8, 1365937, 213, 24),
(12, 'Star Wars  Episode V   The Empire Strikes Back', 1980, 'Action, Adventure, Fantasy', 124, 8.8, 910608, 223, 23),
(13, 'Inception', 2010, 'Action, Adventure, Sci-Fi', 148, 8.8, 1592306, 202, 3),
(14, 'The Lord of the Rings  The Two Towers', 2002, 'Adventure, Drama, Fantasy', 179, 8.7, 1188300, 206, 12),
(15, 'One Flew Over the Cuckoo s Nest', 1975, 'Drama', 133, 8.7, 729653, 230, 17),
(16, 'Goodfellas', 1990, 'Crime, Drama', 146, 8.7, 787997, 207, 5),
(17, 'The Matrix', 1999, 'Action, Sci-Fi', 136, 8.7, 1314628, 224, 3),
(19, 'Se7en', 1995, 'Crime, Drama, Mystery', 127, 8.6, 1108627, 226, 12),
(20, 'It s a Wonderful Life', 1946, 'Drama, Family, Fantasy', 130, 8.6, 301614, 203, 6),
(21, 'The Silence of the Lambs', 1991, 'Crime, Drama, Thriller', 118, 8.6, 967878, 221, 8),
(22, 'The Usual Suspects', 1995, 'Crime, Drama, Mystery', 106, 8.6, 797545, 220, 13),
(23, 'Léon  The Professional', 1994, 'Crime, Drama, Thriller', 110, 8.6, 787281, 218, 18),
(24, 'Saving Private Ryan', 1998, 'Drama, War', 169, 8.6, 960639, 217, 24),
(25, 'City Lights', 1931, 'Comedy, Drama, Romance', 87, 8.6, 119453, 214, 4),
(26, 'Interstellar', 2014, 'Adventure, Drama, Sci-Fi', 169, 8.6, 1057411, 202, 24),
(27, 'American History X', 1998, 'Crime, Drama', 119, 8.5, 843128, 211, 12),
(28, 'Modern Times', 1936, 'Comedy, Drama, Family', 87, 8.5, 158254, 214, 17),
(29, 'Casablanca', 1942, 'Drama, Romance, War', 102, 8.5, 415400, 210, 3),
(30, 'The Green Mile', 1999, 'Crime, Drama, Fantasy', 189, 8.5, 857527, 212, 3),
(32, 'Raiders of the Lost Ark', 1981, 'Action, Adventure', 115, 8.5, 709587, 217, 24),
(33, 'The Pianist', 2002, 'Biography, Drama, Music', 150, 8.5, 547383, 225, 9),
(35, 'The Departed', 2006, 'Crime, Drama, Thriller', 151, 8.5, 943314, 207, 3),
(36, 'Whiplash', 2014, 'Drama, Music', 107, 8.5, 485079, 219, 11),
(37, 'Terminator 2  Judgment Day', 1991, 'Action, Sci-Fi, Thriller', 137, 8.5, 798971, 208, 1),
(38, 'Back to the Future', 1985, 'Adventure, Comedy, Sci-Fi', 116, 8.5, 798211, 213, 21),
(39, 'Gladiator', 2000, 'Action, Adventure, Drama', 155, 8.5, 1059523, 228, 15),
(41, 'The Prestige', 2006, 'Drama, Mystery, Sci-Fi', 130, 8.5, 922672, 202, 16),
(42, 'Apocalypse Now', 1979, 'Drama, War', 153, 8.5, 481465, 216, 17),
(43, 'Memento', 2000, 'Mystery, Thriller', 113, 8.5, 909341, 202, 22),
(44, 'The Great Dictator', 1940, 'Comedy, Drama, War', 125, 8.5, 151705, 214, 2),
(47, 'Dr  Strangelove or  How I Learned to Stop Worrying and Love the Bomb', 1964, 'Comedy', 95, 8.5, 367328, 222, 10),
(48, 'Paths of Glory', 1957, 'Drama, War', 88, 8.5, 132224, 222, 17),
(49, 'Django Unchained', 2012, 'Drama, Western', 165, 8.4, 1047465, 227, 19),
(50, 'The Shining', 1980, 'Drama, Horror', 146, 8.4, 664418, 222, 3),
(59, 'Wolfs movie', 2021, 'Crime', 210, 9, 2000, 248, 34);

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `name`) VALUES
(2, 'Morgan Freeman'),
(4, 'William Sadler'),
(5, 'Marlon Brando'),
(6, 'Al Pacino'),
(7, 'James Caan'),
(8, 'Richard S  Castellano'),
(9, 'Al Pacino'),
(10, 'Robert Duvall'),
(11, 'Diane Keaton'),
(12, 'Robert De Niro'),
(13, 'Christian Bale'),
(16, 'Michael Caine'),
(18, 'John Fiedler'),
(19, 'Lee J  Cobb'),
(20, 'E G  Marshall'),
(21, 'Liam Neeson'),
(22, 'Ben Kingsley'),
(23, 'Ralph Fiennes'),
(24, 'Caroline Goodall'),
(25, 'Noel Appleby'),
(26, 'Ali Astin'),
(27, 'Sean Astin'),
(28, 'David Aston'),
(29, 'Tim Roth'),
(30, 'Amanda Plummer'),
(31, 'Laura Lovelace'),
(32, 'John Travolta'),
(33, 'Edward Norton'),
(34, 'Brad Pitt'),
(35, 'Meat Loaf'),
(36, 'Zach Grenier'),
(37, 'Alan Howard'),
(39, 'Sean Astin'),
(40, 'Sala Baker'),
(41, 'Tom Hanks'),
(42, 'Rebecca Williams'),
(43, 'Sally Field'),
(44, 'Michael Conner Humphreys'),
(45, 'Mark Hamill'),
(46, 'Harrison Ford'),
(47, 'Carrie Fisher'),
(48, 'Billy Dee Williams'),
(49, 'Leonardo DiCaprio'),
(50, 'Joseph Gordon Levitt'),
(51, 'Ellen Page'),
(52, 'Tom Hardy'),
(54, 'Sean Astin'),
(55, 'John Bach'),
(56, 'Sala Baker'),
(57, 'Michael Berryman'),
(58, 'Peter Brocco'),
(59, 'Dean R  Brooks'),
(62, 'Ray Liotta'),
(63, 'Joe Pesci'),
(64, 'Lorraine Bracco'),
(65, 'Keanu Reeves'),
(66, 'Laurence Fishburne'),
(67, 'Carrie Anne Moss'),
(68, 'Hugo Weaving'),
(69, 'Mark Hamill'),
(70, 'Harrison Ford'),
(71, 'Carrie Fisher'),
(72, 'Peter Cushing'),
(73, 'Morgan Freeman'),
(74, 'Andrew Kevin Walker'),
(75, 'Kevin Spacey'),
(76, 'Daniel Zacapa'),
(77, 'James Stewart'),
(78, 'Donna Reed'),
(80, 'Thomas Mitchell'),
(81, 'Jodie Foster'),
(82, 'Lawrence A  Bonney'),
(83, 'Kasi Lemmons'),
(84, 'Lawrence T  Wrentz'),
(85, 'Stephen Baldwin'),
(86, 'Gabriel Byrne'),
(87, 'Benicio Del Toro'),
(88, 'Kevin Pollak'),
(89, 'Jean Reno'),
(90, 'Gary Oldman'),
(92, 'Danny Aiello'),
(93, 'Tom Hanks'),
(94, 'Tom Sizemore'),
(96, 'Barry Pepper'),
(97, 'Virginia Cherrill'),
(98, 'Florence Lee'),
(99, 'Harry Myers'),
(100, 'Al Ernest Garcia'),
(102, 'Matthew McConaughey'),
(103, 'Mackenzie Foy'),
(104, 'John Lithgow'),
(107, 'Beverly D Angelo'),
(108, 'Jennifer Lien'),
(109, 'Charles Chaplin'),
(110, 'Paulette Goddard'),
(112, 'Tiny Sandford'),
(114, 'Ingrid Bergman'),
(115, 'Paul Henreid'),
(116, 'Claude Rains'),
(117, 'Tom Hanks'),
(118, 'David Morse'),
(119, 'Michael Clarke Duncan'),
(120, 'Bonnie Hunt'),
(121, 'Anthony Perkins'),
(122, 'Vera Miles'),
(123, 'John Gavin'),
(124, 'Janet Leigh'),
(126, 'Karen Allen'),
(127, 'Paul Freeman'),
(128, 'Ronald Lacey'),
(130, 'Emilia Fox'),
(131, 'Michal Zebrowski'),
(133, 'James Stewart'),
(135, 'Wendell Corey'),
(136, 'Thelma Ritter'),
(137, 'Leonardo DiCaprio'),
(138, 'Matt Damon'),
(139, 'Jack Nicholson'),
(141, 'Miles Teller'),
(142, 'J K  Simmons'),
(143, 'Paul Reiser'),
(144, 'Melissa Benoist'),
(146, 'Linda Hamilton'),
(147, 'Edward Furlong'),
(149, 'Michael J  Fox'),
(151, 'Lea Thompson'),
(153, 'Russell Crowe'),
(154, 'Joaquin Phoenix'),
(157, 'Rowan Atkinson'),
(158, 'Matthew Broderick'),
(159, 'Niketa Calame'),
(160, 'Jim Cummings'),
(162, 'Christian Bale'),
(163, 'Michael Caine'),
(164, 'Piper Perabo'),
(165, 'Marlon Brando'),
(166, 'Martin Sheen'),
(167, 'Robert Duvall'),
(168, 'Frederic Forrest'),
(169, 'Guy Pearce'),
(170, 'Carrie Anne Moss'),
(171, 'Joe Pantoliano'),
(173, 'Charles Chaplin'),
(174, 'Jack Oakie'),
(175, 'Reginald Gardiner'),
(176, 'Henry Daniell'),
(177, 'William Holden'),
(178, 'Gloria Swanson'),
(179, 'Erich von Stroheim'),
(180, 'Nancy Olson'),
(181, 'Tom Skerritt'),
(182, 'Sigourney Weaver'),
(183, 'Veronica Cartwright'),
(184, 'Harry Dean Stanton'),
(185, 'Peter Sellers'),
(186, 'George C  Scott'),
(187, 'Sterling Hayden'),
(188, 'Keenan Wynn'),
(189, 'Kirk Douglas'),
(190, 'Ralph Meeker'),
(191, 'Adolphe Menjou'),
(192, 'George Macready'),
(193, 'Jamie Foxx'),
(194, 'Christoph Waltz'),
(195, 'Leonardo DiCaprio'),
(196, 'Kerry Washington'),
(197, 'Jack Nicholson'),
(198, 'Shelley Duvall'),
(200, 'Scatman Crothers'),
(202, 'Christopher Nolan'),
(203, 'Frank Capra'),
(204, 'Billy Wilder'),
(205, 'Sidney Lumet'),
(206, 'Peter Jackson'),
(207, 'Martin Scorsese'),
(208, 'James Cameron'),
(209, 'George Lucas'),
(210, 'Michael Curtiz'),
(211, 'Tony Kaye'),
(212, 'Frank Darabont'),
(213, 'Robert Zemeckis'),
(214, 'Charles Chaplin'),
(215, 'Roger Allers, Rob Minkoff'),
(216, 'Francis Ford Coppola'),
(217, 'Steven Spielberg'),
(218, 'Luc Besson'),
(219, 'Damien Chazelle'),
(220, 'Bryan Singer'),
(221, 'Jonathan Demme'),
(222, 'Stanley Kubrick'),
(223, 'Irvin Kershner'),
(224, 'Lana Wachowski, Lilly Wachowski'),
(225, 'Roman Polanski'),
(226, 'David Fincher'),
(227, 'Quentin Tarantino'),
(228, 'Ridley Scott'),
(229, 'Alfred Hitchcock'),
(230, 'Milos Forman'),
(248, 'Levente Wolf'),
(250, 'Wolf Péter');

-- --------------------------------------------------------

--
-- Table structure for table `studio`
--

CREATE TABLE `studio` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `location` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studio`
--

INSERT INTO `studio` (`id`, `name`, `location`) VALUES
(1, 'TriStar Pictures', 'France'),
(2, 'Criterion Collection', 'USA'),
(3, 'Warner Bros. Pictures', 'UK'),
(4, 'Twentieth Century Fox Home Entertainment', 'USA'),
(5, 'Warner Bros.', 'UK'),
(6, 'Liberty Films', 'USA'),
(8, 'Orion Pictures Corporation', 'USA'),
(9, 'Focus Features', 'UK'),
(10, 'Sony Pictures', 'UK'),
(11, 'Sony Pictures Classics', 'USA'),
(12, 'New Line Cinema', 'New Zealand'),
(13, 'Gramercy Pictures', 'Germany'),
(14, 'Miramax Films', 'USA'),
(15, 'Dreamworks Distribution LLC', 'UK'),
(16, 'Buena Vista Pictures', 'UK'),
(17, 'United Artists', 'USA'),
(18, 'Columbia Pictures', 'USA'),
(19, 'The Weinstein Co.', 'USA'),
(21, 'Universal Pictures', 'USA'),
(22, 'Newmarket Films', 'USA'),
(23, 'Twentieth Century Fox', 'USA'),
(24, 'Paramount Pictures', 'USA'),
(34, 'Wolfs Studio', 'Hungary');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actor`
--
ALTER TABLE `actor`
  ADD KEY `id` (`id`);

--
-- Indexes for table `cast`
--
ALTER TABLE `cast`
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `actor_id` (`actor_id`);

--
-- Indexes for table `director`
--
ALTER TABLE `director`
  ADD KEY `movie_check` (`id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `director_id` (`director_id`),
  ADD KEY `studio_id` (`studio_id`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studio`
--
ALTER TABLE `studio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actor`
--
ALTER TABLE `actor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `director`
--
ALTER TABLE `director`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=249;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `studio`
--
ALTER TABLE `studio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `actor`
--
ALTER TABLE `actor`
  ADD CONSTRAINT `actor_ibfk_1` FOREIGN KEY (`id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cast`
--
ALTER TABLE `cast`
  ADD CONSTRAINT `cast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `director`
--
ALTER TABLE `director`
  ADD CONSTRAINT `director_ibfk_1` FOREIGN KEY (`id`) REFERENCES `person` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `movie_check` FOREIGN KEY (`id`) REFERENCES `movie` (`director_id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `movie`
--
ALTER TABLE `movie`
  ADD CONSTRAINT `movie_ibfk_2` FOREIGN KEY (`studio_id`) REFERENCES `studio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
