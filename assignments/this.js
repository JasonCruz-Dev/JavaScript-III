// * 1. WINDOW / GLOBAL OBJECT BINDING
// * When in the global scope, the value of “this” will be the window/console Object;
// * window binding is like the forest of trees, not sure which one we are pointing at, so we point that the forrest

function hello(name){
   console.log('Hello ' + name);
   console.log(this)
}

hello('Jason');

// * 2. IMPLICIT BINDING - (Automatic) with Objects and Methods
// * Whenever a function is called by a preceding dot, the object before that dot is this.

const student = {
   id: 7823,
   name: 'Jason',
   greeting: 'Hello ',
   class: function(data){
      console.log(this.greeting + data);
      console.log(this);
   }
}

student.class('Jason')

// * 3. NEW BINDING
// * Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

function Welcome(greeter) {
   this.greeting = "Bueno dias!";
   this.greeter = greeter;
   this.speak = function() {
      console.log( `${this.greeting} ${this.greeter}`);
   }
};

let greetJason = new Welcome('Jason');
let greetSylvia = new Welcome('Sylvia');

const spanishGreeter = new Welcome("Jason");

spanishGreeter.speak();
greetJason.speak();
greetSylvia.speak();

// * Principle 4

// * 4. EXPLICIT BINDING
// * Explicit Bindings are for functions, when JavaScript calls, applies, or binds method is used, this is explicitly defined. You can force a function call to use a particular object for this binding, without putting a property function reference on the object, so we explicitly say to a function what object it should use for this.

function sayHello(){
   console.log(this.name);
}

let person ={ 
   name: 'Ruben',
}

sayHello.call(person);
