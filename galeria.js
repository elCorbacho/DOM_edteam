function saludar() {
    
    const arts = document.getElementById('arts');
    const parr = document.createElement('p');
    parr.innerHTML = 'agregado al hacer click';

    arts.appendChild(parr);
}