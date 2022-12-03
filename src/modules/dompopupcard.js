// import relavent code
import getData from './getdata.js';
import { displayCommentData, leaveCommentInput } from './submitComment.js';

// create function for pop up card
const popUpCardSection = document.querySelector('.cardBg');
const popUpCard = document.createElement('div');

// create function for to display comments in pop up card
const devComment = (comments) => {
  const commentSection = document.querySelector('.comment');

  // function to display comment info on the pop up card
  for (let i = 0; i < comments.length; i += 1) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-el';

    const dateOfComment = document.createElement('p');
    dateOfComment.className = 'dateOfComment';
    dateOfComment.textContent = comments[i].creation_date;

    const nameOfCommenter = document.createElement('p');
    nameOfCommenter.className = 'nameOfCommenter';
    nameOfCommenter.textContent = `${comments[i].username}:`;

    const loremComment = document.createElement('p');
    loremComment.className = 'loremComment';
    loremComment.textContent = comments[i].comment;

    commentDiv.appendChild(dateOfComment);
    commentDiv.appendChild(nameOfCommenter);
    commentDiv.appendChild(loremComment);
    commentSection.appendChild(commentDiv);
  }
};

// create funtion for number of comments shown
const commentNumbers = (comments) => (comments.length ? comments.length : 0);

// display selected meal pop up card info
const displayMealItems = (mealItemSelected, comments) => {
  popUpCard.className = 'popUpCard';
  popUpCard.innerHTML = `
  <button class="closeButton">X</button>
  <img class="cardImg" src="${mealItemSelected.strCategoryThumb}" alt="mealImage">
  <h2 class="cardTitle">${mealItemSelected.strCategory}</h2>
  <p class="cardDiscription">${mealItemSelected.strCategoryDescription}</p>
  <h3 class="numberComments">Comments<span id="numberComments" class="commentNumbers">(${commentNumbers(comments)})</span></h3>
  <div class="comment">     
  </div>
  <h3 class="leaveComment">Leave A Comment</h3>
  <!-- form section starts here -->
<form id="cmtInput" class="cmtInput" action="#" method="post">
<input type="text" name="username" placeholder="Your Name" required>
<textarea type="text" name="comment" placeholder="Add Comment..." required></textarea>
<button class="commentButton" type="submit">Post Comment</button>
</form> 
  <!-- form section ends here -->
  <!-- successmessage section starts here -->
      <span id="successMessage" class="message"></span>`;

  popUpCardSection.appendChild(popUpCard);
  devComment(comments);
};

// get seleted meal from api IdCategory
const getMealItem = async (itemIdCategory) => {
  const mealItems = await getData();
  if (itemIdCategory !== undefined) {
    const commentSec = await displayCommentData(itemIdCategory);
    // eslint-disable-next-line max-len
    const mealItemSelected = mealItems.categories.find((meal) => meal.idCategory === itemIdCategory);
    displayMealItems(mealItemSelected, commentSec);
  }

  // remove comments
  const removeAllComments = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  // reset comment input field
  const resetCmt = async (allComments) => {
    document.getElementById('numberComments').innerHTML = `(${commentNumbers(allComments)})`;
    removeAllComments(document.querySelector('.comment'));
    devComment(allComments);
  };

  // white space should not be empty
  const whiteSecSpc = (x) => {
    const spc = new RegExp(/^\s$/);
    return spc.test(x.charAt(0));
  };

  // create function to register comments on the api
  const leaveCommentRegistered = async (itemIdCategory) => {
    if (document.getElementById('cmtInput') !== null) {
      document.getElementById('cmtInput').addEventListener('submit', async (e) => {
        e.preventDefault();
        const commenterInputName = document.getElementById('cmtInput').elements.username;
        const inputCmt = document.getElementById('cmtInput').elements.comment;

        // display error message when input field contains white spaces
        document.querySelector('.message').innerHTML = ' Remove empty spaces Please. ';
        document.querySelector('.message').style.color = 'Red';

        if (!whiteSecSpc(commenterInputName.value) && !whiteSecSpc(inputCmt.value)) {
          document.querySelector('.message').innerHTML = ' Comment Posted ';
          const renderComment = {
            item_id: itemIdCategory,
            username: commenterInputName.value.trim(),
            comment: inputCmt.value.trim(),
          };

          // display all comments that have been previously sent to the api
          const allComments = await leaveCommentInput(renderComment);
          // reset the form
          document.getElementById('cmtInput').reset();
          resetCmt(allComments);
        }
        setTimeout(() => {
          document.getElementById('successMessage').innerHTML = '';
        }, 3000);
      });
    }
  };

  // register a comment on the api
  leaveCommentRegistered(itemIdCategory);

  // create close button for pop up card
  if (document.querySelector('.closeButton') !== null) {
    document.querySelector('.closeButton').addEventListener('click', (e) => {
      e.preventDefault();
      if (popUpCardSection.style.display === 'flex') {
        popUpCardSection.style.display = '';
      }
    });
  }
};

// export relevant code
export default getMealItem;
export { commentNumbers };