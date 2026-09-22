// Mobile Menu

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    nav.classList.toggle("active");

}


// Close menu after clicking a link

document.querySelectorAll(".navbar nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".navbar nav")
            .classList.remove("active");

    });

});


// Current Year

document.getElementById("year").textContent =
    new Date().getFullYear();
