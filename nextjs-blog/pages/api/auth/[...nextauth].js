import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongo from '../../../utils/connectMongo';
import Account from '../../../models/account';
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
                const admin = "true";
                // find by username: credentials.username, password: credentials.password
                // if found then determine if admin and return admin and username
                const adminUser = await Account.findOne({"username": username, "password": password, "admin":admin});
                if(adminUser){
                  console.log("adminUser");
                  return {
                    name: credentials.username,
                    guardian:"true"
                  }
                }
                else{
                  const user = await Account.findOne({"username": username, "password": password});
                  if(user){
                    console.log("user");
                    return {
                      name: credentials.username,
                      guardian:"false"
                    }
                  }
                  else{
                    return(null);
                  }
                }
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