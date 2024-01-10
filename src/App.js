import Form from "./components/form"
import { useState } from "react"
import Cv from "./cv_final/cv"

function App(){
    const [display,setDisplay ] = useState(false)  
    const[userinfo,setUserinfo]= useState({});
    return(
        <>
        {
            !display ? 
            <Form setDisplay={setDisplay} user={userinfo} setUser={setUserinfo}/> : 
            <Cv user={userinfo}/>
        }
        </>
       )

}; 

export default App
