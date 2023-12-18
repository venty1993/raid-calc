
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://venty:Q11I2igGYt2tv0Ei@cluster0.wqunpna.mongodb.net/?retryWrites=true&w=majority";
const db = 'raid-calc';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function insertDocument(collectionName: string, document: any) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    
    const database = client.db(db);
    const collection = database.collection(collectionName);
    const result = await collection.insertOne(document);
    console.log(result.insertedId);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function findDocument(collectionName: string, query: any ={} ) {
  try {
    await client.connect();
    const database = client.db(db);
    const collection = database.collection(collectionName);
    const documnets = await collection.find(query).toArray();
    return documnets;
  }
  finally {
    await client.close();
  }
}

async function updateDocument(collectionName: string, filter: any, update: any) {
  try {
    await client.connect();
    const database = client.db(db);
    const collection = database.collection(collectionName);
    const result = await collection.updateOne(filter, { $set: update });
    console.log(`업데이트된 문서 수: ${result.modifiedCount}`);
  } catch (error) {
    console.error('문서 업데이트 중 에러:', error);
  } finally {
    await client.close();
  }
}

export default {insertDocument, findDocument, updateDocument};
