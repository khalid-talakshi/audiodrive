export const typeDefs = `
type AudioBook {
    _id: ID!
    name: String!
    cover: String
}

type Query {
    info: String!
    books: [AudioBook]!
}
`