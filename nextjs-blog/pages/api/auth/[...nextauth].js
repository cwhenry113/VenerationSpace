import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongo from '../../../utils/connectMongo';
connectMongo();
export const authOptions = {
    pages: {
        signIn: "/statpages/login"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            async authorize(credentials, req) {
                const username = credentials.username;
                const password = credentials.password;
                if(credentials.username === "abc" && credentials.password === "test") {
                    return {
                            name: credentials.username,
                            guardian:"true"
                    }
                }
                if(credentials.username === "123" && credentials.password === "123") {
                    return {
                            name: credentials.username,
                            guardian:"false"
                    }
                }

                return null
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
          // first time jwt callback is run, user object is available
          if (user) {
            token.guardian = user.guardian;
          }
    
          return token;
        },
        session: ({ session, token }) => {
          if (token) {
            session.guardian = token.guardian;
          }
    
          return session;
        },
      },
      jwt: {
        secret: "test",
        encryption: true,
      },
}

export default NextAuth(authOptions)