"use client"
import { useState } from "react";

export default function Sumas() {
    const [nombre, setNombre] = useState("");
    const [email,setEmail]=useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch("/api/user", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: nombre, email:email }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Solicitud enviada con éxito",data);
            // Aquí puedes realizar alguna acción adicional después de enviar la solicitud
        } else {
            console.error("Error al enviar la solicitud");
            // Aquí puedes manejar el error de acuerdo a tus necesidades
        }
        } catch (error) {
        console.error(error);
        // Aquí puedes manejar el error de acuerdo a tus necesidades
        }
    };

    return (
        <div className="bg-sky-950 w-60 h-60 flex flex-col justify-center items-center rounded-lg">
            <input className="mb-2 w-44" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input className="mb-2 w-44" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleSubmit} className="bg-sky-800 w-16 h-6 rounded-3xl text-slate-100 flex justify-center items-center hover:bg-sky-500 font-serif hover:text-sky-950">enviar</button>
        </div>
      
    );
}
