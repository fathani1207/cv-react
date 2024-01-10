import React from "react";
import {useState} from 'react'
import './style_formulaire.css'

function Objectif ({user,setUser}){
    const [objectif,setObjectif]=useState([]);
	const handleAdd=()=>{
		const abc =[...objectif,[]]
		setObjectif(abc)
		}
	
	const handleChange=(onChangeValue,i)=>{
		const inputdata = [...objectif];
		inputdata[i]= onChangeValue.target.value;
		setObjectif(inputdata);
	}
	console.log(objectif,"data");

    return(
        <>
            <h2 className="bar">Objectif Personnel</h2>
			<label style={{fontSize : "30px"}}>votre objectif professionnelle :  </label><br/>
			<input type={"button"} className="btn" value={"ajouter"} onClick={()=>handleAdd()}></input><br></br>
            {
				objectif.map((data,i)=>{
					return(
						<textarea cols="40" rows="1" placeholder="décrire votre objetif professionnel." onChange={e=>{
							handleChange(e,i); 
							setUser({...user,objectif})}}
							required></textarea>
					)	
				}
				)
			}
        </>
    );

};

export default Objectif;