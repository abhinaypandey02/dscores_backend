import functions from "firebase-functions";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
import * as dotenv from 'dotenv';
import express from 'express'
import footballRouter from './routers/football.js'
import cors from 'cors'
dotenv.config();
const app = express();
import admin from 'firebase-admin';
admin.initializeApp();
app.use(cors({ origin: true }));

app.use('/football',footballRouter);
export default functions.https.onRequest(app);
