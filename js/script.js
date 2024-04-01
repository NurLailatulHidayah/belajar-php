document.addEventListener("DOMContentLoaded", function () {
  // Fetch products from API
  fetch("https://api.fake-rest.refine.dev/products")
    .then((response) => response.json())
    .then((data) => {
      var products = data.slice(0, 50);
      var productList = document.getElementById("productList");
      products.forEach((product) => {
        var productDiv = document.createElement("li");
        productDiv.textContent =
          product.name + " -> " + product.price + " -> " + product.material;
        productList.appendChild(productDiv);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
