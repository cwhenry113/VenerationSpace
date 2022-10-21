import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    pages: {
        signIn: "/statpages/login"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {

                if(credentials.username === "abc" && credentials.password === "test" || credentials.username === "123" && credentials.password === "123") {
                    return {
                            name: credentials.username
                    }
                }

                return null
            }
        })
    ],
}

export default NextAuth(authOptions)