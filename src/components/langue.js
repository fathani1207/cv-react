import { useState } from 'react';
import './style_formulaire.css'

function Langue({user,setUser}){
    const [langue,setLangue]=useState([]);
	const handleAdd=()=>{
		const abc =[...langue,[]]
		setLangue(abc)
		}
	
	const handleChangeLangue=(onChangeValue,i)=>{
		const inputdata = [...langue];
		inputdata[i]= onChangeValue.target.value;
		setLangue(inputdata);
	}
	console.log(langue,"data");
    return(
        <>
            <h2 className='bar'>Vos langues :</h2>
			<label style={{fontSize : "30px"}}>langue/Niveau : </label><br/>
			<input type={"button"} value={"ajouter"} className='btn' onClick={()=>handleAdd()}></input><br></br>
            {
                langue.map((data,i)=>{
					return(
						<input placeholder='langue : lit/écrit/parlé ?' onChange={e=>{
							handleChangeLangue(e,i); 
							setUser({...user,langue})}} 
							required>
								
							</input>
					)
	
				}
				)
            }
        </>
    )
}

export default Langue;