// create function to display meal list dynamically
const mealListDisplay = (meal) => {
  const container = document.getElementById('meals-container');
  const div = document.createElement('div');
  // div section for meal card and info
  div.setAttribute('data-id', meal.idCategory);
  div.innerHTML = `
  <div class="meal-card">
  <div class="img-of-meal"><img src="${meal.strCategoryThumb}" alt="meal img"></div>
  <div class="meal-title-name">
  <div class="meal-title"><h3>${meal.strCategory}</h3></div>
  <div class="likes-display"><i class="uil uil-heart love-icon"></i><p>Likes</p></div>
  </div>
  <button type="button" class="comment-Button" id="comment-button">Comment</button></div>`;

  container.appendChild(div);
};

export default mealListDisplay;