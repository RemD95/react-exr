// "/about" -> http://localhost:PORT/about

import { useNavigate } from "react-router-dom";
import Card from "./components/Card";
const About = ()=>{
  const navigate = useNavigate();
    
  const handleClick =() => {;
    navigate("/")
}  
    return (
        <>
        <h1>About</h1>
        <Card>
        <h2>Titolo 2</h2>
        <p>Paragrafo della card</p>
      </Card>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, neque!</p>
        </div>
        <button onClick={handleClick}>Go To Homepage</button>
        </>
    )
}

export default About