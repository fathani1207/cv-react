
import Persoinfo from './infoperso.js'
import Competence from './competence.js'
import Personnalite from './personnalite.js'
import Langue from './langue.js'
import Objectif from './objectif'
import Forinfo from './formation.js'
import ExpPro from './expPro.js'
import './style_formulaire.css'
import {testNom,testPrenom,testAge,testAdress,testEmail} from './control.js'

function Form({setDisplay,user,setUser}){
    const submithandler = (e)=>{
        e.preventDefault();
        if(testNom(user.nom) && testPrenom(user.prenom) && testAge(user.age) && testAdress(user.adresse) && testEmail(user.email)){
            setDisplay(true);
        }
        else{
            if(!testNom(user.nom)){alert("nom incorrecte");}
            if(!testPrenom(user.prenom)){alert("prenom incorrecte");}
            if(!testAge(user.age)){alert("age incorrecte");}
            if(!testAdress(user.adresse)){alert("adresse incorrecte");}
            if(!testEmail(user.email)){alert("email incorrecte");}
        }
    }
    
    return(
        <>
        <form id = 'myform' onSubmit={submithandler}>
        <div className='container'>
        <Persoinfo user={user} setUser={setUser}></Persoinfo>
        <Competence user={user} setUser={setUser}></Competence>
        <Personnalite user={user} setUser={setUser}></Personnalite>
        <Langue user={user} setUser={setUser}></Langue>
        <Objectif user={user} setUser={setUser}/>
        <Forinfo user={user} setUser={setUser}></Forinfo>
        <ExpPro user={user} setUser={setUser}/>
        <br></br><br></br>
        <input type="reset" value="reset" className='btn'></input>
		<input type="submit" value="next" className='btn'></input>
        </div>
        </form>
        </>
    )
};

export default Form;