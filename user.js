const faker = require('faker');

function User (){
  this.firstName = faker.name.firstName(),
  this.lastName = faker.name.lastName(),
  this.dob = faker.date.past(), 
  this.address = faker.address.streetAddress(),
  this.city = faker.address.city(),
  this.state = faker.address.state(),
  this.favoriteColor = faker.commerce.color(),
  this.jobTitle = faker.name.jobTitle(), 
  this.luckyNumber = faker.random.number(),
  this.employer = faker.company.companyName(),
  this.motto = faker.company.catchPhrase()
}

const createUsers = () => {
  const allUsers = [];
  for (let i=1; i<5; i++) {
    const user = new User();
    user.id = i;
    console.log(JSON.stringify(user));
    allUsers.push(user);
  }
  return allUsers;
}

createUsers();
