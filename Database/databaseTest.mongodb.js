//How to use our mongoDB database! 
//For those of us using IntelliJ, I'm not sure if there is an extension for mongoDB 
//but you can always download the MongoDB Compass app that is basically just a GUI for 
//MongoDB stuff and will be helpful. 
//If you are using VSCode then you can just install the extension called "MongoDB for VS Code."
//Regardless of which route you take, you will be prompted to enter our connection string
//to access the database (which is hosted in the cloud so we aren't troubled with managing
//any local data).
//Our connection string looks like this: mongodb+srv://<db_username>:<db_password>@medsift.j5r1iba.mongodb.net/
//You will replace <db_username> with your username and <db_password> with your password.
//and that's it! You will be connected to our database and can begin querying! 

//THE FOLLOWING IS AN EXAMPLE of a "Playground" which is just their product jargon
//for a query environment where you can talk to the database using javascript.
//as you can see from the file explorer, the extension for these is .mongodb.js.
//I labeled this one databaseTest.mongodb.js.
//This instance 


// MongoDB Playground
// To disable or change this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds refer to https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
// MongoDB calls each 'collection' a database so technically our database will be as cluster of small databases by their terminology.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into a collection (this one is called 'sales').
db.getCollection('sales').insertMany([
  { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

// Run a find command to view items sold on April 4th, 2014. Also, the $gte and
//$lt are 'greater than or equal to' and 'less than' respectively. 
//this const is equal to the number of occurrences within the sales table that are greater than or equal to
//april 4th 2014 or less than (earlier) april 5th 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// this just prints a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// A cursor is just a pointer to the results of a query.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);
