import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGODB_USER)
console.log(process.env.MONGODB_PWD)

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@cluster0.2tiv8.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`

// const uri = process.env.MONGODB_URL;

console.log(uri);

const client = new MongoClient(uri);

export { client };