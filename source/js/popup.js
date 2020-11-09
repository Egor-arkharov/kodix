'use strict';

(function () {

  let EvtKeys = {
    ENTER: 'Enter',
    ESCAPE: 'Escape'
  };

  let main = document.querySelector('.main');
  let mainBtn = main.querySelector('.main__button');


  let onPopupEscPress = function (evt) {
    if (evt.key === EvtKeys.ESCAPE) {
      evt.preventDefault();
      closePopup();
    }
  };

  let openPopup = function () {
    let popup = document.querySelector('#popup').content.cloneNode(true);

    mainBtn.classList.add('visually-hidden');
    main.classList.add('main--active');
    main.appendChild(popup);
    document.addEventListener('keydown', onPopupEscPress);

    let popupClose = document.querySelector('.popup__close');
    popupClose.addEventListener('click', closePopup);

    let calcBtn = document.querySelector('.popup__calc');
    calcBtn.addEventListener('click', openCalc);

    let choiceList = document.querySelector('.choice__list');
    choiceList.addEventListener('click', changeChoice);

    let form = document.querySelector('.popup__form');
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    })
  };

  let closePopup = function () {
    let popup = document.querySelector('.popup');
    popup.remove();

    mainBtn.classList.remove('visually-hidden');
    main.classList.remove('main--active');

    document.removeEventListener('keydown', onPopupEscPress);
    mainBtn.addEventListener('click', openPopup);
  };


  let openCalc = function () {
    let form = document.querySelector('.popup__form');
    let choice = document.querySelector('.choice');
    let wage = document.querySelector('.wage__input');

    if (wage.value) {
      let currentCalc = document.querySelector('.calc');

      if (currentCalc) {
        currentCalc.remove();
      }

      window.form.calc();

      let calc = document.querySelector('#calc').content.cloneNode(true);
      form.insertBefore(calc, choice);

      window.form.removeSums();
    }
  }

  let changeChoice = function (evt) {
    if (evt.target.tagName === 'BUTTON') {
      evt.target.classList.toggle('choice__button--active');
    }
  }

  mainBtn.addEventListener('keydown', function (evt) {
    if (evt.key === EvtKeys.ENTER) {
      mainBtn.removeEventListener('click', openPopup);
      openPopup();
    }
  });

  main.addEventListener('keydown', function (evt) {
    if (evt.key === EvtKeys.ESCAPE) {
      closePopup();
    }
  });

  mainBtn.addEventListener('click', openPopup);
})();
