let imageIndex = 1
const images = document.querySelectorAll('.image')
const dots = document.querySelectorAll('.dot')
const texts = document.querySelectorAll('.text')

function currentImage(n) {
  showImages(imageIndex = n)
}

function showImages(n) {
  let index
  for (index = 0; index < images.length; index++) {
    images[index].classList.replace('active', 'hide');
  }
  for(index = 0; index < dots.length; index++) {
    dots[index].classList.remove('checked')
  }
  for(index = 0; index < texts.length; index++) {
    texts[index].classList.replace('active', 'hide')
  }
  images[imageIndex - 1].classList.add('active')
  texts[imageIndex - 1].classList.add('active')
  dots[imageIndex - 1].classList.add('checked')
}