import React, {useState} from "react";
function ListItems()
{
 const [students]=useState([
    {
        id:1,
        name:"John",
        age:23,
    },
    {
        id:2,
        name:"Mike",
        age:23,
    },
    {
        id:3,
        name:"Jasmine",
        age:25,
    },
 ]);
 return(
    <div>
        <h1>ListItems</h1>
        <hr></hr>
        <ul style={{listStyle: "none"}}>
            {students.map((student)=>(
                <li key={student.id}>
                    <h2>ID:{student.id}</h2>
                    <p>Name:{student.name}</p>
                    <p>Age:{student.age}</p>
                </li>
            ))}
        </ul>
    </div>
 );
}
export default ListItems;