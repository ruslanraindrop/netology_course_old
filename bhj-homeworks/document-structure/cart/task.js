const products = Array.from(document.querySelectorAll('.product'));
const productsInCart = document.querySelector('.cart__products');

for (let i = 0; i < products.length; i++) {
  function addProduct(event) {
    if (event.target.classList.contains('product__add')) {

      for (let j = 0; j < productsInCart.children.length; j++) {
        if (productsInCart.children[j].dataset.id === products[i].dataset.id) {
          productsInCart.children[j].querySelector('.cart__product-count').textContent = Number(productsInCart.children[j].querySelector('.cart__product-count').textContent) + Number(products[i].querySelector('.product__quantity-value').textContent);
          return;
        } 
      }

      const id = products[i].dataset.id;
      const img = products[i].querySelector('.product__image').src;
      const quantity = products[i].querySelector('.product__quantity-value').textContent;

      productsInCart.insertAdjacentHTML('beforeEnd', `
        <div class="cart__product" data-id=${id}>
          <img class="cart__product-image" src=${img}>
          <div class="cart__product-count">${quantity}</div>
        </div>
        `);
    }
  }

  function plusQuantity(event) {
    if (event.target.classList.contains('product__quantity-control_inc')) {
      Number(products[i].querySelector('.product__quantity-value').textContent ++);
    }
  }

  function minusQuantity(event) {
    if (event.target.classList.contains('product__quantity-control_dec')) {
      if (Number(products[i].querySelector('.product__quantity-value').textContent) === 1) {
        return 1
      } else {
        Number(products[i].querySelector('.product__quantity-value').textContent --);
      }
    }
  }

  products[i].addEventListener('click', addProduct)
  products[i].addEventListener('click', plusQuantity)
  products[i].addEventListener('click', minusQuantity) 
}

