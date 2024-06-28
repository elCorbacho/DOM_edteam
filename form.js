// const inputUsuario = document.getElementById('username');
// inputUsuario.onclick = saludar;


// function saludar() {
    
//     const arts = document.getElementById("formulario");
//     const parr = document.createElement('p');
//     parr.innerHTML = 'agregado al hacer click';

//     arts.appendChild(parr);
// }

const inputUsuario = document.getElementById('username');

// inputUsuario.addEventListener('click',function saludar() {
//     const arts = document.getElementById("formulario");
//     const parr = document.createElement('p');
//     parr.innerHTML = 'agregado al hacer click';
//     arts.appendChild(parr);
// })

// inputUsuario.addEventListener('click',function () {
//     const arts = document.getElementById("formulario");
//     const parr = document.createElement('p');
//     parr.innerHTML = 'agregado al hacer click';
//     arts.appendChild(parr);
// })

inputUsuario.addEventListener('click',function onclick() {
    const arts = document.getElementById("formulario");
    const parr = document.createElement('p');
    parr.innerHTML = 'agregado al hacer click';
    arts.appendChild(parr);
})


inputUsuario.addEventListener('mouseover',function overmouse() {
    const arts = document.getElementById("formulario");
    const parr = document.createElement('p');
    parr.innerHTML = 'agregado al mover por encima';
    arts.appendChild(parr);
    inputUsuario.removeEventListener("mouseover", overmouse)
})



// inputUsuario.addEventListener('click', saludar)

// function saludar() {
//     const arts = document.getElementById("formulario");
//     const parr = document.createElement('p');
//     parr.innerHTML = 'agregado al hacer click';

//     arts.appendChild(parr);
// }



