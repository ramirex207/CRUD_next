"use client"
import {useSession,signOut} from 'next-auth/react'

function ProfilePage() {
    const {data:session, status} = useSession();
    console.log(session,status);
    return (
        <div> 
            <h1 className='font-bold text-slate-50 text-3xl'>Profile</h1>
            <pre className='text-white'>
                {
                    JSON.stringify({session,status},null,2)
                }
            </pre>
        <button onClick={()=>signOut()}>
                logout
        </button>
        </div>
    )
}

export default ProfilePage