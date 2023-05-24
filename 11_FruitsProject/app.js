const mongoose = require("mongoose");

// Local DB
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Mongoose Model
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified..."],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Nice Fruit.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Good fruit",
});

pineapple.save();

const mango = new Fruit({
  name: "Mango",
  rating: 9,
  review: "Nagpur fruit",
});

mango.save();

Person.updateOne({ name: "Amy" }, { favouriteFruit: mango }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Best fruit",
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Sour fruit",
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird fruit",
});

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// Reading from DB
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Updating
// Fruit.updateOne(
//   { _id: "634186bdb7eb9adf2d48654a" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the db!");
//     }
//   }
// );

// Deleting
// Fruit.deleteOne({ name: "Peach" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document.");
//   }
// });

// Person.deleteMany({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all documents");
//   }
// });
