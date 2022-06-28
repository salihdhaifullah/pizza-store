import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            
            credentials: {
                username: { label: "Username", type: "text", placeholder: "john", required: true },
                email: { label: "Email", type: "email", placeholder: "john@email.com", required: true },
                password: { label: "Password", type: "password", placeholder: "password....", required: true },
            },

            async authorize(credentials, req) {

                const name: string | undefined = credentials?.username;
                const password: string | undefined = credentials?.password;
                const email: string | undefined = credentials?.email;
                const user = { password, name, email }

                if (user) {
                    return user
                } 
                else {
                    return null
                }
            }
        }),

        GoogleProvider({

            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),

        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        })

    ],
    callbacks: {
        

        async jwt({ token, user }) {
            if (token) {
                // the user comes from the database its now a null
                token.id = user?.id;
            }
            return token
        },

        async session({session, token }) {
            if (token) {
                session.id = token.id;
            }
            return session
        },

        async redirect({ baseUrl }) {
            return baseUrl
        }
    },

    secret: process.env.SECRET_KEY || "",

    jwt: {
        secret: process.env.SECRET_KEY || "",
    },

    theme: {
        colorScheme: "light",
        brandColor: "#0096FF",
        logo: "" 
    }
})

