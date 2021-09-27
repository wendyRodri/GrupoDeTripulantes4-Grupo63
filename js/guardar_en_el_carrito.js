//Esto hace que el programa tenga localizados los botones que pueden realizar acciones
const Clickbutton = document.querySelectorAll('.add')

//Matriz que contiene la información de los objetos agregados al carrito
let carrito = []

if(localStorage.getItem("lista")){
    carrito = JSON.parse(localStorage.getItem("lista"))
}

//Esto evalúa cuando hay un click en alguno de los botones y ejecuta la función especificada
Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

//Función principal
function addToCarritoItem(e){
    const button = e.target //Esto localiza el botón que fue clickeado
    const item = button.closest('.card') //Obtiene toda la información del contenedor donde está el botón
    const itemText = item.querySelector('.description').textContent; //Obtiene la información contenida dentro del objeto con la clase "description"
    const itemPrice = item.querySelector('.card-text').textContent; // Obtiene la información contenida dentro del objeto con la clase "card-text"
    const itemImg = item.querySelector('.imagen1').src; //Obtiene la imagen del producto
    
    //Crea un nuevo item con la información del objeto clickeado
    const newItem= {
        title: itemText,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    //Función que añade el nuevo item a la matriz de carrito
    addItemCarrito(newItem)
}

//Función descrita anteriormente
function addItemCarrito(newItem){
    var v = false
    for(let i = 0; i < Object.keys(carrito).length; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            v = true
        }
    }

    if(v){
        localStorage.setItem("lista", JSON.stringify(carrito))
    }else{
        //Guarda el nuevo item en la matriz
        carrito.push(newItem)
        localStorage.setItem("lista", JSON.stringify(carrito))
    }
}


