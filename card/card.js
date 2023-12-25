document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceContainer = document.getElementById('totalPrice');
  
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      totalPriceContainer.textContent = 'Total Price: $0.00'; 
    } else {
      let cartHTML = "<ul>";
      let totalPrice = 0;
  
      cartItems.forEach((item, index) => {
        cartHTML += `<li>${item.name} by ${item.author} - Price: ${item.price} <img src="../images/remove.png" alt="Remove" class="remove-item" data-index="${index}"></li>`;
        const itemPrice = parseFloat(item.price.replace('$', ''));
        totalPrice += itemPrice;
      });
  
      cartHTML += "</ul>";
      cartItemsContainer.innerHTML = cartHTML;
  
      totalPriceContainer.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  
      const removeButtons = document.querySelectorAll('.remove-item');
      removeButtons.forEach(button => {
        button.addEventListener('click', function() {
          const indexToRemove = parseInt(button.getAttribute('data-index'));
          cartItems.splice(indexToRemove, 1);

          localStorage.setItem('cart', JSON.stringify(cartItems));
    
          location.reload(); 
        });
      });
    }
  });


  
