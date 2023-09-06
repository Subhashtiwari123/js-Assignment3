// Deelop a program that ;ccepts ;n object and a property name, and checks if the object has the specified
// property

function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
  }
  
  const exampleObject = { name: "Alice", age: 25 };
  console.log(hasProperty(exampleObject, "age")); 
  console.log(hasProperty(exampleObject, "email")); 
  