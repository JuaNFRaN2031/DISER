window.addEventListener('load', function () {
    // alert("Bienvenidos a la página de Diser donde encontraras la sección de suscripción y noticias.");

    let imagen = Array.from(document.getElementsByClassName("img-divFlexProyectos"));
    let img1 = imagen[0];
    img1.addEventListener('mouseover', function () {
        img1.style.width = '120%';
    });
    img1.addEventListener('mouseout', function () {
        img1.style.width = '100%';
    });
    let img2 = imagen[1];
    img2.addEventListener('mouseover', function () {
        img2.style.width = '120%';
    });
    img2.addEventListener('mouseout', function () {
        img2.style.width = '100%';
    });
    let img3 = imagen[2];
    img3.addEventListener('mouseover', function () {
        img3.style.width = '120%';
    });
    img3.addEventListener('mouseout', function () {
        img3.style.width = '100%';
    });
});

window.addEventListener('load', function () {
    var fechaActual = new Date();
    this.document.querySelector("#fecha").innerHTML = fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + fechaActual.getFullYear();

    var horaActual = new Date();
    this.document.querySelector("#hora").innerHTML = horaActual.getHours() + ":" + horaActual.getMinutes() + ":" + horaActual.getSeconds();
});

window.addEventListener('click', function () {
    let nombre = this.document.getElementById('name').value;
    if (nombre == "") {
        this.document.getElementById('fallo').innerHTML = "Rellena el nombre";
        // alert("Rellena el nombre");
    }
});
