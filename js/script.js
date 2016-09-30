" use strict ";

function Pet (name) {

    this.name = name;

    this.speak = function () {
        return "I am a pet called: " + name;
    }

};

Dog.prototype = new Pet (name);
Cat.prototype = new Pet (name);
Bird.prototype = new Pet (name);

function Dog (name) {
    this.speak = function () {
          return "Woof"
    };
};

function Cat (name) {
    this.speak = function () {
          return "Meow"
    };
};

function Bird (name) {
    this.speak = function () {
          return "Squawk"
    };
};

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var textOut = type + " " + name + "<br />"
      display.innerHTML += textOut.speak();
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
