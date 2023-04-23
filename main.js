// vars
let congrats = ["كل عام وأنتم بخير", "من العايدين السعيدين", "كل سنة وأنت طيب",
                "أشرف الأعياد", "من السالمين والغانمين", "من العايدين والفايزين",
                "عيدكم مبارك", "عيد سعيد", "أطيب التهاني والتحايا",
                "كل عام وأنتم أقرب إلى الجنة وأبعد عن النار", "أعاده الله علينا وعليكم بالخير", "تقبل الله منا ومنكم صالح الأعمال"];

let random = Math.floor(Math.random() * congrats.length);


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

    pharse.innerHTML = `<p>${congrats[random]}</p>`;

});

closeButton.addEventListener("click", function() {
    pharseContainer.classList.remove("open");
    closeButton.classList.remove("open");
    location.reload();
})






