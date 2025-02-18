"use server";
import { signIn } from "@/auth";
import connectDB from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";


export const login = async(formData : FormData): Promise<void> =>{
    const email = formData.get('email') as string //name field
    const password = formData.get('password') as string //name field

    try {

        await signIn('credentials',{
            redirect : false,
            callbackUrl : "/",
            email,
            password
        }) //google or github or 
        
    } catch (error) {
        const someError = error as CredentialsSignin
        console.error(someError.cause);
    }

    redirect("/")
}

const register = async (formData: FormData) => {
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  //existing user

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ firstName, lastName, email, password: hashedPassword });
  console.log(`User created successfully ✅`);
};

export default register;
