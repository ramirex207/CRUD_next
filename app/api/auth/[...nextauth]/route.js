import NextAuth from "next-auth"
import  CredentialsProvider from "next-auth/providers/credentials"
import { dbConnect } from "@utils/conection"
import User from "@models/user"
import bcrypt from "bcrypt";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
        
            name: 'Credentials',
            credentials: {
                username: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder:"*******" }
            },
            async authorize(credentials,req) {
                try {
                    await dbConnect();
                    //console.log(credentials)
    
                    const userFound = await User.findOne({email: credentials?.username}).select("+password");
                    //console.log(userFound)
                    
                    if(!userFound) throw new Error("User not found");
                    
                    const isMatch = await bcrypt.compare(credentials.password,userFound.password);
                    //console.log(isMatch)
                    if(!isMatch) throw new Error("Password incorrect");
                    return userFound;
                    
                } catch (error) {
                    console.log(error)
                }
            },
        }),

        
    ],
    callbacks: {
        jwt({account,token,user,session,profile}){
            if(user) token.user = user;
            return token;
        },
        session({session,token}){
            session.user = token.user;
            console.log(session,token)
            return session;
        }
    },
    pages: {
        signIn: '/login',
    },  
})

export { handler as GET, handler as POST }