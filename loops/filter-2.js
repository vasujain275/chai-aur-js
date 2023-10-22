// Fitler method example

const books = [
    {
        title: 'The Alchemist',
        genere: 'Adventure',
        rating: 4.5,
        published: 1988
    },
    {
        title: 'The Prophet',
        genere: 'Philosophy',
        rating: 4.5,
        published: 1923
    },
    {
        title: 'The Kite Runner',
        genere: 'Drama',
        rating: 4.5,
        published: 2003
    },
    {
        title: 'Atomic Habits',
        genere: 'Self-help',
        rating: 4.5,
        published: 2018
    }
]

const userBooks = books.filter( (bk) => bk.genere === 'Adventure' )

console.log(userBooks);