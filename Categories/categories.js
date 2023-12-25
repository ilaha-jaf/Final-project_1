function toggleDropdown() {
    const dropdown = document.getElementById("filterDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('searchInput').value.trim();
        if (searchInput !== '') {
            window.location.href = `/searchResults.html?searchQuery=${encodeURIComponent(searchInput)}`;
        } else {
            alert('Please enter a book name to search.');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".cart-button");
  
    cartButtons.forEach(button => {
      button.addEventListener("click", function(event) {
        event.preventDefault(); 
  
        const bookContainer = button.closest('.book-container');
        const bookName = bookContainer.querySelector('.book-name').textContent;
        const bookAuthor = bookContainer.querySelector('.book-author').textContent;
        const bookPrice = bookContainer.querySelector('.price').textContent;
  
        const book = {
          name: bookName,
          author: bookAuthor,
          price: bookPrice
        };
  
        if (typeof(Storage) !== "undefined") {
          let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        
          cartItems.push(book);
          localStorage.setItem("cart", JSON.stringify(cartItems));
  
          alert("Book added to cart!");
        } else {
          alert("Sorry, your browser does not support local storage. Unable to add to cart.");
        }
      });
    });
  });