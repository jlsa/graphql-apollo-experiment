const books = [
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    published: 'August 31, 2010',
    plot: `There are four whom we watch. The first is the surgeon, forced to put aside healing to become a soldier in the most brutal war of our time. The second is the assassin, a murderer who weeps as he kills. The third is the liar, a young woman who wears a scholar's mantle over the heart of a thief. The last is the highprince, a warlord whose eyes have opened to the past as his thirst for battle wanes.

    The world can change. Surgebinding and Shardwielding can return; the magics of ancient days can become ours again. These four people are key.
    
    One of them may redeem us.
    
    And one of them will destroy us.`,
    cover: {
      type: 'isbn',
      value: '9780765326355',
    },
    isbn: '',
    isbn13: '9780765326355',
    readingStatus: {
      read: false,
      reading: true,
      reads: 0,
    },
  },
  {
    title: 'The Restaurant at the End of the Universe',
    author: 'Douglas Adams',
    published: 'Januari 1, 1980',
    plot: `Following the smash-hit sci-fi comedy The Hitchhiker's Guide to the Galaxy, The Restaurant at the End of the Universe is the second part in Douglas Adams' multi-media phenomenon and cult classic series. If you've done six impossible things this morning, why not round it off with breakfast at Milliways, the Restaurant at the end of the Universe? Which is exactly what the crew of the Heart of Gold plan to do. There's just the small matter of escaping the Vogons, avoiding being taken to the most totally evil world in the Galaxy and teaching a space ship how to make a proper cup of tea. And did anyone actually make a reservation?`,
    cover: {
      type: 'isbn',
      value: '9781529034530',
    },
    isbn: '',
    isbn13: '9781529034530',
    readingStatus: {
      read: true,
      reading: false,
      reads: 1,
    },
  },
];

module.exports = books;