console.log("funciona?")

let h1 = document.querySelector('h1');
let body = document.querySelector('body');

let response = confirm('¿Desea modo oscuro?');
if (response){    
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add('fondoMoviesList');   
}


h1.style.color = 'teal';
body.classList.add('fondoMoviesList')