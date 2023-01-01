document.querySelector('.search-button').onclick = e => {

  e.target.parentElement.classList.toggle('expand')

  e.target.previousElementSibling.classList.toggle('show');

}