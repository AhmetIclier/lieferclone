"use strict";

let dishes = [
    {
        type: "Pizza",
        name: "Pizza Margharita",
        ingredients: "Tomatensauce, Mozzarella, Olivenöl",
        price: 8.9,
    },
    {
        type: "Pizza",
        name: "Pizza Funghi",
        ingredients: "Tomatensauce, Mozzarella, Olivenöl, Champignons",
        price: 9.9,
    },
    {
        type: "Pizza",
        name: "Pizza Tonno",
        ingredients: "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln",

        price: 12.9,
    },
    {
        type: "Pizzabrötchen",
        name: "Pizzabrötchen Classic",
        ingredients: "Tomatensauce, Mozzarella",

        price: 13.9,
    },
    {
        type: "Pizzabrötchen",
        name: "Pizzabrötchen Sucuk",
        ingredients: "Hirtenkäse, Sucuk",

        price: 13.9,
    },
    {
        type: "Pizzabrötchen",
        name: "Pizzabrötchen Pute",
        ingredients: "Tomatensauce, Mozzarella, Putenschinken",

        price: 13.9,
    },
    {
        type: "Burger",
        name: "Hamburger Classic",
        ingredients:
            "180g Rindfleisch-Patty, Tomate, Zwiebel, Gewürzgurke, Mayonnaise, Ketchup",

        price: 8.9,
    },
    {
        type: "Burger",
        name: "Cheeseburger",
        ingredients:
            "180g Rindfleisch-Patty, Tomate, Zwiebel, Gewürzgurke, Cheddarkäse, Mayonnaise, Ketchup",

        price: 9.9,
    },
    {
        type: "Burger",
        name: "Sucuk-Burger",
        ingredients:
            "180g Sucuk-Patty, Tomate, Zwiebel, Gewürzgurke, Cheddarkäse, Mayonnaise, Ketchup",

        price: 10.9,
    },
];
let dishname = [];
let dishprice = [];
let dishamount = [];

function render() {
    let dishbox = document.getElementById("renderHere");
    dishbox.innerHTML = "";

    for (let i = 0; i < dishes.length; i++) {
        dishbox.innerHTML += `
            
            <div class="dish-card">
                <div class="dish-title">
                    <h3>${dishes[i].name}</h3>
                    <div class="icon"  onclick="addToCart(${i})"><i class="fa-regular fa-plus fa-lg" style="color: #1e1e1e;"></i></div>
                </div>
                <div class="dish-info marger">mit ${
                    dishes[i].ingredients
                } </div>
                
                <div class="dish-price ">${dishes[i].price.toFixed(2)} €</div>
            </div>
            `;
    }
}

function checkCartContent() {
    let boolean = false;
    for (let i = 0; i < dishamount.length; i++) {
        if (dishamount[i] > 0) {
            boolean = true;
        }
    }

    if (boolean) {
        // der boolean ist true, wennn etwas im warenkorb ist
        let cartbox = document.getElementById("full-cart");
        cartbox.classList.remove("d-none");
        let emptycart = document.getElementById("empty-cart");
        emptycart.classList.add("d-none");
        let checkout = document.getElementById("checkout");
        checkout.classList.remove("d-none");
    } else if (!boolean) {
        let cartbox = document.getElementById("full-cart");
        cartbox.classList.add("d-none");
        let emptycart = document.getElementById("empty-cart");
        emptycart.classList.remove("d-none");
        let checkout = document.getElementById("checkout");
        checkout.classList.add("d-none");
        let minOrder = document.getElementById("minOrder");
        minOrder.classList.add("d-none");
    }
}

function addToCart(e) {
    let dish = dishes[e];

    let dishToAdd = dish.name;
    if (dishname.includes(dishToAdd)) {
        let dishIndex = dishname.indexOf(dishToAdd);
        dishamount[dishIndex] += 1;
    } else {
        dishname.push(dish.name);
        dishprice.push(dish.price);
        dishamount.push(1);
    }
    checkCartContent();
    renderCheckout();
    zwischensum();
}

