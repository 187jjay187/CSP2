// set api link to display comment data and send comment inputs to the api
const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments`;
const getLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/comments?item_id=`;

// create function to display comment data
const displayCommentData = async (id) => {
  const getLinkWithID = getLink + id;
  if (id !== undefined) {
    const response = await fetch(
      `${getLinkWithID}`,
    );
    if (response.status === 200) {
      return response.json();
    }
    return null;
  }
  return null;
};

// create function to send comment input to the api
const leaveCommentInput = async (renderComment) => {
  try {
    const response = await fetch(link, {
      method: 'POST',
      body: JSON.stringify(renderComment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      const allComments = await displayCommentData(renderComment.item_id);
      if (allComments !== null) {
        return allComments;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
  return null;
};

// export the relevant files
export { leaveCommentInput, displayCommentData };