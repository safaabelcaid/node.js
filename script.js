

// Sélectionnez tous les éléments de classe 'card'
const cards = document.querySelectorAll('.card');

// Sélectionnez les flèches droite et gauche (vérifiez les classes)
const right_arrow = document.querySelector('.right-arrow');
const left_arrow = document.querySelector('.left-arrow');

// Sélectionnez l'élément de classe 'shopping-cart' avec la classe 'active'
const shopping_cart = document.querySelector('.shopping-cart.active');

// Sélectionnez tous les boutons 'add-to-cart'
const cards_btns = document.querySelectorAll('.add-to-cart');

// Parcourez les boutons 'add-to-cart' avec une boucle for...of
for (const cart_btn of cards_btns) {
    cart_btn.onclick = (e) => {
        // Évitez la propagation du lien (si c'est un lien)
        e.preventDefault();

        // Ajoutez la classe 'active' au panier
        shopping_cart.classList.add('active');

        // Obtenez le nombre de produits actuel du panier
        let product_count = Number(shopping_cart.getAttribute('data-product-count')) || 0;

        // Incrémente le nombre de produits et met à jour l'attribut
        shopping_cart.setAttribute('data-product-count', product_count + 1);
        
        // Trouvez le premier grand-parent du bouton cible
        let target_parent = e.target.closest('.card');

        // Définissez le style Z-Index du parent sur 100
        target_parent.style.zIndex = "100";

        // Créez une copie de l'image
        let img = target_parent.querySelector('img');
        let flying_img = img.cloneNode();
        flying_img.classList.add('flying-img');

        // Ajoutez l'image clonée au parent
        target_parent.appendChild(flying_img);
    }
}




// Récupérez tous les boutons "add to cart" et les boutons "annuler"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const removeButtons = document.querySelectorAll('.remove-button');

// Écoutez les clics sur les boutons "add to cart"
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Récupérez le nom et le prix du produit à partir des attributs data
    const productName = this.getAttribute('data-product-name');
    const productPrice = parseFloat(this.getAttribute('data-product-price'));

    // Appelez une fonction pour ajouter le produit au panier
    ajouterAuPanier(productName, productPrice);
  });
});

// Écoutez les clics sur les boutons "annuler"
removeButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    // Récupérez l'élément parent de la carte
    const card = this.closest('.card');
    
    // Supprimez la carte de l'affichage
    card.style.display = 'none';

    
    // Optionally, you can remove the card from the panierItems array
    const cardId = card.id;
    const indexToRemove = panierItems.findIndex(item => item.id === cardId);
    if (indexToRemove !== -1) {
      panierItems.splice(indexToRemove, 1);
    }

    afficherPanier();
  });
});




// Tableau pour stocker les éléments du panier
const panierItems = [];

// Fonction pour ajouter un élément au panier
function ajouterAuPanier(nomProduit, prixProduit, color) {
    const nouvelElement = {
        nom: nomProduit,
        prix: prixProduit,
        color:color,




        id: Date.now() // Identifiant unique (timestamp)
        

    };
    panierItems.push(nouvelElement);
    afficherPanier();
}








const afficher =() =>{
    let element =document.getElementById('cart-none');
    element.style.display="block";
}
let shop=document.getElementById('shop');
shop.addEventListener('click',afficher);

// Sélectionnez tous les éléments de classe 'color-option'
const colorOptions = document.querySelectorAll('.color-option');

// Sélectionnez l'élément de classe 'shopping-cart' avec la classe 'active'
const shoppingCart = document.querySelector('.shopping-cart.active');

// Créez un tableau pour stocker les produits sélectionnés
const selectedProducts = [];

// Fonction pour ajouter un produit au panier
function addToCart(productName, productPrice, productColor) {
  const item = {
    name: productName,
    price: productPrice,
    color: productColor,
  };
  selectedProducts.push(item);
  updateCartUI();
}

// Fonction pour mettre à jour l'affichage du panier
function updateCartUI() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = selectedProducts.length;
}

// Écoutez les clics sur les éléments de classe 'color-option'
colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    const productName = option.getAttribute('data-product-name');
    const productPrice = parseFloat(option.getAttribute('data-product-price'));
    const productColor = option.getAttribute('data-color');
    addToCart(productName, productPrice, productColor);
  });
});


// Fonction pour afficher le contenu du panier














function afficherPanier() {
  const panierDiv = document.getElementById("cart-none");

  panierDiv.innerHTML = ""; // Efface le contenu précédent du panier

  for (let i = 0; i < panierItems.length; i++) {
      const element = panierItems[i];
      const itemUl = document.createElement("ul");
      const nomProduitLi = document.createElement("li");
      nomProduitLi.textContent = "Modèle : " + element.nom;


      const nombreLi = document.createElement("li");
      nombreLi.textContent = "Nombre : 1"; // Vous pouvez ajuster cela en fonction de la quantité
      const colorProditLi =document.createElement("li");
      colorProditLi.textContent="color:$" + element.color;
      itemUl.appendChild(nomProduitLi);
      /*itemUl.appendChild(prixProduitLi);*/
      itemUl.appendChild(nombreLi);
      /*itemUl.appendChild(colorProditLi);*/

      panierDiv.appendChild(itemUl);
  }
}





