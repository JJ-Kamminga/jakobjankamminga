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
    description: "Description",
    image: "/film/they_live.jpg",
    metadata: {
      director: "John Carpenter",
      genre: ["Science Fiction"],
    }
  },
  {
    title: "American Psycho",
    year: 2000,
    description: "Description",
    image: "/film/american_psycho.jpg",
    metadata: {
      director: "Mary Harron",
      genre: ["Horror", "Drama"],
    }
  },
  // {
  //   title: "The Matrix",
  //   year: 1999,
  //   description: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
  //   image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
  //   metadata: {
  //     director: "The Wachowskis",
  //     genre: "Action",
  //     rating: "R",
  //     runtime: "136 min"
  //   }
  // },
  // {
  //   title: "Blade Runner 2049",
  //   year: 2017,
  //   description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
  //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
  //   metadata: {
  //     director: "Denis Villeneuve",
  //     genre: "Sci-Fi",
  //     rating: "R",
  //     runtime: "164 min"
  //   }
  // },
  // {
  //   title: "Interstellar",
  //   year: 2014,
  //   description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  //   image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
  //   metadata: {
  //     director: "Christopher Nolan",
  //     genre: "Sci-Fi",
  //     rating: "PG-13",
  //     runtime: "169 min"
  //   }
  // },
  // {
  //   title: "Ex Machina",
  //   year: 2014,
  //   description: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
  //   image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
  //   metadata: {
  //     director: "Alex Garland",
  //     genre: "Sci-Fi",
  //     rating: "R",
  //     runtime: "108 min"
  //   }
  // }
];