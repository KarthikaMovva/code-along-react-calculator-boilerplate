import "./App.css";
import { useState } from "react";


function App(){
  const[number,setnumber]=useState('')

  const displayonscreen = (event)=>{
let displayvalue=event.target.value;
let updatedvalue=number+displayvalue;

let operations=".+-/*";

for(let i=0; i<updatedvalue.length; i++){

  if(
    operations.includes(updatedvalue[i]&&operations.includes(updatedvalue[i+1]))){
      updatedvalue=updatedvalue.slice(0,-1);
    }
  
}
setnumber(updatedvalue)
  }

  const deleteclicked=()=>{
    let deletedvalue=number.slice(0,-1)
    setnumber(deletedvalue)
  }

return(
  <div className="total">
     <div className="input">{number}</div>
  <button className="start"  onClick={()=>{setnumber("")}}>AC</button>
  <button onClick={displayonscreen} value="/">/</button>
  <button onClick={displayonscreen} value="*">*</button>
  <button onClick={displayonscreen} value="2">2</button>
  <button onClick={displayonscreen} value="3">3</button>
   <button onClick={displayonscreen} value="1">1</button>
  <button onClick={displayonscreen} value="+">+</button>
 <button onClick={displayonscreen} value="5">5</button>
   <button onClick={displayonscreen} value="6">6</button>
 <button onClick={displayonscreen} value="4">4</button>
  <button onClick={displayonscreen} value="-">-</button>
 <button onClick={displayonscreen} value="8">8</button>
 <button onClick={displayonscreen} value="9">9</button>
 <button onClick={displayonscreen} value="7">7</button>
  <button onClick={displayonscreen} value=".">.</button>
 <button onClick={displayonscreen} value="0">0</button>
 <button onClick={()=>{deleteclicked()}}>Del</button>
 <button className="equal" onClick={()=>{let ans = eval(number).toString()
setnumber(ans)}}  value="=">=</button>
  </div>
)
}
export default App