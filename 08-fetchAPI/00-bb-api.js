// Fetch API: API JavaScript para realizar peticiones HTTP
const API = "https://fakeapi.net/products";

const calculateTotal = ( products ) => {
    let total = 0;

    for( let i = 0; i < products.length; i++ ) {
        total = total + products[i].price;
    }

    return total;
} 

const showStock = ( products ) => {
    for( let product of products  ) {
        console.log( ` - ${ product.title } valor c/u: ${ product.price}, stock: ${ product.stock }, valor total:  $${product.stock * product.price}`, );
    }
}

// Async / Await:
async function getProducts() {
    try {
        const response = await fetch( API );        // GET: Obtener los datos del Objeto Response (Respuesta)
        const data = await response.json();      // Obtener los datos y formaterarlos como unobjeto JSON
    
        // Implementacion
        showStock( data.data );

        
    } catch (error) {
        console.error( "Error al conectarse al FakeAPI" );
    }

}

getProducts();

// DOM: Document Object Model, es una interfaz de programación para documentos HTML y XML. Proporciona una representación estructurada del documento como un árbol de nodos, donde cada nodo representa un elemento, atributo o texto del documento. El DOM permite a los desarrolladores acceder y manipular el contenido, la estructura y el estilo de una página web de manera dinámica utilizando JavaScript.
// Canvas: Es un elemento HTML que se utiliza para dibujar gráficos, animaciones y otros contenidos visuales de forma dinámica mediante JavaScript. El elemento canvas proporciona un área de dibujo en la que se pueden renderizar gráficos 2D o 3D utilizando una API de dibujo específica.
// Web Storage: Es una API de JavaScript que permite a los desarrolladores almacenar datos de forma local en el navegador del usuario. Proporciona dos mecanismos principales de almacenamiento: localStorage y sessionStorage. El localStorage permite almacenar datos de forma persistente incluso después de cerrar el navegador, mientras que el sessionStorage almacena datos solo durante la sesión actual del navegador.