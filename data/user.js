require.config({
  baseUrl: "/another/path",
  paths: {
      "some": "some/v1.0"
  },
  waitSeconds: 15
});
require( ["some/module", "my/module", "a.js", "b.js"],
  function(someModule, myModule) {
      //This function will be called when all the dependencies
      //listed above are loaded. Note that this function could
      //be called before the page is loaded.
      //This callback is optional.
  }
);

// const faker = require('faker');
// const fs = require('fs');

function createUsers(obj){
  let usersObj =obj;
  let key = 'info';
  usersObj[key] = [];
  console.log('Create users');
  for (let i=1; i<6; i++) {
    const user = new User();
    user.id = i.toString();
    usersObj[key].push(user);
  }
  
  function User (){
    this.firstName = faker.name.firstName(),
    this.lastName = faker.name.lastName(),
    this.age = Math.floor(Math.random() * (104)) + 1,
    this.address = faker.address.streetAddress(),
    this.state = faker.address.state(),
    this.favoriteColor = faker.commerce.color(),
    this.jobTitle = faker.name.jobTitle(), 
    this.luckyNumber = Math.floor(Math.random() * (100)) + 1,
    this.employer = faker.company.companyName(),
    this.motto = faker.company.catchPhrase()
  }
  
  // fs.writeFile('./data/users.json', JSON.stringify(usersObj, null, 2), function () {
  //   console.log("Users created!");
  // });

  self.postMessage(userObj);
}


