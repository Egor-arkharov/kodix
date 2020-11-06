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
    main.appendChild(popup);

    let popupClose = document.querySelector('.popup__close');

    document.addEventListener('keydown', onPopupEscPress);
    popupClose.addEventListener('click', closePopup);
  };

  let closePopup = function () {
    var popup = document.querySelector('.popup');

    mainBtn.classList.remove('visually-hidden');
    popup.remove();
    document.removeEventListener('keydown', onPopupEscPress);
    mainBtn.addEventListener('click', openPopup);
  };

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
