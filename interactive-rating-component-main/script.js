const form = document.querySelector('form');
const ratingStart = document.querySelector('.rating-start');
const ratingEnd = document.querySelector('.rating-end');
const buttons = document.querySelectorAll('input');

let clickedButton;

const removeActiveClass = function () {
  buttons.forEach(button => button.classList.remove('active'));
};

buttons.forEach(button =>
  button.addEventListener('click', function (e) {
    removeActiveClass();
    button.classList.add('active');
    clickedButton = e.target;
    button.classList.add('active');
    renderRatingEnd();
  })
);
let html;
const renderRatingEnd = function () {
  html = `
  <img src="/images/illustration-thank-you.svg" alt="thank you icon">
  <p class="results">
  You selected ${clickedButton.value} out of 5
 </p> 
 <p class="bold"> Thank you! </p>
<p>
  We appreciate you taking the time to give a rating. If you ever need more support,
  don't hesitate to get in touch!
</p>`;
};
form.addEventListener('submit', function (e) {
  e.preventDefault();
  ratingStart.classList.add('hidden');
  ratingEnd.classList.remove('hidden');
  ratingEnd.insertAdjacentHTML('afterbegin', html);
});
