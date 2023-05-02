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
let dishprice = [];
let dishamount = [];

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
                
                <div class="dish-price ">${dishes[i].price.toFixed(2)} €</div>
            </div>
            `
    }
}


// if-abfrage für anzeigen des Warenkorbs bzw. anzeigen des aufrufs für Befüllung des Warenkorbs


function addToCart(e) {
    let dish = dishes[e];

    

    let dishToAdd = dish.name;
    if (dishname.includes(dishToAdd)) {
        let dishIndex = dishname.indexOf(dishToAdd);
        plusMeal(dishIndex);
    } else {
        dishname.push(dish.name);
        dishprice.push(dish.price);
        dishamount.push(1);
    }
    

    if (dishname.length>0) {
        let cartbox = document.getElementById('full-cart');
        cartbox.classList.remove('d-none');
        let emptycart = document.getElementById('empty-cart');
        emptycart.classList.add('d-none');
        let checkout = document.getElementById('checkout');
        checkout.classList.remove('d-none');
    }

    renderCheckout();
}

// function cartSwitcher() {


//     if (dishamount.length>0) {
//         let cartbox = document.getElementById('full-cart');
//         cartbox.classList.remove('d-none');
//         let emptycart = document.getElementById('empty-cart');
//         emptycart.classList.add('d-none');
//         let checkout = document.getElementById('checkout');
//         checkout.classList.remove('d-none');
//     } else if (dishamount.length>)
// }

// function addCheckout() {
//     // zwischensumme();
//     let cartbox = document.getElementById('checkout');

//     cartbox.innerHTML = `
//     <div class="checkout-line">
//         <span>Zwischensumme</span>
//         <span id="zwischensumme">${zwischensumme}</span>
//     </div>
//     <div class="checkout-line">
//         <span>Lieferkosten</span>
//         <span>1,00 €</span>
//     </div>
//     <div class="checkout-line">
//         <span><b>Gesamt</b></span>
//         <span id="checkout-summe"></span>
//     </div>
//     `;

// }

function renderCheckout() {
    let cartbox = document.getElementById('full-cart');
    cartbox.innerHTML = '';
    for (let i = 0; i<dishname.length; i++) {
        cartbox.innerHTML += `
            <div class="dish-in-cart" id="dish-num-check${i}">
                <table class="cart-table">
                    <tr>
                        <td id="counter${i}">${dishamount[i]}</td>
                        <td id="identifier${i}">${dishname[i]}</td>
                        <td id="dishprice${i}" class="table-price">${dishprice[i].toFixed(2)}€</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><a href="#">Anmerkung hinzufügen</a></td>
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

function plusMeal(i){
    let currentPrice = document.getElementById(`dishprice${i}`);
    let counter = document.getElementById(`counter${i}`);
    dishamount[i] +=1;
    counter.innerHTML = dishamount[i];
    currentPrice.innerHTML = `${(parseFloat(dishprice[i]) * parseFloat(dishamount[i])).toFixed(2)} €`;
    
}

function minusMeal(i) {
    let currentPrice = document.getElementById(`dishprice${i}`);
    let counter = document.getElementById(`counter${i}`);
    dishamount[i] -=1;
    counter.innerHTML = dishamount[i];
    currentPrice.innerHTML = `${(parseFloat(dishprice[i]) * parseFloat(dishamount[i])).toFixed(2)} €`;

    if(dishamount[i] == 0) {
        document.getElementById(`dish-num-check${i}`).innerHTML = '';
        dishname.splice(i, 1);
        dishprice.splice(i, 1);
        dishamount.splice(i, 1);
    }
}


// todo: function plusMeal
// todo: function minusMeal
// todo: function check doubles in basket
// todo: function sum shopping cart
// todo: function Check mindestbestellwert