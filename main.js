//grab form;
const form = document.querySelector('form');
const span = document.querySelector('span')
const emailInput = document.querySelector('[name="email"]');
const overLay = document.querySelector('.overlay');
const dismissMessage = document.querySelector('.btn-secondary');

//open modal
function openModal() {
  document.body.style.overflow = 'hidden'
  overLay.classList.add('open')
}
//show error message
function showErroMessage() {
  span.classList.add('show-err');
  emailInput.classList.add('error');
}
//remove error message
function removeErrorMessage() {
  span.classList.remove('show-err');
  emailInput.classList.remove('error');
}
//handle submit
function handleSubmit(e) {
  e.preventDefault()
  const value = e.currentTarget.email.value.toLowerCase();
  const pattern = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  return pattern.test(value) ? openModal() : showErroMessage();
}

//handleclick;
function handleClick() {
  overLay.classList.remove('open');
  emailInput.value = ''
}

//listen submit event;
form.addEventListener('submit', handleSubmit);

//liseten click event;
dismissMessage.addEventListener('click', handleClick);

//when  user leaves empty input
emailInput.addEventListener('blur', (e) => {
  if (e.currentTarget.value === '') {
    showErroMessage();
  }
});



//when focused remove error message
emailInput.addEventListener('focus', () => {
  return removeErrorMessage();
})