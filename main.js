"use strict";

let dishes = [
    {
        type: "Pizza",
        name: "Pizza Margharita",
        ingredients: "Tomatensauce, Mozzarella, Olivenöl",
        price: 8.90
    },
    {
        type: "Pizza",
        name: "Pizza Funghi",
        ingredients: "Tomatensauce, Mozzarella, Olivenöl, Champignons",
        price: 9.90
    },
    {
        type: "Pizza",
        name: "Pizza Tonno",
        ingredients: "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln",
        
        price: 12.90
    },
    {
        type: "Pizzabrötchen",
        name: "Pizzabrötchen gefüllt mit Tomatensauce und Mozzarella",
        ingredients: "Tomatensauce, Mozzarella",
        
        price: 13.90
    },
    {
        type: "Pizzabrötchen",
        name: "Pizzabrötchen gefüllt mit Hirtenkäse und Sucuk",
        ingredients: "Hirtenkäse, Sucuk",
        
        price: 13.90
    },
    {
        type: "Pizzabrötchen",
        name: "Pizzabrötchen gefüllt mit Tomatensauce und Mozzarella und Putenschinken",
        ingredients: "Tomatensauce, Mozzarella, Putenschinken",
        
        price: 13.90
    },
    {
        type: "Burger",
        name: "Hamburger Classic",
        ingredients: "180g Rindfleisch-Patty, Tomate, Zwiebel, Gewürzgurke, Mayonnaise, Ketchup",
        
        price: 8.90
    },
    {
        type: "Burger",
        name: "Cheeseburger",
        ingredients: "180g Rindfleisch-Patty, Tomate, Zwiebel, Gewürzgurke, Cheddarkäse, Mayonnaise, Ketchup",
        
        price: 9.90
    },
    {
        type: "Burger",
        name: "Sucuk-Burger",
        ingredients: "180g Sucuk-Patty, Tomate, Zwiebel, Gewürzgurke, Cheddarkäse, Mayonnaise, Ketchup",
        
        price: 10.90
    },
];
let dishname = [];
let sum = [];
let amount = [];

function render() {
    let dishbox = document.getElementById('renderHere');
    console.log(dishbox);
    dishbox.innerHTML = '';
    
    for (let i = 0; i<dishes.length; i++) {
            dishbox.innerHTML += `
            
            <div class="dish-card" onclick="addToCart(${i})">
                <div class="dish-title">
                    <h3>${dishes[i].name}</h3>
                    <div class="icon"><i class="fa-regular fa-plus fa-lg" style="color: #1e1e1e;"></i></div>
                </div>
                <div class="dish-info marger">mit ${dishes[i].ingredients} </div>
                <div class="dish-toppings marger">Wahl aus: extra Käse, Salami, Sucuk</div>
                <div class="dish-price ">${dishes[i].price.toFixed(2)} €</div>
            </div>
            `
    }
}

function addToCart(e) {
    let dish = dishes[e];
    dishname.push(dish.name);
    sum.push(dish.price);
    amount.push(1);
    console.log(dishname);
    console.log(sum);
    console.log(amount);

    let cartbox = document.getElementById('full-cart');
    cartbox.classList.remove('d-none');
    let emptycart = document.getElementById('empty-cart');
    emptycart.classList.add('d-none');
    let checkout = document.getElementById('checkout');
    checkout.classList.remove('d-none');


    cartbox.innerHTML += `
    <div class="dish-in-cart">
        <table class="cart-table">
            <tr>
                <td id="counter${e}">1</td>
                <td id="identifier${e}">${dish.name}</td>
                <td class="table-price">${dish.price.toFixed(2)}€</td>
            </tr>
            <tr>
                <td></td>
                <td><a href="#">Anmerkung hinzufügen</a></td>
                <td class="edit-amount">
                    <div class="icon"><i class="fa-solid fa-minus fa-sm" style="color: #1e1e1e;" onclick="minusMeal(${e})"></i></div>
                    <div class="icon"><i class="fa-regular fa-plus fa-sm" style="color: #1e1e1e;" onclick="plusMeal(${e})"></i></div>
                </td>
            </tr>
        </table>
    </div>
    `;

    addCheckout();
}

function addCheckout() {
    zwischensumme();
    let cartbox = document.getElementById('checkout');

    cartbox.innerHTML = `
    <div class="checkout-line">
        <span>Zwischensumme</span>
        <span id="zwischensumme">${zwischensumme}</span>
    </div>
    <div class="checkout-line">
        <span>Lieferkosten</span>
        <span>1,00 €</span>
    </div>
    <div class="checkout-line">
        <span><b>Gesamt</b></span>
        <span id="checkout-summe"></span>
    </div>
    `;

}

function plusMeal(e){

}

// todo: function plusMeal
// todo: function minusMeal
// todo: function check doubles in basket
// todo: function sum shopping cart
// todo: function Check mindestbestellwert

let zwischensumme = 0;

function zwischenSumme() {
    for(let i=0; i<sum.length; i++) {
        zwischensumme += i;
    }
}