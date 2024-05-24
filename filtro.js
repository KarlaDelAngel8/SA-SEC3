// Tenemos un li de productconst productos = [
  const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
  ];
  
  const li = document.getElementById("lista-de-productos");
  const $i = document.querySelector('.input');
  
  function mostrarProductos(productos) {
    productos.forEach(producto => {
      const d = document.createElement("div");
      d.classList.add("producto");
  
      const ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = producto.nombre;
  
      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);
  
      d.appendChild(ti);
      d.appendChild(imagen);
  
      li.appendChild(d);
    });
  }
  
  mostrarProductos(productos);
  
  const botonDeFiltro = document.querySelector("button");
  
  botonDeFiltro.onclick = function () {
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
  
    const texto = $i.value ? $i.value.trim().toLowerCase() : '';
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto);
  
    mostrarProductos(productosFiltrados);
  };
  
  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  };