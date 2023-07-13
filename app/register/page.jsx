"use client"
import { useState } from 'react'
import axios from 'axios'
//importamos el hook de next-auth
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


function page() {
    const [error, setError] = useState();
    const [datos, setDatos] = useState({
        name:'',
        email:'',
        password:''
    })
    const Router = useRouter();

    const handleInputChange = (event) => {
        const {name,value}=event.target
        setDatos({...datos,[name]:value})
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/user",datos)
            console.log(response)
            const res = signIn("credentials",{
                username:datos.email,
                password:datos.password,
                redirect:false
            })
            if((await res).ok){
                console.log("ok")
                return Router.push("/dashboard/profile")
            }
            else{
                return Router.push("/login")
            }
            

        } catch (error) {
            setError(error.response.data.message)
            console.error(error)
        }
    }
    return (
        <div className='justify-center h-[calc(100vh-4rem)] flex items-center'>
            <form onSubmit={handleSubmit} className='bg-sky-800 w-96 px-4 py-10 rounded-lg flex flex-col items-center text-slate-100'>
                <h1>REGISTER</h1>
                {error && <p className='text-red-500'>{error}</p>
                    
                }
                <input type="text" placeholder='name' name='name' onChange={handleInputChange}         className='my-1 rounded-md bg-sky-950 px-2 py-1 placeholder:italic'  />
                <input type="email" placeholder='email' name='email' onChange={handleInputChange}       className='my-1 rounded-md bg-sky-950 px-2 py-1 placeholder:italic'  />
                <input type="password" placeholder='password' name='password' onChange={handleInputChange} className='my-1 rounded-md bg-sky-950 px-2 py-1 placeholder:italic'  />
                <button>enviar</button>
            </form>
            

        </div>
    )
}

export default page