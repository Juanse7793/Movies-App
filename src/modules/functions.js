import { getMovies } from './API.js';
import display from './display.js';

const createCards = async () => {
  const movies = await getMovies();
  movies.forEach((movie) => display(movie));
  return movies.length;
};

export default createCards;