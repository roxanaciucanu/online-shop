//Cart
let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

//Open cart
cartIcon.onclick = () => {
    cart.classList.add("active")
}

//Close cart
closeCart.onclick = () => {
    cart.classList.remove("active")
}

//Cart working
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else{
    ready()
}

//Add to cart
let addCart = document.getElementsByClassName("add-cart");
for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClicked)
}
function addCartClicked(event) {
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName("prod-title")[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let prodImg = shopProducts.getElementsByClassName("prod-img")[0].src;
    addProdToCart(title,price,prodImg);
    updateTotal()
}

function addProdToCart(title,price,prodImg) {
    let cartShopBox = document.createElement("div")
    cartShopBox.classList.add("cart-box")[0]
    let cartItems = document.getElementsByClassName("cart-content")[0];
    let cartItemsNames = cartItems.getElementsByClassName("cart-prod-title");
    for (let i = 0; i < cartItemsNames.length; i++) {
    alert("You have already added this item to cart")
    return;
    }
   
}
let cartBoxContent = `
                   <img src="/images/elmex.jpg" alt="" class="cart-img">
                   <div class="detail-box">
                   <div class="cart-prod-title">Elmex</div>
                   <div class="cart-price">$20</div>
                   <input type="number" value="1" class="cart-quantity">
                   </div>
                   <i class="fa-solid fa-trash cart-remove"></i> `;

cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartElements)
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged)



//Remoove elements from cart
function ready() {
    let removeCartIcon = document.getElementsByClassName("cart-remove")
console.log(removeCartIcon);
for (let i = 0; i < removeCartIcon.length; i++){
    let icon = removeCartIcon[i]
icon.addEventListener("click", removeCartElements)
}
}
function removeCartElements(event) {
    let elementClicked = event.target
    elementClicked.parentElement.remove()
    updateTotal();
}


//Change quantity
let quantityInput = document.getElementsByClassName("cart-quantity")
for (let i = 0; i < quantityInput.length; i++){
    let input = quantityInput[i];
    input.addEventListener("change", quantityChanged)
}

//Quantity changes
function quantityChanged(event) {
    let input = event.target
    if (isNan(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}


 //Total
 function updateTotal(){
    let cartContent = document.getElementsByClassName("cart-content")[0]
    let cartBoxes = cartContent.getElementsByClassName("cart-box")
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceItem = cartBox.getElementsByClassName("cart-price")[0]
        let quantityItem = cartBox.getElementsByClassName("cart-quantity")[0]
        let price = parseFloat(priceItem.innerText.replace("$", ""));
        let quantity = quantityItem.value;
        total = total + (price * quantity);

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
 }