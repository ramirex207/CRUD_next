import {dbConnect} from "@utils/conection";
import Suma from "../../../models/suma"


dbConnect();
export async function POST(req){
    
    try {
        const { num1,num2,suma} = await req.json();
        
        const newSuma= new Suma({"num1":num1,"num2":num2, "suma":suma})
        await newSuma.save();
        return new Response(newSuma)
    } catch (error) {
        console.error(error)
        return new Response('Error al realizar la solicitud', { status: 500 });
    }
}