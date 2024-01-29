import axios from "axios";
import { useEffect, useState } from "react";


const Show=()=>{

  const [students,setstudents] =  useState([])

  async function fetchdata(){
    const result = await
    axios.get(" http://localhost:8988/students")
    setstudents(result.data);
  }

  useEffect(()=>{
    fetchdata()
  },[])


    return(
        <>
       <table style={{marginTop:100}} >
        <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Destination</th>
        </tr>
        {
students.map(obj=>{
    return(
        <tr>
            <td>{obj.name}</td>
            <td>{obj.mobile}</td>
            <td>{obj.destination}</td>
         
        </tr>
    )
})
        }
       </table>
        </>
    )
}
export default Show;