import getMovie, { getMovieDetails } from './API.js';

const showMovieDetails = (id) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('popup-wrapper');
  wrapper.id = 'popup';

  const popup = document.createElement('div');
  popup.classList.add('popup');

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '<i class="fa fa-close"></i>';
  closeBtn.onclick = () => {
    const popupShowing = document.getElementById('popup');
    document.body.removeChild(popupShowing);
  };
  popup.appendChild(closeBtn);

  const loadingdiv = document.createElement('div');
  loadingdiv.innerText = 'loading';
  popup.appendChild(loadingdiv);
  getMovieDetails(id).then(
    (movie) => {
      loadingdiv.innerText = '';
      const movieImage = document.createElement('img');
      movieImage.alt = movie.name;
      movieImage.src = movie.image.original;
      popup.appendChild(movieImage);

      const title = document.createElement('h4');
      title.innerText = movie.name;
      popup.appendChild(title);

      const desc = document.createElement('div');
      desc.innerHTML = movie.summary;
      popup.appendChild(desc);

      const detailsDiv = document.createElement('div');
      detailsDiv.classList.add('details');

      const listOne = document.createElement('ul');
      listOne.classList.add('list-items');
      listOne.innerHTML = `<li>Language: ${movie.language}</li> <li>runtime: ${movie.averageRuntime} minutes</li>`;
      detailsDiv.appendChild(listOne);

      const listTwo = document.createElement('ul');
      listTwo.classList.add('list-items');
      listTwo.innerHTML = `<li>Rating: ${movie.rating.average}/10</li> <li>premiered: ${movie.premiered}</li>`;
      detailsDiv.appendChild(listTwo);

      popup.appendChild(detailsDiv);
      wrapper.appendChild(popup);
      document.body.insertAdjacentElement('afterbegin', wrapper);
    },
  );
};

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
  commentsBtn.onclick = (event) => { event.preventDefault(); showMovieDetails(id); };
  card.appendChild(commentsBtn);
};

export default display;
