const images = document.querySelectorAll('.image')
const dots = document.querySelectorAll('.dot')
const texts = document.querySelectorAll('.text')
const controls = document.querySelector('.controls')

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
  images[n - 1].classList.add('active')
  texts[n - 1].classList.add('active')
  dots[n - 1].classList.add('checked')
}

controls.addEventListener('click', (event) => {
  if(event.target.classList.contains('dot')) {
    showImages(event.target.id)
  }
  if(event.target.classList.contains('dot-wrapper')) {
    showImages(event.target.children[0].id)
  }
})