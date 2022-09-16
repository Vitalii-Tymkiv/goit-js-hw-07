import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
galleryRef.addEventListener("click", clickOnGalleryLink);

function createGalleryItem(event) {
  return event
    .map(({ preview, original, description }) => {
      return `
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

function clickOnGalleryLink(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
