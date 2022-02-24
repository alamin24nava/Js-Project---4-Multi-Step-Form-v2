// form wrap
const formSteps = Array.from(
    document.querySelectorAll("#formFillUp .form-step")
);
// all form step
const formFillUp = document.getElementById("formFillUp");
// // count step
// const stepPro = document.querySelectorAll("#stepPro");
const stepPro = Array.from(document.querySelectorAll(".stepPro .pro-step"));
const hideStepPro = document.querySelector(".stepPro");
// next btns
const btnNext = document.querySelectorAll(".btn-next");
// prev btns
const btnPrev = document.querySelectorAll(".btn-prev");
// submit btn
const btnSubmit = document.querySelector(".btn-submit");
// thank you page
const tnxPage = document.querySelector(".thank-you");

btnNext.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("next");
        prochangeStep("pro-next");
    });
});
btnPrev.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("prev");
        prochangeStep("pro-prev");
    });
});

formFillUp.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = [];

    formFillUp.querySelectorAll("input").forEach((input) => {
        const { name, value } = input;
        inputs.push({ name, value });
    });

    formFillUp.style.display = "none";
    hideStepPro.style.display = "none";
    tnxPage.style.display = "block";

    console.log(inputs);
    formFillUp.reset();
});

let changeStep = function(btn) {
    let index = 0;
    let active = document.querySelector("#formFillUp .form-step.active");
    index = formSteps.indexOf(active);

    formSteps[index].classList.remove("active");
    if (btn === "next") {
        index++;
    } else if (btn === "prev") {
        index--;
    }
    formSteps[index].classList.add("active");
};

let prochangeStep = function(pro) {
    let index = 0;
    let active = document.querySelector(".stepPro .pro-step.step-active");

    index = stepPro.indexOf(active);

    stepPro[index].classList.remove("step-active");
    if (pro === "pro-next") {
        index++;
    } else if (pro === "pro-prev") {
        index--;
    }
    stepPro[index].classList.add("step-active");
};