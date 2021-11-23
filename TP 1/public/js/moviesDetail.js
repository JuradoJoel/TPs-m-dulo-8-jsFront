console.log('linkeado')

let p = document.querySelectorAll('p');
let h1 = document.querySelector('h1');

h1.style.color = 'teal';

p.forEach((parrafo,index) => {
    index % 2 == 0 ? parrafo.classList.add('destacadoPar') : parrafo.classList.add('destacadoImpar')
})