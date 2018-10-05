'use strict';

var modal = document.querySelector('.overlay');
modal.classList.remove('hidden');

var some = document.querySelector('.setup-similar');
some.classList.remove('hidden');

var wizards = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var createWizard = function (obj) {
  // var randomText = arr[0][key];

  var wizard = document.querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item').cloneNode(true);
  var wizardName = wizard.querySelector('p');
  var wizardColor = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');

  var name = obj.names[getRndInteger(0, obj.names.length)] + ' ' + obj.lnames[getRndInteger(0, obj.lnames.length)];
  var coatColor = obj.coatColor[getRndInteger(0, obj.coatColor.length)];
  var eyesColor = obj.eyesColor[getRndInteger(0, obj.coatColor.length)];

  wizardName.textContent = name;
  wizardColor.style.fill = coatColor;
  wizardEyes.style.fill = eyesColor;
  return wizard;
};

var wizard1 = createWizard(wizards);
var wizard2 = createWizard(wizards);
var wizard3 = createWizard(wizards);
var wizard4 = createWizard(wizards);


var wizardList = document.querySelector('.setup-similar-list');

wizardList.appendChild(wizard1.cloneNode(true));
wizardList.appendChild(wizard2.cloneNode(true));
wizardList.appendChild(wizard3.cloneNode(true));
wizardList.appendChild(wizard4.cloneNode(true));


