var modal = document.querySelector('.overlay');
modal.classList.remove('hidden');

var wizards = {
    names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф'],
    lnames: ['Верон', 'Вальц']
};

/*var wizards =  [
    {
        name1: 'Иван',
        name2: 'Хуан Себастьян',
        name3: 'Мария',
        name4: 'Кристоф',
        name5: 'Виктор',
        name6: 'Юлия',
        name7: 'Люпита',
        name8: 'Вашингтон'     
    },
    {
        lname1: 'да Марья',
        lname2: 'Верон',
        lname3: 'Мирабелла',
        lname4: 'Вальц',
        lname5: 'Онопко',
        lname6: 'Топольницкая',
        lname7: 'Нионго',
        lname8: 'Ирвинг'    
    },
    {
        coatcolor1: 'rgb(101, 137, 164)',
        coatcolor2: 'rgb(241, 43, 107)',
        coatcolor3: 'rgb(146, 100, 161)',
        coatcolor4: 'rgb(56, 159, 117)',
        coatcolor5: 'rgb(215, 210, 55)',
        coatcolor6: 'rgb(0, 0, 0)',    
    },
    {
        eyesColor1: 'black',
        eyesColor2: 'red',   
        eyesColor3: 'blue',
        eyesColor4: 'yellow',
        eyesColor5: 'green',
    }
];*/

var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

var createCharacter = function(obj) {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    
    //var randomText = arr[0][key];
    var index = getRndInteger(0, obj.names.length);
    var randomText = obj.names[index];
    console.log(obj);
    console.log(obj.names);
    console.log(index);
    console.log(randomText);

    var item = makeElement('div', 'setup-similar-label', randomText);

    return item;
};

var place = document.querySelector('.setup-similar-list');
console.log(place);


var final = createCharacter(wizards);
console.log(final);


