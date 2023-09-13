const cards = document.querySelectorAll('.card');
const right_arrow = document.querySelector('.arrow.right');
const left_arrow = document.querySelector('.arrow.left');

const shopping_cart = document.querySelector('.shopping-cart');
const cart_btns = document.querySelectorAll('.add-to-cart');
 
// Fly To Shopping Cart Effect
for (cart_btn of cart_btns) {
    cart_btn.onclick = (e) => {

        shopping_cart.classList.add('active');

        let product_count = Number(shopping_cart.getAttribute('data-product-count')) || 0;
        shopping_cart.setAttribute('data-product-count', product_count + 1);
        // finding first grand parent of target button 
        let target_parent = e.target.parentNode.parentNode.parentNode;
        target_parent.style.zIndex = "100";
       

    }
}


// Fonction pour afficher les produits du panier dans la boîte modale
function displayCartItems() {
    // Effacez le contenu actuel de la liste
    cartList.innerHTML = '';

    // Parcourez les produits dans le panier et ajoutez-les à la liste
    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

        // Créez un bouton "Remove" pour chaque article
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');

        // Attachez un gestionnaire d'événements au bouton "Remove"
        removeButton.addEventListener('click', () => {
            // Supprimez l'article du panier en utilisant son index
            cart.splice(index, 1);
            // Mettez à jour l'affichage du panier
            displayCartItems();
        });

        // Ajoutez le bouton "Remove" à l'élément de la liste
        listItem.appendChild(removeButton);
        
        cartList.appendChild(listItem);
    });
}

