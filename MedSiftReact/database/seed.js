
const fakeUsersData = [
    { username: 'Francis',  password: "franfran"},
    { username: 'Suraiya', password: "raiyaraiya"},
    { username: 'Rabia', password: 'rabiarabia'}
];

async function seedDatabase(client, collectionString) {
    
  const db = client.db('MedSiftDatabase');
  const collection = db.collection(collectionString);
  try {
    // await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    // console.log('Connected to MongoDB for seeding.');

    //first we empty the user table! :0
    await collection.deleteMany({});
    console.log('Cleared existing users.'); 

    //now we populate the user table! :)
    await collection.insertMany(fakeUsersData);
    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } 
}

export default seedDatabase;