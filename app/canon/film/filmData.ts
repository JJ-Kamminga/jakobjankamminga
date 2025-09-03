export type FilmMetadata = {
  director: string;
  genre: string[];
};

export type Film = {
  title: string;
  year: number;
  description: string;
  image: string;
  metadata: FilmMetadata;
};

export const filmData: Film[] = [
  {
    title: "They Live",
    year: 1988,
    description: "Largely forgotten among horror fans, never really reaching sci-fi fans, \
      there is brilliance in They Live, Carpenter\'s take on the Invasion of the Body Snatchers trope.\
      Its setting, a world where the powerful exploit and crack down on the powerless, feels\
      shockingly relevant today. A paper thin plot and buckets of action movie tropes then\
      quickly plunge it into camp territory, but the imagery (\"OBEY\" on billboards, \"THIS\
      IS YOUR GOD\" on dollar bills\") and the alien overlord conspiracy remain iconic and \
      relevant to this day.",
    image: "/film/they_live.jpg",
    metadata: {
      director: "John Carpenter",
      genre: ["Science Fiction", "Action"],
    }
  },
  {
    title: "American Psycho",
    year: 2000,
    description: "No film captures the existential hell of contemporary life quite like American Psycho.\
      It plays beautifully with the question who, in a society where nothing matters except status,\
      the Psycho moniker belongs to. Patrick Bateman, the most pitiful of all, lying and murdering\
      to keep up an artificial image. The likeminded yuppies he surrounds himself with, who deny\
      anything they see that doesn't fit their worldview. Or larger societal forces that encourage\
       and reward the behaviour in question?\
     ",
    image: "/film/american_psycho.jpg",
    metadata: {
      director: "Mary Harron",
      genre: ["Horror", "Drama"],
    }
  },
  {
    title: "Porco Rosso",
    year: 1992,
    description: "Description",
    image: "/film/porco_rosso.jpg",
    metadata: {
      director: "Hayao Miyazaki",
      genre: ["Animation", "Comedy", "Adventure"],
    }
  },
  {
    title: "Jurassic Park",
    year: 1993,
    description: "Description",
    image: "/film/jurassic_park.webp",
    metadata: {
      director: "Steven Spielberg",
      genre: ["Adventure", "Action"],
    }
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    description: "OK, this one is a known quantity. ",
    image: "/film/lotr_fellowship.jpg",
    metadata: {
      director: "Peter Jackson",
      genre: ["Fantasy", "Adventure"],
    }
  },
  {
    title: "Hackers",
    year: 1995,
    description: "Description",
    image: "/film/hackers.jpg",
    metadata: {
      director: "Iain Softley",
      genre: ["Crime", "Drama"],
    }
  },
];