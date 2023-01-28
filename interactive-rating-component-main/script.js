const form = document.querySelector('form');
const ratingStart = document.querySelector('.rating-start');
const ratingEnd = document.querySelector('.rating-end');
const buttons = document.querySelectorAll('input');

let clickedButton;

buttons.forEach(button =>
  button.addEventListener('click', function (e) {
    clickedButton = e.target;
    clickedButton.classList.add('active');
  })
);
// ${clickedButton.value}
console.log(clickedButton);
const html = `
  <img src="/images/illustration-thank-you.svg" alt="thank you icon">
  You selected ${clickedButton} out of 5
 </p> 

 <p class="bold"> Thank you! </p>
<p>
  We appreciate you taking the time to give a rating. If you ever need more support,
  don't hesitate to get in touch!
</p>`;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  ratingStart.classList.add('hidden');
  ratingEnd.classList.remove('hidden');
  ratingEnd.insertAdjacentHTML('afterbegin', html);
});

// Array.from(buttons)
//   .map(button =>
//     button.addEventListener('click', function () {
//       button.classList.add('active');
//     })
//   )
//   .find(button => console.log(button.classList.contains('active')));
