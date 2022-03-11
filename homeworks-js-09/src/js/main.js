import galleryItems from "./gallery-items";

const refs = {
    gallery: document.querySelector('.gallery'),
    lightbox: document.querySelector('.lightbox'),
    overlay: document.querySelector('.lightbox__overlay'),
    button: document.querySelector('.lightbox__button'),
    image: document.querySelector('.lightbox__image'),
    left: document.querySelector('.lightbox__left'),
    right: document.querySelector('.lightbox__right')
};

refs.gallery.addEventListener('click', openModal);
refs.button.addEventListener('click', closeModal);
refs.overlay.addEventListener('click', closeModal);
refs.left.addEventListener('click', changeImg);
refs.right.addEventListener('click', changeImg);

window.addEventListener("keydown", (event) => event.code === "Escape" ? closeModal() : null);
window.addEventListener("keydown", changeImg);
let currentImg;

const createGallery = () => {
    const addImg = ({ preview, original, description }, index) =>
        `<li class="gallery__item">
         <a class="gallery__link">
            <img class="gallery__image" src="${preview} "data-source="${original}" alt="${description}" data-index ="${index}"/>      
       </a>
   </li>`;
    const galleryRef = galleryItems
        .map((item, index) => addImg(item, index))
        .join('');
    refs.gallery.insertAdjacentHTML('afterbegin', galleryRef)
};

function openModal(e) {
    const target = e.target;
    if (target.nodeName === 'IMG') {
        refs.lightbox.classList.add('is-open');
        changeAttribute(target.dataset.source, target.alt);
        refs.image.dataset.index = target.dataset.index;
        currentImg = +target.dataset.index;
        return;
    }
}

function closeModal() {
  refs.lightbox.classList.remove("is-open");
  changeAttribute("", "");
  return;
}

function changeAttribute(src, alt) {
  refs.image.src = src;
  refs.image.alt = alt;
};

function changeImg(e) {
    let size = galleryItems.length - 1;
    if (e.target.classList.value.includes('left') || e.code === 'ArrowLeft') {
        currentImg === 0 ? (currentImg = size) : (currentImg -= 1);
        refs.image.src = galleryItems[currentImg].original;
    } if (e.target.classList.value.includes('right') || e.code === 'ArrowRight') {
        currentImg === size ? (currentImg = 0) : (currentImg += 1);
        refs.image.src = galleryItems[currentImg].original;
    }
}

createGallery(galleryItems);
