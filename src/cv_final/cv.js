import './style.css'
import{AiTwotoneSetting} from "react-icons/ai"
import {BsFillTelephoneFill,BsFillCalendarCheckFill,BsFillBriefcaseFill} from "react-icons/bs"
import {MdEmail,MdLanguage} from "react-icons/md"
import {SiGooglemaps} from 'react-icons/si'
import{FaGraduationCap,FaUser} from 'react-icons/fa'
import {_calculateAge} from '../components/control'


function Cv({user}){
    return(
        <div className="classinderbody">
			<div className="classdivLeft">
				<br/>
				<p>
					<ul>
						<img src ={user.image} alt={""} className='classimg'/>
						<li>
							<BsFillTelephoneFill className="iconper"/>
							: <span style={{fontSize: "20px"}} >{user.num}</span>
						</li><br></br>
						<li>
							<BsFillCalendarCheckFill className="iconper"/> 
							: <span style={{fontSize: "20px"}} >{_calculateAge(user.age)} ans</span>
						</li><br></br>
						<li>
							<MdEmail className='iconper'></MdEmail>
							: <span style={{fontSize: "20px"}} className="classmail"> {user.email}</span>
						</li><br></br>
						<li>
							<SiGooglemaps className="iconper"/>
							 : <span style={{fontSize: "20px"}} >{user.adresse}</span>
							</li><br></br>
					</ul>
				</p>
				<p>
					<AiTwotoneSetting className="classiconLeft"/>
					<div className="classbarLeft">COMPETENCES</div>
					<ul>
					{
							user.competence.map((data,i)=>{
								return(
									<>
									<li><span style={{fontSize: "20px"}}>{user.competence[i]}</span></li> <br></br>
									</>
								)
							})
						}
					</ul>
				</p>
				<p>
					<FaUser className='classiconLeft'/>
					<div className='classbarLeft'>PERSONNALITE</div>
					<ul>
					{
							user.personnalite.map((data,i)=>{
								return(
									<>
									<li><span style={{fontSize: "20px"}}>{user.personnalite[i]}</span></li> <br></br>
									</>
								)
							})
						}
					</ul>
				</p>
				
				<p>
					<MdLanguage className="classiconLeft"/>
					<div className="classbarLeft">LANGUE</div>
					<ul>
					{
						user.langue.map((data,i)=>{
							return(
								<>
								<li><span style={{fontSize: "20px"}} >{user.langue[i]}</span></li> <br></br>
								</>
							)
						})
					}
					</ul>
				</p>
			</div>
			<div className="classdivRight">
				<div style={{paddingLeft : "20px"}}> 
					<h1 style={{fontSize : "40px"}}>
						<span style={{color: "rgb(32, 141, 210)"}}>{user.nom} </span>
						{user.prenom}
					</h1>
					<h3>objectif personnel</h3>
					<ul>
					{
							user.objectif.map((data,i)=>{
								return(
									<>
									<li><span style={{fontSize: "20px"}}>{user.objectif[i]}</span></li> <br></br>
									</>
								)
							})
						}
					</ul>
				</div>
				<p>
					<FaGraduationCap className="classiconRight"/>
					<div className="classbarRight">FORMATION</div><br></br>
					<p style={{paddingLeft : "20px"}}>
					<ul>
						{
							user.formation.map((data,i)=>{
								return(
									<>
									<li><span style={{fontSize: "20px"}}>{user.formation[i]}</span></li> <br></br>
									</>
								)
							})
						}
					</ul>
					</p>
				</p>
				<p>
					<BsFillBriefcaseFill className="classiconRight"/>
					<div className="classbarRight">EXPERIENCE PROFESSIONNELLE</div><br></br>
					<div style={{paddingLeft: "45px", height: "650px"}}>
					{
							user.expPro.map((data,i)=>{
								return(
									<>
									<li><span style={{fontSize: "20px"}}>{user.expPro[i]}</span></li> <br></br>
									</>
								)
							})
						}
					</div>
				</p>

			</div>
			<footer> {user.nom} {user.prenom}</footer>

		</div>
    )
};

export default Cv;