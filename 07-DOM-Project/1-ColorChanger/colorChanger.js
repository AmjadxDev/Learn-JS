const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log("Event: ", e);
        console.log("Event Target: ", e.target);
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "blue") {
            body.style.backgroundColor= e.target.id;
        }
        else {
            body.style.background = e.target.id;
        }
    });
});