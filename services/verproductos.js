const verProducto = (url, nombre_producto, precio) => {
    const producto = document.createElement("il")
    const detallesProducto = `
    <img class="libro_img" src=${url} alt="libro">
    <h3 class="libro_titulo">${nombre_producto}</h3>
    <p class="libro_precio">$${precio}</p>
    <a class="libro_detalle" href="#">Ver producto</a>`;
    producto.innerHTML = detallesProducto;
    return producto
}
const totalProductos = document.querySelector("[data-producto]");
const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/libro");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach(libro => {
        const visualizarProducto = verProducto(libro.url, libro.nombre_producto, libro.precio);
        totalProductos.appendChild(visualizarProducto);
    });
}

