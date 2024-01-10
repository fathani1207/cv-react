import './style_formulaire.css'

function Persoinfo ({user,setUser}){
  
  return(
        <>
        <h2 className="bar">Infomation Personnelle</h2>
        <label style={{fontSize : "30px"}}>image : </label> <br/>
        <input 
        type={"file"} 
        accept={"image/x-png,image/gif,image/jpeg"}
        id = 'image' name='image' 
        onChange = {e =>setUser({...user,image: URL.createObjectURL(e.target.files[0])})}
        required></input><br></br><br></br>

        <label style={{fontSize : "30px"}}>Nom : </label>
        <input type={"text"} placeholder={"entrer votre nom"} id = 'nom' name='nom' onChange={e=> setUser({...user,nom:e.target.value})} required></input><br></br><br></br>

        <label style={{fontSize : "30px"}}>Prenom : </label>
        <input type={"text"} placeholder={"entrer votre prenom"}  id = 'prenom' name='prenom' onChange={e=> setUser({...user,prenom:e.target.value})} required></input><br></br><br></br>

        <label style={{fontSize : "30px"}}>Age : </label>
        <input type={"date"}  id = {'age'}  name='age' onChange={e=> setUser({...user,age:new Date(e.target.value)})} required></input><br></br><br></br>

        <label style={{fontSize : "30px"}}>Numéro de téléphone : </label>
        <input type={"text"} placeholder={"entrer votre numéro de téléphone"}  name='num' onChange={e=> setUser({...user,num:e.target.value})} required></input><br></br><br></br>

        <label style={{fontSize : "30px"}}>Adresse : </label>
        <input type={"text"} placeholder={"entrer votre adresse"} id ='adresse'   name='adresse' onChange={e=> setUser({...user,adresse:e.target.value})} required></input><br></br><br></br>

        <label style={{fontSize : "30px"}}>Email : </label>
        <input type={"email"} placeholder={"entrer votre Email"}id = 'email'   name='email' onChange={e=> setUser({...user,email:e.target.value})} required></input><br></br><br></br>
        
        </>

  );

}

export default Persoinfo;