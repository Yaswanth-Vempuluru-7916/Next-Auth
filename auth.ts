// //!BULT-IN LOGIN PAGE 
import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDB from "./lib/db";
import { User } from "./models/User";
import bcrypt from "bcryptjs";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId : process.env.GITHUB_CLIENT_ID,
      clientSecret : process.env.GITHUB_CLIENT_SECRET
    }),
    Google({
      clientId : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET
    }),
    Credentials({
      name : 'Credentials',
      credentials : {
        email : {label : 'email' , type : "email"},
        password : {label : 'Password' , type : "password"},
      },
      // //!Taking the user details from /api/auth/signin and verifying with the credentials in the databse
      authorize : async (credentials)=>{
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if(!email || !password){
          throw new CredentialsSignin('Please provide both email & password')
        }

        await connectDB();

        const user = await User.findOne({email}).select("+password +role");

        if(!user){
          throw new CredentialsSignin({cause : "Invalid email or Password"})
        }
        
        if(!user.password){
          throw new CredentialsSignin({cause : "Invalid email or Password"})
        }

        const isMatched = await bcrypt.compare(password,user.password);

        if(!isMatched){
          throw new Error("Password did not match")
        }

        const userData = {
          firstName : user.firstName,
          lastName : user.lastName,
          email : user.email,
          role : user.role,
          id : user._id
        }
        // //!Stores the data in the cookies
        return userData;
      }
    },
  
  ),
   
  ],

  pages : {
    signIn : '/login'
  }
})