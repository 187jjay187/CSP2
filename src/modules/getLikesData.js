const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes`;

// get like data
const getLikeData = async () => {
  const response = await fetch(
    `${link}`,
  );
  return response.json();
};

// post like data
const postLikeData = async (mealId) => {
  await fetch(`${link}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getLikeData, postLikeData };