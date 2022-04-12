const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

const generateKey = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

const newKey = () => {
  window.addEventListener('load', async () => {
    const result = await generateKey();
    return (result);
  });
};

export default newKey;