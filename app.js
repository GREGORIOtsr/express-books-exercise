const express = require("express");
const app = express();
app.use(express.json());
const books = require('./data/books.json');
const port = 3000;

// 1.
app.get('/all', (req, res) => {
    res.status(200).json(books);
});

// 2.
app.get('/first', (req, res) => {
    res.status(200).json(books[0]);
});

// 3.
app.get('/last', (req, res) => {
    res.status(200).json(books[books.length - 1]);
});

// 4.
app.get('/middle', (req, res) => {
    res.status(200).json(books[books.length / 2]);
});

// 5.
app.get('/author/dante-alighieri', (req, res) => {
    for (let book of books) {
        if (book.author == 'Dante Alighieri') {
            res.status(200).json(book.title);
        }
    }
});

// 6.
app.get('/country/charles-dickens', (req, res) => {
    for (let book of books) {
        if (book.author == 'Charles Dickens') {
            res.status(200).json(book.country);
        }
    }
})

// 7.
app.get('/year&pages/cervantes', (req, res) => {
    for (let book of books) {
        if (book.author == 'Miguel de Cervantes') {
            res.status(200).json({pages: book.pages, year: book.year});
        }
    }
})

// 8.
app.get('/country/count/spain', (req, res) => {
    let counter = 0;
    for (let book of books) {
        if (book.country == 'Spain') {
            counter++;
        }
    }
    res.status(200).json(counter);
})

// 9.
app.get('/country/at-least/germany', (req, res) => {
    for (let book of books) {
        if (book.country == 'Germany') {
            return res.status(200).json(true);
        }
    }
    res.status(200).json(false);
})

// 10.
app.get('/pages/all-greater/200', (req, res) => {
    for (let book of books) {
        if (book.pages < 100) {
            return res.status(200).json(false);
        }
    }
    res.status(200).json(true);
})

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log(`Server listening on http://localhost:${port}`);
})
