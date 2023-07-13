import User from '@models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { dbConnect } from '@utils/conection';

dbConnect();

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        if(!password || password.length < 6){
        return NextResponse.json(
            {
            message:"password must be least 6 characteres",
            },
            {
            status:400,
            }
        )
        }
        const userFound = await User.findOne({email});
        if(userFound){
            return NextResponse.json(
            {
                message:"the email already exists",
            },
            {
                status:400,
            }
            );
        }
        const hashedPassword = await bcrypt.hash(password,12);
        const user = new User({ name, email,password:hashedPassword });
        await user.save();
        return NextResponse.json(user)
        }catch (error) {
        //return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        return NextResponse.error(new Error(error.message), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}