import display from './display.js';

const createCards = () => {
  const movies = ['1', '6', '3', '4', '7', '8', '9', '10', '11', '15', '25', '30'];
  movies.forEach((id) => display(id));
};

export default createCards;