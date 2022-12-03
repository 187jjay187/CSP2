import './index.css';
import getLists from './modules/display.js';
import getMealItem from './modules/dompopupcard.js';
import { displayCommentData } from './modules/submitComment.js';
// import getLists from './modules/display.js';
import itemCounter from './modules/itemsCounter.js';
import getData from './modules/getdata.js';

// laod dom content when webpage is loaded
window.addEventListener('DOMContentLoaded', () => {
  getLists();
  const homeItemCounter = document.querySelector('.item-number');
  const getItemList = async () => {
    try {
      const mealLists = await getData();
      const counterArray = mealLists.categories;
      homeItemCounter.textContent = itemCounter(counterArray);
    } catch (error) {
      console.log(error);
    }
  };
  getItemList();
});

getMealItem();

displayCommentData();