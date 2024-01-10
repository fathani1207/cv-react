import {useState} from "react";
import './style_formulaire.css'

function Personnalite({user,setUser}){
    const [personnalite,setPersonnalite]=useState([]);
	const handleAdd=()=>{
		const abc =[...personnalite,[]]
		setPersonnalite(abc)
		}
	
	const handleChange=(onChangeValue,i)=>{
		const inputdata = [...personnalite];
		inputdata[i]= onChangeValue.target.value;
		setPersonnalite(inputdata);
	}
	console.log(personnalite,"data");

    return (
        <>
        <h2 className='bar'>Personnalité</h2>
        <label style={{fontSize : "30px"}}>Personnalité : </label><br></br>
        <input type={"button"} value ={"ajouter"} className='btn' onClick={()=>handleAdd()}></input><br></br><br></br>
        {
            personnalite.map((data,i)=>{
                return(
                    <input placeholder='entrer une de votre qualité.' onChange={e=>{
                        handleChange(e,i);
                        setUser({...user,personnalite})
                    }}
                    required></input>
                )

            }
            )
        }
        </>

);
}

export default Personnalite;