// dom vars
let pharseContainer = document.querySelector(".congPharse-container");
let closeButton = document.querySelector("#close");
let button = document.querySelector("#click");
let pharse = document.querySelector("#pharse");

// dom functions
button.addEventListener("click", function() {
    pharseContainer.classList.add("open");
    closeButton.classList.add("open");
    pharse.classList.add("open");
});

closeButton.addEventListener("click", function() {
    pharseContainer.classList.remove("open");
    closeButton.classList.remove("open");
})

let random = Math.floor(Math.random() * 100);
console.log(random);

let congrats = ["", "", "",
                "", "", "",
                "", "", ""]
