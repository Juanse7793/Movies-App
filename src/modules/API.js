const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'saJqehbJdgQUvwzYLq91';
const getMovie = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  return data;
};
const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
};

const getMovieDetails = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  return data;
};

const getMovieComments = async (id) => {
  const response = await fetch(`${baseUrl}/${appId}/comments?item_id=${id}`);
  const data = await response.json();
  return data;
};
const getMovieCommentCounter = (comments) => comments.length;

const addMovieComment = async (comment) => {
  const response = await fetch(`${baseUrl}/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  return response;
};
const addItem = async (id) => {
  const like = id;
  const response = await fetch(`${baseUrl}/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: like,
    }),
  });

  const data = response.json();
  return data;
};

const getItem = async () => {
  const response = await fetch(`${baseUrl}/${appId}/likes`);
  const data = await response.json();
  return data;
};

export default getMovie;
export {
  getMovieDetails,
  getMovieComments,
  addMovieComment,
  addItem,
  getItem,
  getMovies,
  getMovieCommentCounter,
};
