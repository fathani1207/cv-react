import {useState} from 'react' //« useState » depuis la bibliothèque 
//« react » nous permet de tracker les « états » dans un composant
import './style_formulaire.css'

function Competence({user,setUser}){
    const [competence,setCompetence]=useState([]);
	const handleAdd=()=>{
		const abc =[...competence,[]]
		setCompetence(abc)
		}
	
	const handleChange=(onChangeValue,i)=>{
		const inputdata = [...competence];
		inputdata[i]= onChangeValue.target.value;
		setCompetence(inputdata);
	}
	console.log(competence,"data");
    return(
        <>
            <h2 className="bar">Competence technique</h2>
            <input type={"button"} value={"ajouter"} className='btn' onClick={()=>handleAdd()}></input><br></br>
            {
				competence.map((data,i)=>{
					return(
						<input placeholder='entrer votre competence.' onChange={e=>{
							handleChange(e,i);
							setUser({...user,competence})
						}}
						required></input>
					)
	
				}
				)
			}
        </>
    )

};
export default Competence