import React,{useState} from "react";
function EmployeeList(){
    const[employee]=useState([
        {
            id:101,
            name:"Mohan",
            age:25,
            salary:25000,
        },
        {
            id:102,
            name:"Sam",
            age:27,
            salary:28000,
        },
        {
            id:103,
            name:"Sharmila",
            age:29,
            salary:30000,
        },
    ]);
    return(
        <div>
            <h1>EmployeeList</h1>
            <hr></hr>
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>SALARY</td>
                </tr>
                <tr>
                <ul style={{listStyle:"none"}}>
                {employee.map((e)=>(
                    <li key={e.id}>
                       <td><h2>ID:{e.id}</h2></td> 
                        <td><p>Name:{e.name}</p></td>
                        <td><p>Age:{e.age}</p></td>
                        <td><p>Salary:{e.salary}</p></td>
                    </li>
                ))}
            </ul>
                </tr>
            </table>
            
        </div>
    )
}
export default EmployeeList;