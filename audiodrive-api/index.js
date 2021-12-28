import express from "express";
import { ApolloServer } from "apollo-server-express"
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import cors from "cors"

const app = express()

const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: false,
})

await apolloServer.start();

var corsOptions = {
    origin: "*",
    credentials: false, // <-- REQUIRED backend setting
};

apolloServer.applyMiddleware({
    app,
    path: "/graphql",
});

app.use(cors(corsOptions));

app.listen(4000, () => {
    console.log("server is running")
})