var plus=document.querySelector("#plus");
var quantity=document.querySelector("#quantity");
var minus=document.querySelector("#minus");
var product_price=document.querySelector("#product_input_price");
var price_show=document.querySelector("#price");


plus.addEventListener('click',function(){
  
  var increment=parseInt(quantity.innerHTML);  
           var price_p=parseInt(product_price.value);
 
  if(increment <8){
  increment=increment+1;
          increment_price = price_p*increment;

  quantity.innerHTML = increment;
  
          price_show.innerHTML = increment_price;
  }
});
 

minus.addEventListener('click',function(){
    
  var increment=parseInt(quantity.innerHTML); 
              var price_p=parseInt(product_price.value);
  if(increment > 1){
  increment=increment-1;
              decrease_price=price_p*increment;
       
  quantity.innerHTML = increment;
              price_show.innerHTML=decrease_price;
  }
  
});








    document.addEventListener("DOMContentLoaded", function () {
        const cartList = document.getElementById("cart-list");
        const cartNone = document.getElementById("cart-none");
        const addToCartButton = document.querySelector(".fa-shopping-cart");

        // Créer un élément <li> pour l'article ajouté
        function createCartItem(productName) {
            const li = document.createElement("li");
            li.textContent = productName;
            return li;
        }

        // Ajouter l'article au panier lors du clic sur l'icône du panier
        addToCartButton.addEventListener("click", function () {
            const productName = "Espadrilles Nike"; // Nom de l'article que vous voulez ajouter
            const cartItem = createCartItem(productName);
            cartList.appendChild(cartItem);

            // Afficher le panier
            cartNone.style.display = "block";
        });
    });





    //
    document.addEventListener("DOMContentLoaded", function () {
        const cartList = document.getElementById("cart-list");
        const cartNone = document.getElementById("cart-none");
        const addToCartButton = document.querySelector(".fa-shopping-cart");
        const closeCartButton = document.getElementById("close-cart");
    
        // Créer un élément <li> pour l'article ajouté
        function createCartItem(productName) {
            const li = document.createElement("li");
            li.textContent = productName;
            return li;
        }
    
        // Ajouter l'article au panier lors du clic sur l'icône du panier
        addToCartButton.addEventListener("click", function () {
            const productName = "Espadrilles Nike"; // Nom de l'article que vous voulez ajouter
            const cartItem = createCartItem(productName);
            cartList.appendChild(cartItem);
    
            // Afficher le panier
            cartNone.style.display = "block";
        });
    
        // Gérer la fermeture du panier lors du clic sur l'icône de fermeture
        closeCartButton.addEventListener("click", function () {
            // Masquer le panier
            cartNone.style.display = "none";
        });
    });
    