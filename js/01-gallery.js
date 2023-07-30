import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
let instance;
const markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onClick);
galleryEl.addEventListener("keydown", modalClose);

function onClick(e) {
  e.preventDefault();
  console.dir(e.target);
  if (e.target.tagName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
  instance.show();
}

function modalClose(e) {
  if (e.code === "Escape" && instance) {
    instance.close();
  }
}
