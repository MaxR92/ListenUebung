// Produkt - Objekte


const item1 = {
    name: "Schallplatte",
    price: 10
}

const item2 = {
    name: "TV",
    price: 210
}

const item3 = {
    name: "Radio",
    price: 12
}

const item4 = {
    name: "Tischlampe",
    price: 18
}

const item5 = {
    name: "Pfanne",
    price: 5
}

const item6 = {
    name: "Topf",
    price: 3
}

const item7 = {
    name: "Stereo",
    price: 20
}

const item8 = {
    name: "Geschenkkarte",
    price: 5
}

const Items = [item1, item2, item3, item4, item5, item6, item7, item8]

const addElementProducts = (product) => {
    document.write(
        `
        <span class='products'>
         <ul>
          <li> 
          Produkt: <b> ${product.name} </b>
          </li> 
          <li> 
          Preis: <b> ${product.price} € </b> 
          </li> 
          </ul> 
          </span>
          `)
}

Items.map(addElementProducts)
