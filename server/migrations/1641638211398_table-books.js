/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('books', {
    id: 'id',
    title: { type: 'varchar(1000)', notNull: true },
    authorId: { 
      type: 'integer',
      notNull: true,
      references: '"authors"',
      onDelete: 'cascade',
    },
    plot: { type: 'text'},
    publishedAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })

  pgm.createIndex('books', 'authorId')
};

exports.down = pgm => {
  pgm.dropIndex('books', 'authorId')
  pgm.dropTable('books')
};
