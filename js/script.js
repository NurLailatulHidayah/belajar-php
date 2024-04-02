document.addEventListener("DOMContentLoaded", function () {
  fetchProductList();
});

function fetchProductList() {
  fetch("https://reqres.in/api/users?page=2")
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById("productList");
      data.data.forEach((user) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
          <img src="${user.avatar}" alt="Product Image">
          <h3>${user.first_name} ${user.last_name}</h3>
          <p>Email: ${user.email}</p>
        `;
        productList.appendChild(productCard);
      });
    })
    .catch((error) => console.error("Error fetching product list:", error));
}
