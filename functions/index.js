import functions from "firebase-functions";

// // Create and Deploy Your First Cloud Functions

const hours12Delete=['fixtures','events','lineups','predictions','']
const hours24Delete=['leagues','players','squad','team','topScorers','trophies']

import * as dotenv from 'dotenv';
import express from 'express'
import footballRouter from './routers/football.js'
import cors from 'cors'
dotenv.config();
const app = express();
import admin from 'firebase-admin';
import {deleteCollection} from "./firestore/delete.js";
admin.initializeApp();
app.use(cors({ origin: '*' }));

app.use('/football',footballRouter);
exports.twelveDelete = functions.pubsub.schedule('every 12 hours').onRun((context) => {
  hours12Delete.forEach(coll=>deleteCollection(coll))
  return null;
});
exports.twentyFourDelete = functions.pubsub.schedule('every 24 hours').onRun((context) => {
  hours24Delete.forEach(coll=>deleteCollection(coll))
  return null;
});
export default functions.https.onRequest(app);
