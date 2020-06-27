

//! let tabla = document.querySelectorAll("a");

//! tabla.forEach(function(tabla) {
//!     console.log(tabla);
// !});



//? let celdas = document.querySelectorAll("td");

//? celdas.forEach(function(td) {
// ?    td.addEventListener('click' , function () {
// ?        console.log(this);
// ?    })
//? });


let links = document.querySelectorAll(".close");



links.forEach(function(link) {
    link.addEventListener('click', function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove("backInDown");
        content.classList.remove("animate__backInDown");

        content.classList.add("backOutUp");
        content.classList.add("animate__backOutUp");

        setTimeout(function () {
            location.href = "http://localhost/practica-bulma/";
        }, 600);

        

        return false;

    });
});

