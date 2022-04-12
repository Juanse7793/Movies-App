import getMovie from './API.js';

const display = async (id) => {
  const movie = await getMovie(id);
  const cardContainer = document.getElementById('cards');
  const card = document.createElement('div');
  card.classList.add('card-container');
  cardContainer.appendChild(card);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  card.appendChild(imageContainer);

  const image = document.createElement('img');
  image.classList.add('movie-img');
  image.src = movie.image.original;
  image.alt = movie.name;
  imageContainer.appendChild(image);

  const title = document.createElement('h2');
  title.classList.add('title');
  title.innerText = movie.name;
  card.appendChild(title);

  const commentsBtn = document.createElement('button');
  commentsBtn.classList.add('comments-btn');
  commentsBtn.innerText = 'Comments';
  card.appendChild(commentsBtn);
};

export default display;
