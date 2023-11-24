import { First } from "react-bootstrap/esm/PageItem";
import image44 from "./image44.png";


const FirstName = "diligent";
const LastName = "samuel"
const a = 20;
const b = 10;
const age = a+b;

function HelloComponent() {
    return(
        <div>
        <h1 style={{color:"Red" , Fontsize:"200px" }}>Hello my name is {FirstName} {LastName}</h1>
        <h4>i am {age} years old</h4>
        <p>this is my first page</p>
        <img src={image44} style={{width: "100px"}}/><br />
                <button style={{ backgroundColor: "brown", border:"none", borderRadius: "5px" ,color :"white" , width: "80px", height: "20px" }} >click me</button>
        </div>
    )
}

export default HelloComponent;