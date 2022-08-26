// Kunden - Objekte 


const Kunde1 = {
    name: "Terry",
    date: "19.10.2021",
    item: [item1, item1, item1],
    paymentMethod: "CreditCard",
    rating: 4,
}

const Kunde2 = {
    name: "Sarah",
    date: "01.04.2020",
    item: [item2],
    paymentMethod: "bar",
    rating: undefined,
}

const Kunde3 = {
    name: "Dorry",
    date: "20.03.2019",
    item: [item3, item4],
    paymentMethod: "PayPal",
    rating: 5,
}

const Kunde4 = {
    name: "Tobias",
    date: "02.10.2021",
    item: [item5, item6, item6],
    paymentMethod: "CreditCard",
    rating: undefined,
}

const Kunde5 = {
    name: "Ana",
    date: "25.07.2018",
    item: [item7],
    paymentMethod: "CreditCard",
    rating: 2,
}

const Kunde6 = {
    name: "Leo",
    date: "07.06.2019",
    item: [item1],
    paymentMethod: "PayPal",
    rating: 5,
}

const Kunde7 = {
    name: "Diana",
    date: "15.12.2021",
    item: [item8],
    paymentMethod: "bar",
    rating: undefined,
}

const Kunden =  [Kunde1, Kunde2, Kunde3, Kunde4, Kunde5, Kunde6, Kunde7]




const addElementCustomers = (customer) => {
    document.write(`<span class='customers'> <b> ${customer.name} </b>  hat am  <b> ${customer.date} </b>  folgende Artikel bestellt: <b> ${customer.item.map((x)=> x.name)} </b>  <br> Der Kunde hat mit <b> ${customer.paymentMethod} </b> gezahlt und hat uns ein <b> ${customer.rating}  Sterne </b> Rating gegeben.  <br>  </span>`)
}

Kunden.map(addElementCustomers)