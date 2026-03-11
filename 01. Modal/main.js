const openModalBtnElement = document.getElementById("openModal");
const modalElement = document.querySelector(".modal");
const modalContentElement = modalElement.querySelector(".modal_content");

if (openModalBtnElement) {
  openModalBtnElement.addEventListener("click", () => {
    modalElement.classList.add("open");
  });
}

if (modalContentElement) {
  modalContentElement.addEventListener("click", () => {
    modalElement.classList.remove("open");
  });
}
