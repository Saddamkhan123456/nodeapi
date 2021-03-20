import * as dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();

// app configration

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const PORT = process.env.PORT || '5000';

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });