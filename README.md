# MyReads Project

The MyReads Project, a project requirement for Udacity's Front End Nanodegree Course, is a library application that lets the user search for and select books, and organize them by bookshelves (Currently Reading, Want To Read, and Read).
Students are provided a starter template with which to start developing the application.  Project dependencies are installed with 'npm install' and the development server is started with 'npm start'.  The organization of the files of the finished project are depicted below:

```

├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon
│   └── index.html 
└── src
    ├── components # React UI components 
    │   ├── book.js
    │   ├── bookshelf.js
    │   ├── mainpage.js
    │   └── searchpage.js
    ├── icons # Helpful images for the app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles. 
    └── index.js # File used for DOM rendering only.

```
The mainpage shows three bookshelves (for currently reading, want to read, and read) and the corresponding books they contain.

Book details include the title, author and thumbnail image of the cover.  Each book has controls for moving it from one shelf to another.

The mainpage has a navigation control for moving to the searchpage where the user can search for books using a book title or author as keyword.  The search results displayed change interactively as the user types a keyword.

Books displayed in the search results also have controls for moving it to bookshelves or for categorization (currently reading, want to read, read, or none).  A change in a book's category
in the searchpage is instantly reflected in the mainpage.

In order to use the application, npm should first be installed by typing the following command: npm install.  To run the application, type the following command: npm start.	

## Backend Server

To simplify your development process, Udacity provided a backend server for students to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. The finished application made sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is for submission purposes only but will accept pull requests.

## Disclosure:

Portions of the scripts that I developed were based on those that can be found in "Tutorial Request: FEND Project 6 Walkthrough" at https://www.youtube.com/watch?v=acJHkd6K5kI by Ryan Waite, and "MyReads React Zoom Study Session with Doug Brown" at https://www.youtube.com/watch?v=OcL7-7cRpkQ&feature=youtu.be.
