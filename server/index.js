const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./typedefs/index')
const books = require('./books');

const authors = [
  { id: 1, name: 'Brandon Sanderson'},
  { id: 2, name: 'Douglas Adams'},
]

class AuthorStats {
  constructor(author, books) {
    const authorBooks = books.filter(book => book.author === author.name);
    this.booksPublished = authorBooks.length;
    this.firstBookPublished = 'hi';
    this.lastBookPublished = 'bye';
    this.currentlyReading = false;
    this.allRead = false;
    this.stillLeftToRead = 0;
  }

  getStats() {
    return {
      booksPublished: this.booksPublished,
      firstBookPublished: this.firstBookPublished,
      lastBookPublished: this.lastBookPublished,
      currentlyReading: this.currentlyReading,
      allRead: this.allRead,
      stillLeftToRead: this.stillLeftToRead,
    }
  }
}

const resolvers = {
  Query: {
    getAuthorStats: (root, args, context, info) => {
      const author = authors.find(author => author.id === args.authorId);
      if (!author) {
        return null;
      }
      return new AuthorStats(author, books).getStats();
    },
    getReadBooksOfAuthor: (root, args, context, info) => {
      const author = authors.find(author => author.id === args.authorId);
      if (!author) {
        return null;
      }

      let results = books.filter(book => book.author === author.name);
      return results;
    },
    books: (root, args, context, info) => {
      let results = books;

      if (args.author !== null) {
        results = results.filter(book => book.author.includes(args.author));
      }
      
      if (args.reading !== null) {
        results = results.filter(book => book.readingStatus.reading === args.reading);
      }
      
      if (args.reads !== null && args.reads >= 0) {
        results = results.filter(book => book.readingStatus.reads === args.reads);
      }

      return results;
    },
    authors: (root, args, context, info) => {
      let results = authors;

      if (args.author !== null) {
        results.filter(author => author.name.includes(args.author));
      }

      results = results.map(author => {
        return {
          ...author,
          stats: new AuthorStats(author, books).getStats()
        }
      })

      return results;
    }
  },
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers
})

server
  // .listen({ port: 40404 })
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })