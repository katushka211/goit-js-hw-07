import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryList = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src= ${item.preview}
      data-source= ${item.original}
      alt=${item.description}
    />
  </a>
</div>`,
  ""
);

// console.log(galleryList);

galleryEl.insertAdjacentHTML("beforeend", galleryList);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src= ${event.target.dataset.source} width="800" height="600">
`);

  instance.show();

  document.addEventListener("keydown", onEscapeClick);
  function onEscapeClick(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
