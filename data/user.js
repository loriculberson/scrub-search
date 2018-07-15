const faker = require('faker');
const fs = require('fs');

let usersObj = {};
let key = 'data';
usersObj[key] = [];

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

fs.writeFile('./data/users.json', JSON.stringify(usersObj, null, 2), function () {
  console.log("Users created!");
});


