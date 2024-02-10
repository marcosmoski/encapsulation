function encapsulationFunction () { 
  test = ""

  this.getTest = function () {
    return test;
  }

  this.setTest = function (newValue) { 
    test = newValue
  }

  this.consoleTest = function () { 
    console.log(this.getTest())
  }
}

const example = new encapsulationFunction();
example.setTest("22123123")
example.consoleTest();