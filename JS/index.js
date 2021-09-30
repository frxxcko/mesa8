const contenedor = document.querySelector('.contenedor');
const btnNacionales = document.querySelector('#btnNacionales')
const btnInternacionales = document.querySelector('#btnInternacionales')
const listaNoticias = document.querySelectorAll('.noticia')

window.addEventListener('load', renderizarNoticias);

btnNacionales.addEventListener('click', () => {
    const noticiasDelDOM = document.querySelectorAll('.noticia');
    noticiasDelDOM.forEach(noticia => {
        if (noticia.querySelector('label').innerText === 'Nacional') {
            noticia.classList.toggle('noticiaNacional')
            setTimeout(() => noticia.classList.toggle('noticiaNacional'), 3000)
        }
    })
})


function renderizarNoticias() {
    noticias.forEach(noticia => {
        contenedor.innerHTML += `<div class="noticia">
        <h2>${noticia.titulo}</h2>
        <label hidden>${noticia.tipoNacional ? 'Nacional' : 'Internacional'}</label>
        <img src=${noticia.imgUrl}>
        <label >${noticia.fecha}</label>
        <p>${noticia.descripcion}</p>
        </div>`;
    })
}
