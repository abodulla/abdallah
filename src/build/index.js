"use strict";
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("productForm");
const tableBody = document.getElementById("productTable")
    .getElementsByTagName("tbody")[0];
// ✅ Open modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});
// ✅ Close modal via close button
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
// ✅ Close modal by clicking outside the modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// ✅ Form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get input values with type casting
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    // Add new row
    const row = tableBody.insertRow();
    row.innerHTML = `
    <td><img src="${image}" width="80" alt="Product"></td>
    <td>${name}</td>
    <td>${description}</td>
    <td>$${parseFloat(price).toFixed(2)}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;
    // Delete button logic
    const deleteBtn = row.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        tableBody.removeChild(row);
    });
    // Reset and close modal
    form.reset();
    modal.style.display = "none";
});
