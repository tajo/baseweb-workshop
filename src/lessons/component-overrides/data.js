// @flow
export const ACTION = "Action";
export const DRAMA = "Drama";
export const ROMANCE = "Romance";

// http://www.omdbapi.com/
export const movies_raw = [
  {
    Title: "Roma",
    Year: "2018",
    Rated: "R",
    Released: "21 Nov 2018",
    Runtime: "135 min",
    Genre: "Drama",
    Director: "Alfonso Cuarón",
    Writer: "Alfonso Cuarón",
    Actors:
      "Yalitza Aparicio, Marina de Tavira, Diego Cortina Autrey, Carlos Peralta",
    Plot:
      "A year in the life of a middle-class family's maid in Mexico City in the early 1970s.",
    Language: "English, Norwegian, Japanese, German, French, Spanish, Mixtec",
    Country: "Mexico, USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Metacritic", Value: "96/100" }
    ],
    Metascore: "96",
    imdbRating: "7.8",
    imdbVotes: "99,342",
    imdbID: "tt6155172",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  },

  {
    Title: "Black Panther",
    Year: "2018",
    Rated: "PG-13",
    Released: "16 Feb 2018",
    Runtime: "134 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Ryan Coogler",
    Writer:
      "Ryan Coogler, Joe Robert Cole, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel Comics by)",
    Actors: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira",
    Plot:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    Language: "English, Swahili, Nama, Xhosa, Korean",
    Country: "USA",
    Awards: "14 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.3/10" },
      { Source: "Rotten Tomatoes", Value: "97%" },
      { Source: "Metacritic", Value: "88/100" }
    ],
    Metascore: "88",
    imdbRating: "7.3",
    imdbVotes: "486,841",
    imdbID: "tt1825683",
    Type: "movie",
    DVD: "15 May 2018",
    BoxOffice: "$501,105,037",
    Production: "Marvel Studios",
    Website: "https://www.marvel.com/movies/black-panther",
    Response: "True"
  },

  {
    Title: "Bohemian Rhapsody",
    Year: "2018",
    Rated: "PG-13",
    Released: "02 Nov 2018",
    Runtime: "134 min",
    Genre: "Biography, Drama, Music",
    Director: "Bryan Singer",
    Writer:
      "Anthony McCarten (story by), Peter Morgan (story by), Anthony McCarten (screenplay by)",
    Actors: "Rami Malek, Lucy Boynton, Gwilym Lee, Ben Hardy",
    Plot:
      "The story of the legendary rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
    Language: "English",
    Country: "UK, USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.1/10" },
      { Source: "Rotten Tomatoes", Value: "61%" },
      { Source: "Metacritic", Value: "49/100" }
    ],
    Metascore: "49",
    imdbRating: "8.1",
    imdbVotes: "314,530",
    imdbID: "tt1727824",
    Type: "movie",
    DVD: "12 Feb 2019",
    BoxOffice: "N/A",
    Production: "20th Century Fox",
    Website: "http://www.bohemianrhapsody.com",
    Response: "True"
  },

  {
    Title: "Green Book",
    Year: "2018",
    Rated: "PG-13",
    Released: "16 Nov 2018",
    Runtime: "130 min",
    Genre: "Biography, Comedy, Drama, Music",
    Director: "Peter Farrelly",
    Writer: "Nick Vallelonga, Brian Hayes Currie, Peter Farrelly",
    Actors:
      "Viggo Mortensen, Mahershala Ali, Linda Cardellini, Sebastian Maniscalco",
    Plot:
      "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
    Language: "English, Italian, Russian, German",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.3/10" },
      { Source: "Rotten Tomatoes", Value: "78%" },
      { Source: "Metacritic", Value: "69/100" }
    ],
    Metascore: "69",
    imdbRating: "8.3",
    imdbVotes: "138,886",
    imdbID: "tt6966692",
    Type: "movie",
    DVD: "19 Feb 2019",
    BoxOffice: "N/A",
    Production: "Universal Pictures",
    Website: "https://www.uphe.com/movies/green-book",
    Response: "True"
  },

  {
    Title: "First Man",
    Year: "2018",
    Rated: "PG-13",
    Released: "12 Oct 2018",
    Runtime: "141 min",
    Genre: "Biography, Drama, History",
    Director: "Damien Chazelle",
    Writer:
      "Josh Singer (screenplay by), James R. Hansen (based on the book by)",
    Actors: "Ryan Gosling, Claire Foy, Jason Clarke, Kyle Chandler",
    Plot:
      "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
    Language: "English",
    Country: "USA, Japan",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDBhOTMxN2UtYjllYS00NWNiLWE1MzAtZjg3NmExODliMDQ0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.4/10" },
      { Source: "Rotten Tomatoes", Value: "87%" },
      { Source: "Metacritic", Value: "84/100" }
    ],
    Metascore: "84",
    imdbRating: "7.4",
    imdbVotes: "110,022",
    imdbID: "tt1213641",
    Type: "movie",
    DVD: "22 Jan 2019",
    BoxOffice: "N/A",
    Production: "Universal Pictures",
    Website: "http://www.firstman.com",
    Response: "True"
  },
  {
    Title: "BlacKkKlansman",
    Year: "2018",
    Rated: "R",
    Released: "10 Aug 2018",
    Runtime: "135 min",
    Genre: "Biography, Crime, Drama",
    Director: "Spike Lee",
    Writer:
      "Charlie Wachtel, David Rabinowitz, Kevin Willmott, Spike Lee, Ron Stallworth (based on the book by)",
    Actors:
      "Alec Baldwin, John David Washington, Isiah Whitlock Jr., Robert John Burke",
    Plot:
      "Ron Stallworth, an African American police officer from Colorado Springs, CO, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader. Based on actual events.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjUyOTE1NjI0OF5BMl5BanBnXkFtZTgwMTM4ODQ5NTM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.5/10" },
      { Source: "Rotten Tomatoes", Value: "96%" },
      { Source: "Metacritic", Value: "83/100" }
    ],
    Metascore: "83",
    imdbRating: "7.5",
    imdbVotes: "131,718",
    imdbID: "tt7349662",
    Type: "movie",
    DVD: "06 Nov 2018",
    BoxOffice: "N/A",
    Production: "Focus Features",
    Website: "http://www.focusfeatures.com/blackkklansman",
    Response: "True"
  },

  {
    Title: "Vice",
    Year: "2018",
    Rated: "R",
    Released: "25 Dec 2018",
    Runtime: "132 min",
    Genre: "Biography, Comedy, Drama",
    Director: "Adam McKay",
    Writer: "Adam McKay",
    Actors: "Christian Bale, Amy Adams, Steve Carell, Sam Rockwell",
    Plot:
      "The story of Dick Cheney, an unassuming bureaucratic Washington insider, who quietly wielded immense power as Vice President to George W. Bush, reshaping the country and the globe in ways that we still feel today.",
    Language: "English, Arabic",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY1NjM0MzgxMV5BMl5BanBnXkFtZTgwNDc4NTY0NjM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.2/10" },
      { Source: "Rotten Tomatoes", Value: "66%" },
      { Source: "Metacritic", Value: "61/100" }
    ],
    Metascore: "61",
    imdbRating: "7.2",
    imdbVotes: "55,576",
    imdbID: "tt6266538",
    Type: "movie",
    DVD: "02 Apr 2019",
    BoxOffice: "N/A",
    Production: "Annapurna Pictures",
    Website: "N/A",
    Response: "True"
  },

  {
    Title: "Spider-Man: Into the Spider-Verse",
    Year: "2018",
    Rated: "PG",
    Released: "14 Dec 2018",
    Runtime: "117 min",
    Genre: "Animation, Action, Adventure, Family, Sci-Fi",
    Director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    Writer:
      "Phil Lord (screenplay by), Rodney Rothman (screenplay by), Phil Lord (story by)",
    Actors: "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
    Plot:
      "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",
    Language: "English, Spanish",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.5/10" },
      { Source: "Rotten Tomatoes", Value: "97%" },
      { Source: "Metacritic", Value: "87/100" }
    ],
    Metascore: "87",
    imdbRating: "8.5",
    imdbVotes: "165,676",
    imdbID: "tt4633694",
    Type: "movie",
    DVD: "26 Feb 2019",
    BoxOffice: "N/A",
    Production: "Sony Pictures",
    Website: "http://www.intothespiderverse.movie/",
    Response: "True"
  },

  {
    Title: "Free Solo",
    Year: "2018",
    Rated: "PG-13",
    Released: "14 Dec 2018",
    Runtime: "100 min",
    Genre: "Documentary, Sport",
    Director: "Jimmy Chin, Elizabeth Chai Vasarhelyi",
    Writer: "N/A",
    Actors: "Alex Honnold, Tommy Caldwell, Jimmy Chin, Cheyne Lempe",
    Plot:
      "Alex Honnold attempts to become the first person to ever free solo climb El Capitan.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMwYjcwNWQtNTQ5YS00MzVlLTkxYzMtNDIwZWIxZTE4Zjg2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.3/10" },
      { Source: "Rotten Tomatoes", Value: "98%" },
      { Source: "Metacritic", Value: "83/100" }
    ],
    Metascore: "83",
    imdbRating: "8.3",
    imdbVotes: "22,339",
    imdbID: "tt7775622",
    Type: "movie",
    DVD: "12 Feb 2019",
    BoxOffice: "N/A",
    Production: "Greenwich Entertainment",
    Website: "http://www.nationalgeographic.com/films/free-solo/",
    Response: "True"
  },

  {
    Title: "The Favourite",
    Year: "2018",
    Rated: "R",
    Released: "21 Dec 2018",
    Runtime: "119 min",
    Genre: "Biography, Comedy, Drama, History",
    Director: "Yorgos Lanthimos",
    Writer: "Deborah Davis, Tony McNamara",
    Actors: "Olivia Colman, Rachel Weisz, Emma Delves, Faye Daveney",
    Plot:
      "In early 18th century England, a frail Queen Anne occupies the throne and her close friend, Lady Sarah, governs the country in her stead. When a new servant, Abigail, arrives, her charm endears her to Sarah.",
    Language: "English",
    Country: "Ireland, UK, USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg3Mzk4MjU0Ml5BMl5BanBnXkFtZTgwMzQ3MjkxNjM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.7/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "90/100" }
    ],
    Metascore: "90",
    imdbRating: "7.7",
    imdbVotes: "97,364",
    imdbID: "tt5083738",
    Type: "movie",
    DVD: "12 Feb 2019",
    BoxOffice: "N/A",
    Production: "Fox Searchlight Pictures, Film4 and Waypoint",
    Website: "http://www.foxsearchlight.com/thefavourite/",
    Response: "True"
  },

  {
    Title: "A Star Is Born",
    Year: "2018",
    Rated: "R",
    Released: "05 Oct 2018",
    Runtime: "136 min",
    Genre: "Drama, Music, Romance",
    Director: "Bradley Cooper",
    Writer:
      "Eric Roth (screenplay by), Bradley Cooper (screenplay by), Will Fetters (screenplay by), Moss Hart (based on the 1954 screenplay by), John Gregory Dunne (based on the 1976 screenplay by), Joan Didion (based on the 1976 screenplay by), Frank Pierson (based on the 1976 screenplay by), William A. Wellman (based on a story by), Robert Carson (based on a story by)",
    Actors: "Lady Gaga, Bradley Cooper, Sam Elliott, Andrew Dice Clay",
    Plot:
      "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
    Language: "English",
    Country: "USA",
    Awards: "1 nomination.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.8/10" },
      { Source: "Rotten Tomatoes", Value: "89%" },
      { Source: "Metacritic", Value: "88/100" }
    ],
    Metascore: "88",
    imdbRating: "7.8",
    imdbVotes: "222,511",
    imdbID: "tt1517451",
    Type: "movie",
    DVD: "19 Feb 2019",
    BoxOffice: "N/A",
    Production: "Warner Bros. Pictures",
    Website: "http://www.astarisbornmovie.com/",
    Response: "True"
  },

  {
    Title: "If Beale Street Could Talk",
    Year: "2018",
    Rated: "R",
    Released: "25 Dec 2018",
    Runtime: "119 min",
    Genre: "Crime, Drama, Romance",
    Director: "Barry Jenkins",
    Writer:
      "Barry Jenkins (written for the screen by), James Baldwin (based on the book by)",
    Actors: "KiKi Layne, Stephan James, Regina King, Colman Domingo",
    Plot:
      "A woman in Harlem embraces her pregnancy while she and her family struggle to prove her fiancé innocent of a crime.",
    Language: "English, Spanish",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWVkMzY5NzgtMTdlNS00NjY5LThjOTktZWFkNDU3NmQzMDIwXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.4/10" },
      { Source: "Rotten Tomatoes", Value: "95%" },
      { Source: "Metacritic", Value: "87/100" }
    ],
    Metascore: "87",
    imdbRating: "7.4",
    imdbVotes: "17,186",
    imdbID: "tt7125860",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Annapurna Pictures",
    Website: "http://bealestreet.movie/",
    Response: "True"
  },

  {
    Title: "Mary Poppins Returns",
    Year: "2018",
    Rated: "PG",
    Released: "19 Dec 2018",
    Runtime: "130 min",
    Genre: "Comedy, Family, Fantasy, Musical",
    Director: "Rob Marshall",
    Writer:
      'David Magee (screenplay by), David Magee (screen story by), Rob Marshall (screen story by), John DeLuca (screen story by), P.L. Travers (based upon the "Mary Poppins" stories by)',
    Actors: "Emily Blunt, Lin-Manuel Miranda, Ben Whishaw, Emily Mortimer",
    Plot:
      "Decades after her original visit, the magical nanny returns to help the Banks siblings and Michael's children through a difficult time in their lives.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk0NDIzMTA1MF5BMl5BanBnXkFtZTgwMzM0MTUzNjM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.2/10" },
      { Source: "Rotten Tomatoes", Value: "79%" },
      { Source: "Metacritic", Value: "66/100" }
    ],
    Metascore: "66",
    imdbRating: "7.2",
    imdbVotes: "34,140",
    imdbID: "tt5028340",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Walt Disney Pictures",
    Website: "http://movies.disney.com/mary-poppins-returns",
    Response: "True"
  },

  {
    Title: "Mary Queen of Scots",
    Year: "2018",
    Rated: "R",
    Released: "21 Dec 2018",
    Runtime: "124 min",
    Genre: "Biography, Drama, History",
    Director: "Josie Rourke",
    Writer:
      'Beau Willimon (screenplay by), John Guy (based on the book "Queen of Scots: The True Life of Mary Stuart" by)',
    Actors: "Angela Bain, Richard Cant, Guy Rhys, Thom Petty",
    Plot:
      "Mary Stuart's attempt to overthrow her cousin Elizabeth I, Queen of England, finds her condemned to years of imprisonment before facing execution.",
    Language: "English, French, Scottish Gaelic, Latin",
    Country: "UK, USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDVmOGI4MTMtYmNmNC00MTliLTlkYjQtYmU2N2EyNDk2YTAwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "6.3/10" },
      { Source: "Metacritic", Value: "60/100" }
    ],
    Metascore: "60",
    imdbRating: "6.3",
    imdbVotes: "17,542",
    imdbID: "tt2328900",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "Metrodome",
    Website: "http://www.maryqueenofscots-movie.com/",
    Response: "True"
  },

  {
    Title: "Incredibles 2",
    Year: "2018",
    Rated: "PG",
    Released: "15 Jun 2018",
    Runtime: "118 min",
    Genre: "Animation, Action, Adventure, Comedy, Family, Sci-Fi",
    Director: "Brad Bird",
    Writer: "Brad Bird",
    Actors: "Craig T. Nelson, Holly Hunter, Sarah Vowell, Huck Milner",
    Plot:
      "The Incredibles hero family takes on a new mission, which involves a change in family roles: Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.7/10" },
      { Source: "Rotten Tomatoes", Value: "94%" },
      { Source: "Metacritic", Value: "80/100" }
    ],
    Metascore: "80",
    imdbRating: "7.7",
    imdbVotes: "185,186",
    imdbID: "tt3606756",
    Type: "movie",
    DVD: "23 Oct 2018",
    BoxOffice: "N/A",
    Production: "Disney/Pixar",
    Website: "http://movies.disney.com/the-incredibles-2",
    Response: "True"
  },

  {
    Title: "Isle of Dogs",
    Year: "2018",
    Rated: "PG-13",
    Released: "13 Apr 2018",
    Runtime: "101 min",
    Genre: "Animation, Adventure, Comedy, Drama, Fantasy, Sci-Fi",
    Director: "Wes Anderson",
    Writer:
      "Wes Anderson (story by), Roman Coppola (story by), Jason Schwartzman (story by), Kunichi Nomura (story by), Wes Anderson (screenplay by)",
    Actors: "Bryan Cranston, Koyu Rankin, Edward Norton, Bob Balaban",
    Plot:
      "Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog.",
    Language: "English, Japanese",
    Country: "Germany, USA",
    Awards: "2 wins.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYyOTUwNjAxM15BMl5BanBnXkFtZTgwODcyMzE0NDM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.9/10" },
      { Source: "Rotten Tomatoes", Value: "90%" },
      { Source: "Metacritic", Value: "82/100" }
    ],
    Metascore: "82",
    imdbRating: "7.9",
    imdbVotes: "99,849",
    imdbID: "tt5104604",
    Type: "movie",
    DVD: "17 Jul 2018",
    BoxOffice: "N/A",
    Production: "Fox Searchlight Pictures",
    Website: "http://www.isleofdogsmovie.com/",
    Response: "True"
  },

  {
    Title: "The Ballad of Buster Scruggs",
    Year: "2018",
    Rated: "R",
    Released: "09 Nov 2018",
    Runtime: "133 min",
    Genre: "Comedy, Drama, Musical, Mystery, Romance, Western",
    Director: "Ethan Coen, Joel Coen",
    Writer:
      "Joel Coen, Ethan Coen, Jack London (based on a story by), Stewart Edward White (inspired by a story by)",
    Actors: "Tim Blake Nelson, Willie Watson, Clancy Brown, Danny McCarthy",
    Plot:
      "Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjRkYTI3M2EtZWQ4Ny00OTA2LWFmMTMtY2E4MTEyZmNjOTMxXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.3/10" },
      { Source: "Rotten Tomatoes", Value: "91%" },
      { Source: "Metacritic", Value: "79/100" }
    ],
    Metascore: "79",
    imdbRating: "7.3",
    imdbVotes: "77,355",
    imdbID: "tt6412452",
    Type: "movie",
    DVD: "16 Nov 2018",
    BoxOffice: "N/A",
    Production: "Netflix",
    Website: "N/A",
    Response: "True"
  },

  {
    Title: "Ready Player One",
    Year: "2018",
    Rated: "PG-13",
    Released: "29 Mar 2018",
    Runtime: "140 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Steven Spielberg",
    Writer:
      "Zak Penn (screenplay by), Ernest Cline (screenplay by), Ernest Cline (based on the novel by)",
    Actors: "Tye Sheridan, Olivia Cooke, Ben Mendelsohn, Lena Waithe",
    Plot:
      "When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.5/10" },
      { Source: "Rotten Tomatoes", Value: "72%" },
      { Source: "Metacritic", Value: "64/100" }
    ],
    Metascore: "64",
    imdbRating: "7.5",
    imdbVotes: "285,173",
    imdbID: "tt1677720",
    Type: "movie",
    DVD: "03 Jul 2018",
    BoxOffice: "N/A",
    Production: "Warner Bros. Pictures",
    Website: "http://readyplayeronemovie.com/",
    Response: "True"
  },

  {
    Title: "First Reformed",
    Year: "2017",
    Rated: "R",
    Released: "18 May 2018",
    Runtime: "113 min",
    Genre: "Drama, Mystery, Thriller",
    Director: "Paul Schrader",
    Writer: "Paul Schrader",
    Actors:
      "Ethan Hawke, Amanda Seyfried, Cedric the Entertainer, Victoria Hill",
    Plot:
      "A minister of a small congregation in upstate New York grapples with mounting despair brought on by tragedy, worldly concerns and a tormented past.",
    Language: "English",
    Country: "USA, UK, Australia",
    Awards: "1 win & 1 nomination.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDI1MGIyZDMtYjAyMy00ZWE1LTgzYjctYzM5MzczNjFjZWQwXkEyXkFqcGdeQXVyODQyNzE3MDg@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.1/10" },
      { Source: "Rotten Tomatoes", Value: "93%" },
      { Source: "Metacritic", Value: "85/100" }
    ],
    Metascore: "85",
    imdbRating: "7.1",
    imdbVotes: "30,774",
    imdbID: "tt6053438",
    Type: "movie",
    DVD: "21 Aug 2018",
    BoxOffice: "N/A",
    Production: "A24",
    Website: "N/A",
    Response: "True"
  },

  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    Rated: "PG-13",
    Released: "27 Apr 2018",
    Runtime: "149 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Anthony Russo, Joe Russo",
    Writer:
      "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos, Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
    Actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
    Plot:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "8.5/10" },
      { Source: "Rotten Tomatoes", Value: "85%" },
      { Source: "Metacritic", Value: "68/100" }
    ],
    Metascore: "68",
    imdbRating: "8.5",
    imdbVotes: "612,147",
    imdbID: "tt4154756",
    Type: "movie",
    DVD: "14 Aug 2018",
    BoxOffice: "$664,987,816",
    Production: "Walt Disney Pictures",
    Website: "http://marvel.com/movies/movie/223/avengers_infinity_war",
    Response: "True"
  },

  {
    Title: "Solo: A Star Wars Story",
    Year: "2018",
    Rated: "PG-13",
    Released: "25 May 2018",
    Runtime: "135 min",
    Genre: "Action, Adventure, Fantasy, Sci-Fi",
    Director: "Ron Howard",
    Writer:
      "Jonathan Kasdan, Lawrence Kasdan, George Lucas (based on characters created by)",
    Actors: "Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke",
    Plot:
      "During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "7.0/10" },
      { Source: "Rotten Tomatoes", Value: "70%" },
      { Source: "Metacritic", Value: "62/100" }
    ],
    Metascore: "62",
    imdbRating: "7.0",
    imdbVotes: "209,745",
    imdbID: "tt3778644",
    Type: "movie",
    DVD: "14 Sep 2018",
    BoxOffice: "N/A",
    Production: "Walt Disney Pictures",
    Website: "http://www.starwars.com/films/solo",
    Response: "True"
  }
];

export const moviesByGenre = movies_raw.reduce((acc, cur) => {
  cur.Genre.split(", ").forEach(genre => {
    if (!acc[genre]) {
      acc[genre] = [];
    }

    acc[genre].push(cur);
  });

  return acc;
}, {});
