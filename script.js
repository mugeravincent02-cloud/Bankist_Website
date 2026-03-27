'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////................ LECTURES ................/////////////////////////

//////////.........CREATING AND INSERTING ELEMENTS..........//////////////////////

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');

//message.textContent = 'We use cookies for improved functionality and analytics.';

//////................ OR
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

//Add the message at the top of the top of the header
header.prepend(message);

//////................ OR
//Add message at the bottom of header
// header.append(message);

//////................ OR
// Add data at both top and bottom
// header.append(message.cloneNode(true));

// Add data before the header
// header.before(message);

// Add data after the header
// header.after(message);

//////................ DELETING ELEMENT
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();

    //old style of DOM Traversing
    // message.parentElement.removeChild(message);
  });


  //////////.........STYLES, ATTRIBUTES AND CLASSES..........//////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

//////................ STYLES
message.style.backgroundColor = '#375'
message.style.width = '120%'