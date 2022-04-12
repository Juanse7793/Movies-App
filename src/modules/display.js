import getMovie, { getMovieComments, getMovieDetails, addMovieComment } from './API.js';

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

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  const contentSide = document.createElement('div');
  contentSide.classList.add('content-side');

  const form = document.createElement('form');
  form.classList.add('add-comment');

  const headingText = document.createElement('h4');
  headingText.innerText = 'Add a comment';
  form.appendChild(headingText);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your name';
  nameInput.name = 'name';
  nameInput.minLength = 2;
  nameInput.required = true;
  form.appendChild(nameInput);

  const commentInput = document.createElement('textarea');
  commentInput.placeholder = 'Your insights';
  commentInput.cols = 40;
  commentInput.rows = 6;
  commentInput.name = 'comment';
  commentInput.minLength = '2';
  commentInput.required = true;
  form.appendChild(commentInput);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.classList.add('add-comment');
  submitBtn.innerText = 'comment';
  form.appendChild(submitBtn);

  form.onsubmit = (event) => {
    event.preventDefault();
    submitBtn.innerHTML = '<i class="fa fa-spinner"></i> Loading...';
    addMovieComment({ item_id: id, username: nameInput.value, comment: commentInput.value }).then(
      () => {
        const popupShowing = document.getElementById('popup');
        document.body.removeChild(popupShowing);
        submitBtn.innerText = 'comment';
        form.reset();
      },
      () => {
        submitBtn.innerText = 'comment';
      },
    );
  };

  getMovieDetails(id).then(
    (movie) => {
      const contentWrapper = document.createElement('div');
      contentWrapper.classList.add('content-wrapper');

      const movieImage = document.createElement('img');
      movieImage.alt = movie.name;
      movieImage.src = movie.image.original;
      contentWrapper.appendChild(movieImage);

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');

      const title = document.createElement('h4');
      title.innerText = movie.name;
      contentDiv.appendChild(title);

      const desc = document.createElement('div');
      desc.innerHTML = movie.summary;
      contentDiv.appendChild(desc);

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

      contentDiv.appendChild(detailsDiv);
      contentWrapper.appendChild(contentDiv);
      contentSide.appendChild(contentWrapper);
      contentContainer.appendChild(contentSide);
      contentContainer.appendChild(form);
      popup.appendChild(contentContainer);
      wrapper.appendChild(popup);
      document.body.insertAdjacentElement('afterbegin', wrapper);

      const commentsDiv = document.createElement('div');
      commentsDiv.innerText = 'Loading...';
      commentsDiv.classList.add('comments');
      getMovieComments(id).then((response) => {
        if (response.error) {
          commentsDiv.innerHTML = '  <h4>Comments (0)</h4> <p> There are no comments yet.</p>';
        } else {
          commentsDiv.innerHTML = `<h4>Comments (${response.length})</h4>`;

          const commentsList = document.createElement('ul');
          commentsList.classList.add('comments-list');
          response.forEach((comment) => {
            commentsList.innerHTML += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
          });

          commentsDiv.appendChild(commentsList);
        }
      }, () => {
        commentsDiv.innerHTML = '<p> There are no comments yet.</p>';
      });
      contentSide.appendChild(commentsDiv);
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
