const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("productForm");
const table = document
  .getElementById("productTable")
  .getElementsByTagName("tbody")[0];

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  const row = table.insertRow();
  row.innerHTML = `
    <td><img src="${image}" width="80" alt="Product"></td>
    <td>${name}</td>
    <td>${description}</td>
    <td>$${parseFloat(price).toFixed(2)}</td>
    <td>
      <button class="buy-btn">Add to Cart</button>
      <button class="delete-btn">Delete</button>
    </td>
  `;

  // Delete product
  row.querySelector(".delete-btn").addEventListener("click", () => {
    table.removeChild(row);
  });

  // Reset form and hide modal
  form.reset();
  modal.style.display = "none";
});
