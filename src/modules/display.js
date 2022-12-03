// import relavent code
import getData from './getdata.js';
import mealListDisplay from './displaymeals.js';
import { getLikeData, postLikeData } from './getLikesData.js';
import getMealItem from './dompopupcard.js';

// create a display container by ID
const container = document.getElementById('meals-container');
// function to display the likes
const setHeartLikes = (heart, likes) => {
  const id = heart.closest('article').getAttribute('data-id');
  const item = likes.find((item) => item.item_id === id);
  heart.textContent = item.likes;
};

// click like function
const clickLikeHeart = (heart) => {
  const id = heart.closest('article').getAttribute('data-id');
  heart.addEventListener('click', async () => {
    await postLikeData(id);
    const likes = await getLikeData();
    const hearts = container.querySelectorAll('.likes-section');
    hearts.forEach((heart) => {
      setHeartLikes(heart, likes);
    });
  });
};

// get meal and like data
const getLists = async () => {
  const listMealMenus = await getData();
  const likes = await getLikeData();

  listMealMenus.categories.forEach((meal) => {
    mealListDisplay(meal);
  });

  // create like icon in container
  const hearts = container.querySelectorAll('.likes-section');
  const loveIcon = container.querySelectorAll('.love-icon');

  hearts.forEach((heart) => {
    setHeartLikes(heart, likes);
  });

  loveIcon.forEach((heart) => {
    clickLikeHeart(heart);
  });

  // create comment button function
  const comment = document.querySelectorAll('.comment-Button');
  let itemIdCategory;
  if (comment !== null) {
    comment.forEach((buttonClick) => {
      buttonClick.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('.cardBg').style.display === '') {
          document.querySelector('.cardBg').style.display = 'flex';
        }
        itemIdCategory = e.currentTarget.closest('article').getAttribute('data-id');
        getMealItem(itemIdCategory);
      });
    });
  }
};

export default getLists;
