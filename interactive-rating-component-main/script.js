const form = document.querySelector("form");
const ratingStart = document.querySelector(".rating-start");
const ratingEnd = document.querySelector(".rating-end");
const buttons = document.querySelectorAll("input");

let clickedButton;

// remove active class if there is from other element
const removeActiveClass = () => {
  buttons.forEach((btn) => {
    if (btn.classList.contains("active")) btn.classList.remove("active");
  });
};

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    // first fix
    clickedButton = e.target.value;
    console.log(clickedButton);

    removeActiveClass();
    // second fix
    button.classList.add("active");

    renderEl();
  })
);

let html;

const renderEl = () => {
  html = `
  <img src="/images/illustration-thank-you.svg" alt="thank you icon">
  You selected ${clickedButton} out of 5
 </p> 

 <p class="bold"> Thank you! </p>
<p>
  We appreciate you taking the time to give a rating. If you ever need more support,
  don't hesitate to get in touch!
</p>`;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ratingStart.classList.add("hidden");
  ratingEnd.classList.remove("hidden");
  ratingEnd.insertAdjacentHTML("afterbegin", html);
});

// ${clickedButton.value}
// console.log(clickedButton);
// const html = `
//   <img src="/images/illustration-thank-you.svg" alt="thank you icon">
//   You selected ${clickedButton} out of 5
//  </p>

//  <p class="bold"> Thank you! </p>
// <p>
//   We appreciate you taking the time to give a rating. If you ever need more support,
//   don't hesitate to get in touch!
// </p>`;

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   ratingStart.classList.add("hidden");
//   ratingEnd.classList.remove("hidden");

//       ratingEnd.insertAdjacentHTML("afterbegin", html);
//   // ratingEnd.insertAdjacentHTML("afterbegin", html);
// });

// Array.from(buttons)
//   .map(button =>
//     button.addEventListener('click', function () {
//       button.classList.add('active');
//     })
//   )
//   .find(button => console.log(button.classList.contains('active')));
