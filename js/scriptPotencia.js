function ShowSelected() {
    let opcion = document.getElementById("opcion").value;
    switch (opcion) {
        case "nevera":
            document.getElementById("resultado").innerHTML = "Potencia de la nevera es entre 0,250 - 0,350 KW";
            break;

        case "vitro":
            document.getElementById("resultado").innerHTML = "Potencia de la vitro es entre 0,900 - 2,000 KW";
            break;
        case "microondas":
            document.getElementById("resultado").innerHTML = "Potencia del microondas es entre 0,900 - 1,500 KW";
            break;
        case "horno":
            document.getElementById("resultado").innerHTML = "Potencia del horno es entre 1,200 - 2,200 KW";
            break;
        case "lavavajillas":
            document.getElementById("resultado").innerHTML = "Potencia del lavavajillas es entre 1,500 - 2,200 KW";
            break;
        case "lavadora":
            document.getElementById("resultado").innerHTML = "Potencia de la lavadora es entre 1,500 - 2,200 KW";
            break;
        case "television":
            document.getElementById("resultado").innerHTML = "Potencia de la televisión es entre 1,500 - 2,200 KW";
            break;
        case "aire acondicionado":
            document.getElementById("resultado").innerHTML = "Potencia del aire acondicionado es entre 0,900 - 2,000 KW";
            break;
        case "calefaccion":
            document.getElementById("resultado").innerHTML = "Potencia de la calefacción es entre 1,000 - 2,500 KW";
            break;
        default:
            document.getElementById("resultado").innerHTML = "Seleccione una opción";
            break;
    }
}