
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://venty:Q11I2igGYt2tv0Ei@cluster0.wqunpna.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    
    const database = client.db('raid-calc');
    const collection = database.collection('user');

    const result = await collection.insertOne({
      name:'븐대장',
      age : 31,
    })


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
