// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve).

// The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. 
// Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

/** Code */

// Define the base class Human
class Human {
    constructor(name) {
      this.name = name;
    }
}
  
// Define the Man class as a subclass of Human
  class Man extends Human {
    constructor(name = 'Adam') {
      super(name); // Call the constructor of the parent class Human
    }
}
  
// Define the Woman class as a subclass of Human
  class Woman extends Human {
    constructor(name = 'Eve') {
      super(name); // Call the constructor of the parent class Human
    }
}
  
// Define the God class
  class God {
    /**
     * @returns Human[]
     */
    static create() {
      const adam = new Man();   // Create an instance of Man
      const eve = new Woman();  // Create an instance of Woman
      return [adam, eve];       // Return them in an array
    }
}
  
// Example usage
  const [adam, eve] = God.create();
  console.log(adam); // Output: Man { name: 'Adam' }
  console.log(eve);  // Output: Woman { name: 'Eve' }
  