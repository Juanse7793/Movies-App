import './style.css';
import createCards from './modules/functions.js';

document.addEventListener('DOMContentLoaded', () => {
  createCards();
  const itemContainer = document.getElementById('items-container');
  const itemTitle = document.createElement('p');
  itemTitle.classList.add('item-title');
  itemTitle.innerText = `The number of movies displayed is: ${createCards()}`;
  itemContainer.appendChild(itemTitle);
});
