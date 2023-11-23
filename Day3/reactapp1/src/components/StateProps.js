import {useState} from "react";
function StateProps() {
    const[name,setName]=useState("Himalini");
    const[num,setNum]=useState("727722EUIT068");
    const[n,setN]=useState(1);
    const[dep,setDep]=useState({dept:"Information Technology",class:"IT-A"});
    const[college,setCollege]=useState("Sri Krishna College of Engineering and Technology");
    const[student,setStudent]=useState({name: "Himalini S",age: 18});
    const nameHandler = () =>{
        setName("Himalini S");
    };
    const numHandler=()=>{
        let value=n;
        setN(++value);
    };
    return(
        <div>
            <h1>State and Props</h1>
            <hr></hr>
            <h2>Hi {name}</h2>
            <h2>Register Number is {num}</h2>
            <h2>
                Student name is {student.name} and age is {student.age}
            </h2>
            <h2>Department : {dep.dept}</h2>
            <h2>Class : {dep.class}</h2>
            <h2>College : {college}</h2>
            <h2>N is {n}</h2>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={numHandler}>Increment Number</button>
        </div>
    );
}
export default StateProps;