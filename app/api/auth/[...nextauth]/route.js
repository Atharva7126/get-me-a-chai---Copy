import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import mongoose from "mongoose";
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'

export const authoptions = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email }) {
            try {
                await connectDB();

                const currentUser = await User.findOne({ email: user.email });

                if (!currentUser) {
                    await User.create({
                        email: user.email,
                        username: user.email.split("@")[0],
                    });
                }

                return true;
            } catch (err) {
                console.error("Error in signIn callback:", err);
                return false; // 👈 Prevents crash
            }
        },


        async session({ session }) {
            try {
                await connectDB();
                const dbUser = await User.findOne({ email: session.user.email });

                if (dbUser?.username) {
                    session.user.name = dbUser.username;
                }

                return session;
            } catch (err) {
                console.error("Session callback error:", err);
                return session;
            }
        }
        ,
    }
})

export { authoptions as GET, authoptions as POST }