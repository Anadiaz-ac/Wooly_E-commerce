const barra=document.getElementById('barra');
const nav=document.getElementById('listnav');
const close=document.getElementById('X');


if(barra)
{
    barra.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close)
{
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    }) 
}




document.addEventListener('DOMContentLoaded', () => {

    const baseDeDatos = [
        {
            id: 1,
            imagen: '/img/products/Elefante.png',
            tamaño: '30 cm',
            nombre: 'Elefante Teo',
            precio: 90000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 2,
            imagen: '/img/products/lobo.png',
            tamaño: '20 cm',
            nombre: 'Lobo Boris',
            precio: 57000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 3,
            imagen: '/img/products/jirafa.png',
            tamaño: '20 cm',
            nombre: 'Jirafa Leo',
            precio: 55000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 4,
            imagen: '/img/products/vaca.png',
            tamaño: '15 cm',
            nombre: 'vaca Lola',
            precio: 38000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 5,
            imagen: '/img/products/principito.png',
            tamaño: '20 cm',
            nombre: 'El principito',
            precio: 67000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 6,
            imagen: '/img/products/annie.png',
            tamaño: '20 cm',
            nombre: 'Annie',
            precio: 55000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 7,
            imagen: '/img/products/merida.png',
            tamaño: '20 cm',
            nombre: 'Mérida',
            precio: 56000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 8,
            imagen: '/img/products/gato.png',
            tamaño: '16 cm',
            nombre: 'Sr. Gato',
            precio: 40000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 9,
            imagen: '/img/products/conejo.png',
            nombre: 'Conejo Roger',
            tamaño: '20 cm',
            precio: 28000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 10,
            imagen: '/img/products/girasol.png',
            tamaño: '25 cm',
            nombre: 'Girasol',
            precio: 22000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 11,
            imagen: '/img/products/itachi.png',
            tamaño: '12 cm',
            nombre: 'Itachi',
            precio: 29000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        },
        {
            id: 12,
            imagen: '/img/products/reno.png',
            tamaño: '13 cm',
            nombre: 'Rodolfo el reno',
            precio: 25000,
            descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore laboriosam perspiciatis cumque accusantium deserunt enim libero suscipit temporibus repellat, totam explicabo, nisi eos quisquam accusamus similique hic ullam sequi facere?'

        }

    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            //tamaño
            const miNodoTamaño = document.createElement('h3');
            miNodoTamaño.classList.add('tamaño');
            miNodoTamaño.textContent = info.tamaño;
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${divisa} ${info.precio}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Añadir';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTamaño);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'))
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});


function comprar()
{
        alert('productos comprados');
}