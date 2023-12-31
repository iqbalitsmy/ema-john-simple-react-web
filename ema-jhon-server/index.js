const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wtvr16j.mongodb.net/?retryWrites=true&w=majority`;

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

        const productCollection = client.db('emaJhonDB').collection('products');

        app.get('/products', async (req, res) => {
            // console.log(req.query.page)
            const page = parseInt(req.query.page) || 0;
            const limit = parseInt(req.query.limit) || 10;
            const skip = page * limit;
            const result = await productCollection.find().skip(skip).limit(limit).toArray();
            res.send(result);
        });

        app.post('/productsByIds', async (req, res) => {
            const ids = req.body;
            // const result = productCollection.find({ _id: { $in: ids.map(id => new ObjectId(id)) } }).toArray()
            const objectIds = ids.map(id => new ObjectId(id));
            const query = { _id: { $in: objectIds } };
            const result = await productCollection.find(query).toArray();
            // console.log(result);
            res.send(result);
        })

        app.get('/total-products', async (req, res) => {
            const result = await productCollection.estimatedDocumentCount();
            res.send({ totalProduct: result });
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('jhon is busy to shopping');
});

app.listen(port, () => {
    console.log(`Ema Jhon Server is running at port: ${port}`);
});