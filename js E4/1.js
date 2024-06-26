function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ': ' + obj[key]);
    }
  }
}

const exampleObject = {
  name: 'Danil',
  age: 19,
  job: 'Developer'
};

printOwnProperties(exampleObject);
