class EncapsulationClass { 
  name =  "";
  constructor() {}

  getName() { 
    // basically we can do any validation here, without affect how its used
    return this.name;
  }
  setName(name) { 
    // same here, we can have validations, and change the name only if it follows some rules for example 
  
    this.name = name;
  }


}

const instance = new EncapsulationClass();
instance.setName("Marcos")
console.log(instance.getName());