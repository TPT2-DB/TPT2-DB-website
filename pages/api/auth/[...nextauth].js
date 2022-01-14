import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import PlayerModel from "../../../lib/schemas/Player"
import clientPromise, { connectToDb } from "../../../lib/mongodb"
const mongoose = require("mongoose")

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
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log(user, account, profile, email, credentials)

            await connectToDb()

            try {
                const findUser = await PlayerModel.findOneAndUpdate(
                    {discordId: profile.id},
                    {
                        discordUser: {
                            username: profile.username,
                            discriminator: profile.discriminator,
                            bot: profile.bot,
                            accent_color: profile.accent_color,
                            avatar: {
                                url: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : "https://cdn.discordapp.com/embed/avatars/0.png",
                                hash: profile.avatar || "no_avatar"
                            }
                        }
                    },
                    { new: true}
                )
    
                if (!findUser) {
                    const newUser = await PlayerModel.create({
                        discordId: profile.id,
                        discordUser: {
                            id: profile.id,
                            username: profile.username,
                            discriminator: profile.discriminator,
                            bot: profile.bot,
                            accent_color: profile.accent_color,
                            avatar: {
                                url: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : "https://cdn.discordapp.com/embed/avatars/0.png",
                                hash: profile.avatar || "no_avatar"
                            }
                        },
                        rollerCoasters: []
                    })
                } 
            } catch (err) {
                console.error(err)
            }

            

            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, user, token }) {
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token
        }
    }
})