console.log(document.body.children[0].innerText);
document.body.children[0].innerText = "Hello World";
document.body.children[1].children[0].innerText = "MODIFICADO POR JAVASCRIPT";
// console.log(document.body.innerHTML)
// console.log(document.body.innerText)


const prueba = document.body.children[1].baseURI;

document.body.children[1].children[0].innerText = prueba;

// console.log(object.style.backgroundColor);


// document.styleSheets[0].cssRules[0].style.backgroundColor = "grey"

// Cambiar el color de fondo del cuerpo del documento a gris utilizando un selector válido

//seleccionar el body y cambiar el color de fondo a gris
// document.body.style.backgroundColor = "grey";

console.log(document.styleSheets[0].cssRules[0].style.backgroundColor);

//seleccionar hoja de estilos y cambiar el color de fondo a azul
document.styleSheets[0].cssRules[0].style.backgroundColor = "lightblue";

document.styleSheets[0].cssRules[1].style.color = "yellow"

// let flag = true;

const animation = () => {

    if(document.body.style.backgroundColor === "skyblue") {
        document.body.style.backgroundColor = "tomato";
    
    } else {
        document.body.style.backgroundColor = "skyblue";
    }
}

setInterval(animation, 1000);