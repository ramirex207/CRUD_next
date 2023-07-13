"use client"
import { useState } from "react";
export default function Prueba() {
    const [datos, setDatos] = useState({
        precio: '1',
        frica_cantidadS: '0',
        frica_cantidadD: '0',
        chicha_cantidadS:'0',
        chicha_cantidadD:'0',
        aumento_cantidadS:'0',
        aumento_cantidadD:'0',
        totalRefres:'',
        totalMote:'',
        totalAgua:'',
    });
    const [total, setTotal] = useState(0); // Estado para almacenar la suma
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value });
        console.log(value);
    };
    const sumaTotal = () => {
        const {frica_cantidadS,frica_cantidadD,precio,chicha_cantidadD,chicha_cantidadS,aumento_cantidadD,aumento_cantidadS,totalAgua,totalMote,totalRefres} = datos;
        const totales = ((parseFloat(frica_cantidadS)+parseFloat(frica_cantidadD)+parseFloat(chicha_cantidadS)+parseFloat(chicha_cantidadD)+parseFloat(aumento_cantidadS)+parseFloat(aumento_cantidadD))*parseFloat(precio))+parseFloat(totalAgua)+parseFloat(totalMote)+parseFloat(totalRefres);
        setTotal(totales); // Actualizar el estado con la suma calculada
    };
    const fila = 'bg-cyan-600 hover:bg-cyan-500 hover:text-slate-700'
    const entrada= "text-center bg-transparent w-16 text-base border-none focus:outline-none placeholder:text-xs placeholder-slate-300 placeholder:italic"

    return (
        <div className="text-white rounded-sm bg-cyan-600 p-4">
        <div className="flex content-center">

            <label className="ml-6 mr-2">Precio</label>
            <input
            name="precio"
            placeholder="precio"
            value={datos.precio}
            className="mr-2 text-center rounded-sm bg-sky-950  w-16 text-base border-none focus:outline-none placeholder:text-xs placeholder-slate-600 placeholder:italic"
            type="text"
            onChange={handleChange}
            />
            <button onClick={sumaTotal} className=" border border-sky-950 bg-sky-950 p-1 text-xs rounded-full hover:bg-sky-500">calcular</button>

        </div>
            <table className="mt-2 text-white text-xs font-mono">
                <thead className="text-center">
                    <tr className="bg-sky-950">
                        <th className="border-teal-500 border-r-2">GASTOS</th>
                        <th className="border-teal-500 border-r-2">Sabado</th>
                        <th className="border-teal-500 border-r-2">Domingo</th>
                        <th className="border-teal-500 border-r-2">Total kilos</th>
                        <th className="border-teal-500 border-r-2">total bs</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr className="bg-cyan-600 hover:bg-cyan-500 hover:text-slate-700">
                        <th className="w-28 pl-4 text-left border-r-2 border-cyan-100 ">Fricase</th>
                        <td className="w-28">
                        <input
                            name="frica_cantidadS"
                            placeholder="cantidad"
                            value={datos.cantidad}
                            className={entrada}
                            type="text"
                            onChange={handleChange}
                        />
                        </td>
                        <td>
                        <input
                            name="frica_cantidadD"
                            placeholder="cantidad"
                            value={datos.cantidad}
                            className={entrada}
                            type="text"
                            onChange={handleChange}
                        />
                        </td>
                        <td>{ parseFloat(datos.frica_cantidadS)+ parseFloat(datos.frica_cantidadD) }</td>
                        <td>{(parseFloat(datos.frica_cantidadS)+ parseFloat(datos.frica_cantidadD))*parseFloat(datos.precio)}</td>
                    </tr>
                    <tr className="bg-sky-800 hover:bg-cyan-500 hover:text-slate-700">
                        <th className="w-28 pl-4 text-left border-r-2 border-cyan-100">Chicharron</th>
                        <td>
                            <input
                                name="chicha_cantidadS"
                                placeholder="cantidad"
                                value={datos.cantidad}
                                className={entrada}
                                type="text"
                                onChange={handleChange}
                            />  
                        </td>
                        <td>
                            <input
                                name="chicha_cantidadD"
                                placeholder="cantidad"
                                value={datos.cantidad}
                                className={entrada}
                                type="text"
                                onChange={handleChange}
                            />  
                        </td>
                        <td>{parseFloat(datos.chicha_cantidadS) + parseFloat(datos.chicha_cantidadD)}</td>
                        <td>{(parseFloat(datos.chicha_cantidadS) + parseFloat(datos.chicha_cantidadD))*parseFloat(datos.precio)}</td>
                    </tr>
                    <tr className="bg-cyan-600 hover:bg-cyan-500 hover:text-slate-700">
                        <th className="w-28 pl-4 text-left border-r-2 border-cyan-100">Aumento</th>
                        <td>
                            <input
                                name="aumento_cantidadS"
                                placeholder="cantidad"
                                value={datos.cantidad}
                                className={entrada}
                                type="text"
                                onChange={handleChange}
                            /> 
                        </td>
                        <td>
                            <input
                                name="aumento_cantidadD"
                                placeholder="cantidad"
                                value={datos.cantidad}
                                className={entrada}
                                type="text"
                                onChange={handleChange}
                            /> 
                        </td>
                        <td>{parseFloat(datos.aumento_cantidadS)+parseFloat(datos.aumento_cantidadD)}</td>
                        <td>{(parseFloat(datos.aumento_cantidadS)+parseFloat(datos.aumento_cantidadD))*parseFloat(datos.precio)}</td>
                    </tr>
                    <tr className="bg-sky-800 hover:bg-cyan-500 hover:text-slate-700">
                        <th className="w-28 pl-4 text-left border-r-2 border-cyan-100">Mote</th>
                        <td>
                            <input
                                name="totalMote"
                                placeholder="cantidad"
                                value={datos.cantidad}
                                className={entrada}
                                type="text"
                                onChange={handleChange}
                            />
                        </td>
                        <th className="w-28 pl-4 text-left border-r-2 border-cyan-100">Totales</th>
                        <td>{parseFloat(datos.frica_cantidadS)+parseFloat(datos.frica_cantidadD)+parseFloat(datos.chicha_cantidadS)+parseFloat(datos.chicha_cantidadD)+parseFloat(datos.aumento_cantidadS)+parseFloat(datos.aumento_cantidadD)}</td>
                        <td>{(parseFloat(datos.frica_cantidadS)+parseFloat(datos.frica_cantidadD)+parseFloat(datos.chicha_cantidadS)+parseFloat(datos.chicha_cantidadD)+parseFloat(datos.aumento_cantidadS)+parseFloat(datos.aumento_cantidadD))*parseFloat(datos.precio)}</td>
                    </tr>
                    <tr className="bg-cyan-600 hover:bg-cyan-500 hover:text-slate-700">
                        <th className="w-28 pl-4 text-left border-r-2 border-cyan-100">Agua y Luz</th>
                        <td></td><td></td><td></td>
                        <td>
                            <input
                                name="totalAgua"
                                placeholder="cantidad"
                                value={datos.cantidad}
                                className={entrada}
                                type="text"
                                onChange={handleChange}
                                />
                        </td>
                    </tr>
                    <tr className="bg-sky-800 hover:bg-cyan-500 hover:text-slate-700">
                        <th className="w-28 pl-4 text-left border-r-2 border-cyan-100">refresco</th>
                        <td></td><td></td><td></td>
                        <td>
                            <input
                                name="totalRefres"
                                placeholder="cantidad"
                                value={datos.cantidad}
                                className={entrada}
                                type="text"
                                onChange={handleChange}
                                />
                        </td>
                    </tr>
                    <tr className="bg-cyan-500 hover:bg-cyan-500 text-slate-800">
                        <th className="w-28 pl-4 text-left border-r-2 border-cyan-100">Total</th>
                        <td></td><td></td><td></td>
                        <td>{total}</td>
                    </tr>
                </tbody>  
            </table>

        </div>
    );
}
