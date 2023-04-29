"use strict";

let dishes = [
    {
        type: "pizza",
        name: "Pizza Margharita",
        ingredients: "Tomatensauce, Mozzarella, Olivenöl",
        price: 8.90
    },
    {
        type: "pizza",
        name: "Pizza Funghi",
        ingredients: "Tomatensauce, Mozzarella, Olivenöl, Champignons",
        price: 9.90
    },
    {
        type: "pizza",
        name: "Pizza Tonno",
        ingredients: "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln",
        
        price: 12.90
    },
    {
        type: "pizzabrötchen",
        name: "Pizzabrötchen gefüllt mit Tomatensauce und Mozzarella",
        ingredients: "Tomatensauce, Mozzarella",
        
        price: 13.90
    },
    {
        type: "pizzabrötchen",
        name: "Pizzabrötchen gefüllt mit Hirtenkäse und Sucuk",
        ingredients: "Hirtenkäse, Sucuk",
        
        price: 13.90
    },
    {
        type: "pizzabrötchen",
        name: "Pizzabrötchen gefüllt mit Tomatensauce und Mozzarella und Putenschinken",
        ingredients: "Tomatensauce, Mozzarella, Putenschinken",
        
        price: 13.90
    },
    {
        type: "burger",
        name: "Hamburger Classic",
        ingredients: "180g Rindfleisch-Patty, Tomate, Zwiebel, Gewürzgurke, Mayonnaise, Ketchup",
        
        price: 8.90
    },
    {
        type: "burger",
        name: "Cheeseburger",
        ingredients: "180g Rindfleisch-Patty, Tomate, Zwiebel, Gewürzgurke, Cheddarkäse, Mayonnaise, Ketchup",
        
        price: 9.90
    },
    {
        type: "burger",
        name: "Sucuk-Burger",
        ingredients: "180g Sucuk-Patty, Tomate, Zwiebel, Gewürzgurke, Cheddarkäse, Mayonnaise, Ketchup",
        
        price: 10.90
    },
];


function render() {
    let dishbox = document.getElementById('renderHere');
    console.log(dishbox);
    dishbox.innerHTML = '';
    
    for (let i = 0; i<dishes.length; i++) {
            dishbox.innerHTML += `
            <h2 id="dish-type">${dishes[i].type}</h2>
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

}

// todo: function plusMeal
// todo: function minusMeal
// todo: function check doubles in basket
// todo: function sum shopping cart
