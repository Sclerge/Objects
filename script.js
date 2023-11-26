const movies = [
    {
        name: "Across the Spiderverse",
        year: "2023",
        director: "Joaquim Dos Santos, Kemp Powers, and Justin K. Thompson",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKz79yovAPqs4fiRYszmsith-sdApiuPsQHCOK7S437Ru5AkE2" // Replace with a direct image URL
    },
    {
        name: "Chronicle",
        year: "2012",
        director: "Josh Trank",
        picture: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_e3KwVqoiQgT5GAyqzxkBC1I0kBTuNrZKOFNrnDk9kzbnQLzr"
    },
    {
        name: "Dragon Ball Super: Broly",
        year: "2018",
        director: "Tatsuya Nagamine",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pb6euKoLxZrRukhNBJuJz-1iUQSXWwLkLhPqS2gT2Nljmjiu"
    }
];

function createMovieElement(movie) {
    const li = document.createElement('li');
    li.innerHTML = `
        <h3>${movie.name} (${movie.year})</h3>
        <p>Directed by: ${movie.director}</p>
        <img src="${movie.picture}" alt="Poster of ${movie.name}" style="width:200px;">
    `;
    return li;
}

const moviesList = document.getElementById('moviesList');
movies.map(createMovieElement).forEach(element => moviesList.appendChild(element));