function renderCheckout() {
    let cartbox = document.getElementById("full-cart");
    cartbox.innerHTML = "";

    for (let i = 0; i < dishamount.length; i++) {
        if (dishamount[i] > 0) {
            let zwischensumme =
                dishprice[i].toFixed(2) * dishamount[i].toFixed(2);
            cartbox.innerHTML += `
            <div class="dish-in-cart" id="dish-num-check${i}">
                <table class="cart-table">
                    <tr>
                        <td id="counter${i}">${dishamount[i]}</td>
                        <td id="identifier${i}">${dishname[i]}</td>
                        <td id="dishprice${i}" class="table-price">${zwischensumme.toFixed(
                2
            )}€</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="edit-amount">
                            <div class="icon" onclick="minusMeal(${i})"><i class="fa-solid fa-minus fa-sm" style="color: #1e1e1e;" ></i></div>
                            <div class="icon" onclick="plusMeal(${i})"><i class="fa-regular fa-plus fa-sm" style="color: #1e1e1e;" ></i></div>
                        </td>
                    </tr>
                </table>
            </div>
    `;
        }
    }
    zwischensum();
    checkCartContent();
}

function plusMeal(i) {
    dishamount[i] += 1;
    let currentPrice = document.getElementById(`dishprice${i}`);
    let counter = document.getElementById(`counter${i}`);

    counter.innerHTML = dishamount[i];
    let newPrice = (
        parseFloat(dishprice[i]) * parseFloat(dishamount[i])
    ).toFixed(2);
    currentPrice.innerHTML = `${newPrice} €`;
    zwischensum();
}

function minusMeal(i) {
    dishamount[i] -= 1;
    if (dishamount[i] == 0) {
        document.getElementById(`dish-num-check${i}`).innerHTML = "";
        // dishname.splice(i, 1);
        // dishprice.splice(i, 1);
        // dishamount.splice(i, 1);
    } else {
        let currentPrice = document.getElementById(`dishprice${i}`);
        let counter = document.getElementById(`counter${i}`);

        counter.innerHTML = dishamount[i];
        let newPrice = (
            parseFloat(dishprice[i]) * parseFloat(dishamount[i])
        ).toFixed(2);
        currentPrice.innerHTML = `${newPrice} €`;
    }

    zwischensum();
    checkCartContent();
}

function zwischensum() {
    let zwischensumme = 0;

    for (let i = 0; i < dishname.length; i++) {
        let preisProGericht = dishprice[i] * dishamount[i];
        zwischensumme += preisProGericht;
    }

    let zwischensummeContainer = document.getElementById("zwischensumme");
    zwischensummeContainer.innerHTML = `${zwischensumme.toFixed(2)} €`;
    getTotal(zwischensumme);

    if (zwischensumme < 15) {
        document.getElementById("minOrder").classList.remove("d-none");
        document.getElementById("offener-betrag").innerHTML = (
            15 - zwischensumme
        ).toFixed(2);
        document
            .getElementById("checkout-btn")
            .classList.remove("checkout-button");
        document
            .getElementById("checkout-btn")
            .classList.add("checkout-disabled");
    } else if (zwischensumme > 15) {
        document.getElementById("minOrder").classList.add("d-none");
        document
            .getElementById("checkout-btn")
            .classList.add("checkout-button");
        document
            .getElementById("checkout-btn")
            .classList.remove("checkout-disabled");
    }
}

function getTotal(zwischensumme) {
    document.getElementById("checkout-summe").innerHTML = `${(
        zwischensumme + 1
    ).toFixed(2)} €`;
}

function showMobileCart() {
    document.getElementById("cart-id").classList.remove("mcart");
    document.getElementById("cart-id").classList.add("show-mobile-cart");
    hideCartButton();
    
}

function closeCart() {
    document.getElementById("cart-id").classList.remove("show-mobile-cart");
    document.getElementById("cart-id").classList.add("mcart");
    hideCartButton();
}

function hideCartButton() {
    let warenkorb = document.getElementById("cart-id").classList;
    if (warenkorb.contains("show-mobile-cart")) {
        document.getElementById("m-btn-id").classList.add("d-none");
    } else {
        document.getElementById("m-btn-id").classList.remove("d-none");
    }
}