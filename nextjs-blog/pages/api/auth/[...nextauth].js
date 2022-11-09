import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    pages: {
        signIn: "/statpages/login"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            guardian: "false",
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {

                if(credentials.username === "abc" && credentials.password === "test") {
                    return {
                            name: credentials.username,
                            guardian: "true"
                    }
                }
                if(credentials.username === "123" && credentials.password === "123") {
                    return {
                            name: credentials.username,
                            guardian: "false"
                    }
                }

                return null
            }
        })
    ],
}

export default NextAuth(authOptions)