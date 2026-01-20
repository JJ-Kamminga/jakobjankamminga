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
    description: "Though largely forgotten among horror fans, perhaps \"too easy\" for sci-fi fans, \
      there is brilliance in They Live, Carpenter\'s take on the Invasion of the Body Snatchers trope.\
      Though set in the late eighties, the backdrop is an unexpectedly real and current America,\
      where the powerful exploit and crack down on the powerless.\
      A paper thin plot and buckets of action movie tropes then\
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
    title: "Hackers",
    year: 1995,
    description: "Among the top google suggestions for Hackers is the question: is Hackers a queer movie? \
      ... Yes. First of all, it's short haired Angelina Jolie. Second, the plot is \
      driven by her bet to get Zero Cool guy into spandex lingerie. Third, every bizarre outfit, character background \
      soundtrack and visual is driven by pure commitment to the bit. One could call it a cheese fest, but that sells \
      Hackers painfully short. Surprised how none of the hacking lingo makes sense? Well, would you have your villain \
      enter on a skateboard lifting on a car? It's all intentional, and that is what lifts Hackers above its supposed genre.\
      ",
    image: "/film/hackers.jpg",
    metadata: {
      director: "Iain Softley",
      genre: ["Crime", "Drama"],
    }
  },
  {
    title: "American Psycho",
    year: 2000,
    description: "No film captures the existential hell of contemporary life quite like American Psycho.\
      A shocking window into a society where the status game is even more disgusting than the violence, \
      and the violence is tame compared to the yuppy exorbitance. Like Patrick Bateman looking lustfully \
      at himself while having sex with two women. \
      Brilliantly, the film doesn't answer the question whether the murdering was all Patrick's perverted fantasy, and he \
      really was just jerking off at work, or whether they were real, and it were his surroundings denying the truth \
      and rewarding his behaviour - and which would be worse.\
     ",
    image: "/film/american_psycho.jpg",
    metadata: {
      director: "Mary Harron",
      genre: ["Horror", "Drama"],
    }
  },
  {
    title: "The Haunting",
    year: 1963,
    description: "\
       This adaptation of the 1958 Shirley Jackson novel was ahead of its\
       time on more than one front. \
       Coming at \"classic\" (pre-1980) horror films with a modern view, I found it\
       among the most tense and frightening ones. And that while there are no\
       actual supernatural beings, let alone gore on display.\
       Its choices and use of music and more importantly, silence work wonders. \
       Its cinematography is excellent. But most importantly, the interaction\
       between characters is realistic and deep. Each character is notable, in \
       particular Theodora, an unusually un-stereotypical lesbian, not a mistress of evil, \
       but a regular person, and spared the tragic plot that modern cinema \
       typically reserves for that archetype.\
    ",
    image: "/film/the_haunting.jpg",
    metadata: {
      director: "Robert Wise",
      genre: ["Psychological", "Horror"],
    }
  },
  // {
  //   title: "Porco Rosso",
  //   year: 1992,
  //   description: "Description",
  //   image: "/film/porco_rosso.jpg",
  //   metadata: {
  //     director: "Hayao Miyazaki",
  //     genre: ["Animation", "Comedy", "Adventure"],
  //   }
  // },
  // {
  //   title: "Jurassic Park",
  //   year: 1993,
  //   description: "Description",
  //   image: "/film/jurassic_park.webp",
  //   metadata: {
  //     director: "Steven Spielberg",
  //     genre: ["Adventure", "Action"],
  //   }
  // },
  // {
  //   title: "The Lord of the Rings: The Fellowship of the Ring",
  //   year: 2001,
  //   description: "OK, this one is a known quantity. ",
  //   image: "/film/lotr_fellowship.jpg",
  //   metadata: {
  //     director: "Peter Jackson",
  //     genre: ["Fantasy", "Adventure"],
  //   }
  // },
];
