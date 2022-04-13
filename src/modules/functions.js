import display from './display.js';

const createCards = () => {
  const movies = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  movies.forEach((id) => display(id));
};

export default createCards;