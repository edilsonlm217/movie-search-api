// movie.mock.ts
import { Movie } from '../types';

export const createMockMovie = (overrides?: Partial<Movie>): Movie => ({
  Title: 'Mock Movie',
  Year: '2000',
  Rated: 'PG-13',
  Released: '01 Jan 2000',
  Runtime: '120 min',
  Genre: 'Action',
  Director: 'Mock Director',
  Writer: 'Mock Writer',
  Actors: 'Mock Actor 1, Mock Actor 2',
  Plot: 'A mock plot description.',
  Language: 'English',
  Country: 'USA',
  Awards: 'Mock Awards',
  Poster: 'https://example.com/poster.jpg',
  Ratings: [
    { Source: 'IMDb', Value: '7.5/10' },
    { Source: 'Rotten Tomatoes', Value: '85%' },
  ],
  Metascore: '75',
  imdbRating: '7.5',
  imdbVotes: '50,000',
  imdbID: 'tt1234567',
  Type: 'Movie',
  DVD: '01 Feb 2000',
  BoxOffice: '$100,000,000',
  Production: 'Mock Production',
  Website: 'https://mockmovie.com',
  Response: 'True',
  ...overrides,
});
