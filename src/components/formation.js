
import { useState } from 'react';
import './style_formulaire.css'


function Forinfo ({user,setUser}){
	const [formation,setFormation]=useState([]);
	const handleAdd=()=>{ // nous permet d'ajouter des nouveaux inputs
		const abc =[...formation,[]]
		setFormation(abc)
		}
	
	const handleChange=(onChangeValue,i)=>{
		const inputdata = [...formation];//nous permet de stocker les données de chaque input ajouter
		inputdata[i]= onChangeValue.target.value;
		setFormation(inputdata);
	}
	console.log(formation,"data");
	
    return (
			<>
			<h2 className='bar'>formation</h2>
			<label style={{fontSize : "30px"}}>formation : </label><br></br>
			<input type={"button"} value ={"ajouter"} className='btn' onClick={()=>handleAdd()}></input><br></br><br></br>
			{
				formation.map((data,i)=>{
					return(
						<input placeholder='entrer votre formation.' onChange={e=>{
							handleChange(e,i);
							setUser({...user,formation})
						}}
						required></input>
					)
	
				}
				)
			}
			</>

    );

}

export default Forinfo;