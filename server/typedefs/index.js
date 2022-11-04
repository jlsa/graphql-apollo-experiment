const { gql } = require('apollo-server')

const typeDefs = gql`
  type BookCover {
    type: String
    value: String
  }

  type ReadingStatus {
    read: Boolean
    reading: Boolean
    reads: Int
  }

  type Author {
    id: Int
    name: String
    stats: AuthorStats
  }

  type Book {
    title: String
    author: String
    published: String
    plot: String
    cover: BookCover
    isbn: String
    isbn13: String
    reading: Boolean
    readingStatus: ReadingStatus
  }

  type AuthorStats {
    booksPublished: Int,
    firstBookPublished: String
    lastBookPublished: String
    currentlyReading: Boolean
    allRead: Boolean
    stillLeftToRead: Int
  }

  type Query {
    getReadBooksOfAuthor(authorId: Int!): [Book!]!,
    getAuthorStats(authorId: Int!): AuthorStats,
    books(reading:Boolean, reads:Int, author: String): [Book!]!,
    authors: [Author]
  }
`

module.exports = typeDefs