const faker = require("faker");
console.log(faker.datatype.uuid());
const express = require("express");
const app = express();
const port = 8000;

// creating a faker variable

const userObject = () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.interet.email(),
    password: faker.inter.password(),


})

const gerateCompayObject = () => ({
    _id: faker.datatype.uuid(),
    name: faker.address.cityName(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
})

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json());
app.use( express.urlencoded({ extended: true }));


app.get('/api/user/new', (request, response) =>{
    const newUser = userObject()
    request.json(newUser)
})


// this needs to be below the other code blocks 
// we have to tell express what port to listen at
app.listen( port, () => console.log(`Listening on port: ${port}`) );