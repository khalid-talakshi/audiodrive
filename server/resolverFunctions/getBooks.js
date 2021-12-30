import { getBooksFromDB } from "../database";

async function getBooks(parent, args, context, info) {
    try {
        const books = await getBooksFromDB();
        return books;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

export { getBooks };