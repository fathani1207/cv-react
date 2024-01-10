import {useState} from 'react'
import './style_formulaire.css'

function ExpPro({user,setUser}){
	const [expPro,setExpPro]=useState([]);
	const handleAdd=()=>{
		const abc =[...expPro,[]]
		setExpPro(abc)
		}
	
	const handleChange=(onChangeValue,i)=>{
		const inputdata = [...expPro];
		inputdata[i]= onChangeValue.target.value;
		setExpPro(inputdata);
	}
	console.log(expPro,"data");
    return(
        <>
			<h2 className="bar">Experience professionnelle</h2>
			<label style={{fontSize : "30px"}}>Experience professionnelle : </label><br></br><br></br>
			<input type={"button"} value ={"ajouter"} className='btn' onClick={()=>handleAdd()}></input><br></br>
			{
				expPro.map((data,i)=>{
					return(
						<textarea cols="40" rows="1" placeholder="decrire votre parcours professionnelle" onChange={e=>{
							handleChange(e,i); 
							setUser({...user,expPro})}}
							required></textarea>
					)	
				}
				)
			}
		</>
    )
}

export default ExpPro;