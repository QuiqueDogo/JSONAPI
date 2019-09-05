const cargarPost = document.querySelector('#cargar');

cargarPost.addEventListener('click', cargarApi)

function cargarApi(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => imprimirDatos(data));

}

function imprimirDatos(data){
    //console.log(data);
    let contenido = '';
    data.forEach(elemento => {
        contenido += `
            <h3>${elemento.title}</h3>
            <p>${elemento.body}</p>
        `;
    });
    document.getElementById('listado').innerHTML = contenido
}