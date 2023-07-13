"use client"
import { useState } from 'react'
//importamos el hook de next-auth
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { set } from 'mongoose';


function LoginPage() {
    const [error,setError]=useState()
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
            const res = signIn("credentials",{
                username:datos.email,
                password:datos.password,
                redirect:false
            })
            const response = (await res).error
            console.log(res)
           
            if(!response){
                console.log("ok")
                return Router.push("/dashboard/profile")
            }else{
                setError("invalid credentials")
                console.log(response)
                return Router.push("/login")
            }
          
        } catch (error) {
            setError(error.response.data.message)
            console.error(error)
        }
    }
    
   
    
    


    return (
        <div className='justify-center h-[calc(100vh-4rem)] flex flex-col items-center'>
            
            <form onSubmit={handleSubmit} className='bg-sky-800 w-96 px-4 py-4 rounded-lg flex flex-col items-center text-slate-100'>
            {
                error && <p className='text-red-500'>{error}</p>
            }
                <h1>login</h1>
                <input type="email" placeholder='email' name='email' onChange={handleInputChange}       className='my-1 rounded-md bg-sky-950 px-2 py-1 placeholder:italic'  />
                <input type="password" placeholder='password' name='password' onChange={handleInputChange} className='my-1 rounded-md bg-sky-950 px-2 py-1 placeholder:italic'  />
                <button>enviar</button>
            </form>
            

        </div>
    )
}

export default LoginPage