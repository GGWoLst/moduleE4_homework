function hasProperty(propName, obj) {
  return obj.hasOwnProperty(propName);
}

const exampleObject = {
  name: 'Danil',
  age: 19,
  job: 'developer'
};

console.log(hasProperty('name', exampleObject)); 
console.log(hasProperty('salary', exampleObject));
