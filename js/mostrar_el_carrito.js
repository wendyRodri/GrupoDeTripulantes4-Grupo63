const tbody = document.querySelector(".tbody")

let carrito = []

carrito = JSON.parse(localStorage.getItem("lista"))

localStorage.removeItem("lista");

for(i = 0; i < Object.keys(carrito).length; i++ ){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    <th scope="row">1</th>
    <td class="table__productos">
      <img src=${item.img} alt="">
      <h6 class="title">${item.title}</6>
    </td>
    <td class="table__price"><p>${item.precio}</p></td>
    <td class="table__cantidad">
      <input type="number" min="1" value=${item.cantidad}>
      <button class="delete btn btn-danger">X</button>
    </td>
    `
    tr.innerHTML = Content;
    tbody.append(tr)
  })

}