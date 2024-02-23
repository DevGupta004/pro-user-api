const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://Dev:LdIsYJvaPchMNcbX@cluster0.hswlgym.mongodb.net/?retryWrites=true&w=majority'; // replace with your MongoDB connection string

app.use(express.json());

let db;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is your Node.js API with MongoDB!' });
});

app.post('/create', async (req, res) => {
  try {
    const { data } = req.body;
    const result = await db.collection('my-node-api').insertOne({ data });
    res.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/read', async (req, res) => {
  try {
    const result = await db.collection('my-node-api').find().toArray();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes for updating and deleting data as needed

async function startServer() {
  try {
    const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db(); // Set the database reference

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

startServer();
