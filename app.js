//импорт данных
import galleryItems from "./references/images.js "

// доступ к элементам
const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  modalBox: document.querySelector('.js-lightbox'),
  img: document.createElement('img'),
  lightbox: document.querySelector('.lightbox'),
  closeBtn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector('.lightbox__content'),
  lightbox__image: document.querySelector('.lightbox-image'),
  overlay: document.querySelector('.lightbox__overlay')
}
const {galleryContainer, modalBox, img, lightbox, closeBtn, lightbox__image} = refs

//проверка, что находится в lightbox__image - пока там null
console.log('1',lightbox__image);

//создание разметки
const imgMarkup = createGalleryImgsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', imgMarkup)
img.classList.add('gallery__image')

//создаем слушателя
galleryContainer.addEventListener('click', onGalleryClick)
closeBtn.addEventListener('click', onCloseModal)

function createGalleryImgsMarkup(galleryItems){
   return galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  }).join('')
}

function onOpenModal(){
  modalBox.classList.add('is-open')
}

function onCloseModal(){
  modalBox.classList.remove('is-open')
}

function onGalleryClick(event){
event.preventDefault()
if(event.target.nodeName === 'IMG'){
  
  //открытие модального окна
  onOpenModal()
  
  lightbox__image.setAttribute('src', event.target.dataset.sourse)
  lightbox__image.setAttribute('alt', event.target.alt)
}
}





