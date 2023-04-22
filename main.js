// dom vars
let pharseContainer = document.querySelector(".congPharse-container");
let closeButton = document.querySelector("#close");
let button = document.querySelector("#click");
let pharse = document.querySelector("#pharse");

// dom functions
button.addEventListener("click", function() {
    pharseContainer.classList.toggle("open");
    closeButton.classList.toggle("open");
    pharse.classList.toggle("open");
});

closeButton.addEventListener("click", function() {
    pharseContainer.classList.remove("open");
    closeButton.classList.remove("open");
})

