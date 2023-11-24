
function print(inputArr) {
    let movies = [];

    for (const element of inputArr) {
        let movie = {};

        if (element.includes('addMovie')) {
            movie.name = element.replace('addMovie ', '');
            movies.push(movie);
        } else if (element.includes('directedBy')) {
            let toCheckTitle = element.split(' directedBy ')[0];
            let director = element.split(' directedBy ')[1];

            movies.forEach(m => {
                if (m.name === toCheckTitle) {
                    m.director = director;
                }
            });
        } else if (element.includes('onDate')) {
            let toCheckTitle = element.split(' onDate ')[0];
            let date = element.split(' onDate ')[1];

            movies.forEach(m => {
                if (m.name === toCheckTitle) {
                    m.date = date;
                }
            });
        }
    }

    movies.forEach(m => {
        if (m.hasOwnProperty('name') && m.hasOwnProperty('director') && m.hasOwnProperty('date')) {
            console.log(JSON.stringify(m));
        }
        
    });
}

print([
    'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'

]
);