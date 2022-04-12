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

export default getMovie;
export { getMovieDetails };