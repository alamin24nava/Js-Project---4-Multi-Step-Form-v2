// form wrap
const formFillUp = document.getElementById("formFillUp");
// all form step
const formOne = document.getElementById("formOne");
const formTwo = document.getElementById("formTwo");
const formThree = document.getElementById("formThree");
// count step
const stepPro = document.querySelector("#stepPro");
const stepOne = document.querySelector(".stepOne");
const stepTwo = document.querySelector(".stepTwo");
const stepThree = document.querySelector(".stepThree");
// next btns
const btnNextOne = document.querySelector(".btn-next-1");
const btnNextTwo = document.querySelector(".btn-next-2");
// prev btns
const btnPrevOne = document.querySelector(".btn-prev-1");
const btnPrevTwo = document.querySelector(".btn-prev-2");
// submit btn
const btnSubmit = document.querySelector(".btn-submit");
// thank you page
const tnxPage = document.querySelector(".thank-you");

btnNextOne.addEventListener("click", function(e) {
    e.preventDefault();
    formTwo.style.left = `12px`;
    formOne.style.left = `-380px`;
    stepOne.classList.remove("step-active");
    stepTwo.classList.add("step-active");
});
btnNextTwo.addEventListener("click", function(e) {
    e.preventDefault();
    formTwo.style.left = `-380px`;
    formThree.style.left = `12px`;
    stepTwo.classList.remove("step-active");
    stepThree.classList.add("step-active");
});

btnPrevOne.addEventListener("click", function(e) {
    e.preventDefault();
    formOne.style.left = `12px`;
    formTwo.style.left = `-380px`;
    stepTwo.classList.remove("step-active");
    stepOne.classList.add("step-active");
});
btnPrevTwo.addEventListener("click", function(e) {
    e.preventDefault();
    formThree.style.left = `-380px`;
    formTwo.style.left = `12px`;
    stepThree.classList.remove("step-active");
    stepTwo.classList.add("step-active");
});

btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    tnxPage.style.display = "block";
    formFillUp.style.display = "none";
    stepPro.style.display = "none";
});