import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Cards from './tinderCards.js';

// App Config
const app = express()
const port = process.env.PORT || 8001

// Middlewares
app.use(express.json());
app.use(cors());

// Db Config
const connectionUrl = 'mongodb+srv://rivz-admin:0K3ZMVu8qnsT3rhQ@tinderdb.pccsz.mongodb.net/tinderDb?retryWrites=true&w=majority'

mongoose.connect(connectionUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('open', () => console.log('DB is Connected'))

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Welcome to Tinder Clone Backend by RivZ Tech'))

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))