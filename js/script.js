" use strict ";

function Pet (name) {

    this.name = name;

    this.speak = function () {
        return "I am a pet called: " + name;
    };

};

function Dog (name) {
    this.base = Pet;
    this.base(name);
    this.speak = function () {
          return "Woof"
    };
};


function Cat (name) {
    this.base = Pet;
    this.base(name);
    this.speak = function () {
          return "Meow"
    };
};

function Bird (name) {
    this.base = Pet;
    this.base(name);
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
    var pets = [];
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      switch (type.toLowerCase()) {
          case "dog":
            pets.push(new Dog(name));
            break;
          case "cat":
            pets.push(new Cat(name));
            break;
          case "bird":
            pets.push(new Bird(name));
            break;
      }

      display.innerHTML = pets[0].name + ": " + pets[0].speak();
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
