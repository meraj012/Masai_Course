import './App.css'
import './images/profilePic.jpg'


const UserProfile = ({name,avtar_url,title,skillsets}) =>{

  console.log(skillsets);
return (
  <>
      <div id="container">

        <div id="left">
          <div className="heading">
            <h1>{name}</h1>
            <button>Follow</button>
          </div>
          <p>{title}</p> 
          <div id="skillsetsContainer">
          {
            skillsets.map((skill)=>(
              <div className="skillDiv">
                <img className="skillLogo" src={skill.icon} alt={skill.description} />
                <h6 className="description">{skill.description}</h6>
              </div>
            ))
          }
          </div>

        </div>

        <div id="right">
          <img src={avtar_url} alt="profilePIc"></img>
        </div>
       
      </div>
      

    


  </>

)
}

export default UserProfile;