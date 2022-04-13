import { getMovies } from './API.js';
import display from './display.js';

const createCards = async () => {
  // const movies = ['1', '6', '3', '4', '7', '8', '9', '10', '11', '15', '25', '30'];
  const movies = await getMovies();
  movies.forEach((movie) => display(movie));
  return movies.length;
};

export default createCards;