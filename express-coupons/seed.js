require("dotenv").config();
require("./db/index");

const faker = require('faker');
const User = require('./models/user');
const Category = require ('./models/category');
const Coupon = require ('./models/coupon');
const Review = require ('./models/review');

const seedData = async () => {
  try {
    // Create Users
    const users = [];
    for (let i = 0; i < 10; i++) { // Adjust the number of users as needed
      const user = new User({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        type: faker.random.arrayElement(['client', 'vendor', 'admin'])
      });
      users.push(user.save());
    }
    await Promise.all(users);

    // Create Categories
    const categories = [];
    for (let i = 0; i < 5; i++) { // Adjust the number of categories as needed
      const category = new Category({
        name: faker.commerce.department(),
        img: faker.image.imageUrl()
      });
      categories.push(category.save());
    }
    await Promise.all(categories);

    // Create Coupons
    const coupons = [];
    for (let i = 0; i < 20; i++) { // Adjust the number of coupons as needed
      const coupon = new Coupon({
        code: faker.random.alphaNumeric(10),
        discount: faker.random.number({ min: 5, max: 50 }),
        description: faker.lorem.sentence(),
        expirationDate: faker.date.future(),
        category: faker.random.arrayElement(categories)._id,
        vendor: faker.random.arrayElement(users)._id,
        img: faker.image.imageUrl()
      });
      coupons.push(coupon.save());
    }
    await Promise.all(coupons);

    // Create Reviews
    const reviews = [];
    for (let i = 0; i < 10; i++) { // Adjust the number of reviews as needed
      const review = new Review({
        comment: faker.lorem.paragraph(),
        rate: faker.random.number({ min: 1, max: 5 }),
        user: faker.random.arrayElement(users)._id,
        coupon: faker.random.arrayElement(coupons)._id
      });
      reviews.push(review.save());
    }
    await Promise.all(reviews);

    console.log("Data seeding complete.");

  } catch (err) {
    console.error(err);
  }
};

seedData();
