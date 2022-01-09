import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"

export default NextAuth({
    // Configure one or more authentication providers
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
})