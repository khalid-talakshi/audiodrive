import { client } from "./client";
import dotenv from "dotenv"

dotenv.config()

export const getBooksFromDB = async() => {
    await client.connect()
    const booksCollection = client.db(process.env.MONGODB_DB).collection("books")
    const books = await booksCollection.find().toArray()
    return books
}