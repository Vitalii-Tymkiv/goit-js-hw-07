import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
galleryRef.addEventListener("click", clickOnGalleryImage);

function createGalleryItem(event) {
  return event
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function clickOnGalleryImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src='${event.target.dataset.source}' width="800" height="600">
 `,
    {
      onShow: () => {
        galleryRef.addEventListener("keydown", closeImgOnEscapeKey);
      },
      onClose: () => {
        galleryRef.removeEventListener("keydown", closeImgOnEscapeKey);
      },
    }
  );
  const closeImgOnEscapeKey = function (event) {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  instance.show();
}
