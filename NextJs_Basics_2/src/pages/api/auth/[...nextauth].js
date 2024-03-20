import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LinkedinProvider from "next-auth/providers/linkedin";
import { mongoDb } from "../../../../lib/mongoDb";


export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ,
      clientSecret:process.env.GOOGLE_SECRET,
    }),
    // LinkedinProvider({
    //   clientId: process.env.LINKEDIN_ID,
    //   clientSecret: process.env.LINKEDIN_SECRET
    // }),
  ],
  callbacks : {
    async session({session}){
        return session
    },
    async signIn({profile}){
        console.log(profile);
        try{
            await mongoDb();
            return true
          } catch(err){
            console.log("error : ", err);
            return false
          }
    }
  }
};


export default NextAuth(authOptions);
export { NextAuth as GET, NextAuth as POST };

