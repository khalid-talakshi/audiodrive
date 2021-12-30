import { getBooks } from "./resolverFunctions"

export const resolvers = {
    Query: {
        info: () => "This is AudioDrive",
        books: getBooks
    }
}