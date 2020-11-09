'use strict';

(function () {

  let MONTHS = 12;
  let TAX = 0.13
  let MAX_PAYMENT = 260000;

let calc = function () {
  let calc = document.querySelector('#calc').content;

  let sum1Year = calc.querySelector('[for="1-year"] .calc__sum');
  let sum2Year = calc.querySelector('[for="2-year"] .calc__sum');
  let sum3Year = calc.querySelector('[for="3-year"] .calc__sum');
  let sum4Year = calc.querySelector('[for="4-year"] .calc__sum');

  let sumYears = [sum1Year, sum2Year, sum3Year, sum4Year];

  let wage = document.querySelector('.wage__input');
  let wageValue = wage.value;

  let payment = Math.floor(wageValue * MONTHS * TAX);

  let currentSum = 0;

  for (let i = 0; i < sumYears.length; i++) {
    if (currentSum + payment >= MAX_PAYMENT) {
      sumYears[i].innerHTML = (MAX_PAYMENT - currentSum).toLocaleString('ru') + ' рублей';
    } else {
      sumYears[i].innerHTML = payment.toLocaleString('ru') + ' рублей';
    }

    currentSum += payment;
  }
}

let removeSums = function () {
  let sums = document.querySelectorAll('.calc__sum');

  for (let i = 0; i < sums.length; i++) {
    let num = sums[i].innerHTML;

    if (isNaN(parseInt(num[0])) || parseInt(num[0]) === 0) {
      sums[i].parentElement.parentElement.remove();
    }
  }
}

window.form = {
  calc: calc,
  removeSums: removeSums,
};

})();
