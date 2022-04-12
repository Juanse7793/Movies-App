const getMovie = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  return data;
};

const getMovieDetails = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  return data;
};

const addItem = async (id) => {
  const like = id;
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/saJqehbJdgQUvwzYLq91/likes', {
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
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/saJqehbJdgQUvwzYLq91/likes');
  const data = await response.json();
  return data;
};

export default getMovie;
export { getMovieDetails, addItem, getItem };