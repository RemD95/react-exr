import { useRef } from "react";

const UncontrolledInput = ()=>{
 const inputRef = useRef();
 const handleButton = ()=> {
  if(inputRef.current){
    const inputValue = inputRef.current.value;
    alert('Hai digitato : ${inputValue}')
  }
 }
   return(
        <>
        <input type="text"  ref={inputRef}/>

        <button onClick={handleButton}>Accetta</button>
        </>
    )
}

export default UncontrolledInput