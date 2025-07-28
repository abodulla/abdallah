const modal = document.getElementById("modal") as HTMLDivElement;
const openModalBtn = document.getElementById("openModalBtn") as HTMLButtonElement;
const closeModalBtn = document.querySelector(".close") as HTMLSpanElement;
const form = document.getElementById("productForm") as HTMLFormElement;
const tableBody = (document.getElementById("productTable") as HTMLTableElement)
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
window.addEventListener("click", (e: MouseEvent) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ✅ Form submission
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // Get input values with type casting
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const description = (document.getElementById("description") as HTMLInputElement).value;
  const price = (document.getElementById("price") as HTMLInputElement).value;
  const image = (document.getElementById("image") as HTMLInputElement).value;

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
  const deleteBtn = row.querySelector(".delete-btn") as HTMLButtonElement;
  deleteBtn.addEventListener("click", () => {
    tableBody.removeChild(row);
  });

  // Reset and close modal
  form.reset();
  modal.style.display = "none";
});
