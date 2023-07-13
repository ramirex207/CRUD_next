"use client"
import { useState } from "react";
export default function cuentas() {
    const[precio,setPrecio]=useState("22")
    const cantidad = 10;

    return (
        <div className="w-full bg-teal-500">
            <label>precio carne</label>
            
            <input type="number" value={precio} />

            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">Gasto</th>
                        <th className="text-right">Sabado</th>
                        <th className="text-right">Domingo</th>
                        <th className="text-right">total kg</th>
                        <th className="text-right">total bs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-left">fricase</th>
                        <td className="text-right">100</td>
                        <td className="text-right">200</td>
                        <td className="text-right">3000</td>
                        <td className="text-right">4000</td>
                    </tr>
                    <tr>
                        <th className="text-left">chicharron</th>
                        <td className="text-right">{cantidad}</td>
                        <td className="text-right">{precio}</td>
                        <td className="text-right">200</td>
                        <td className="text-right">440</td>
                    </tr>
                    <tr>
                        <th className="text-left">mote</th>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right">100</td>
                    </tr>
                    <tr>
                        <th className="text-left">Luz</th>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right">100</td>
                    </tr>
                    <tr>
                        <th className="text-left">refresco</th>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right">100</td>
                    </tr>
                    <tr>
                        <th className="text-left">total</th>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right"></td>
                        <td className="text-right">100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
