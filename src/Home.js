import React,{useState} from 'react';
import Twiter from "./assets/Twiter.JPG";
import logo from "./assets/icon.png";
import google from "./assets/google.jpg";
import apple from "./assets/apple.png";
import cross from "./assets/cross.jpg"
import {Link} from "react-router-dom";
import TwitterRegistrationForm from './Registration/TwitterRegistrationForm';
import Login from './Login/Login';






function TwiterCreateAccout() {
    const [registerstate, setregisterState] = useState(false);
    const [loginstate,setloginstate]=useState(false);


    
    return (
       
        <div className="homePage">
        <div className="frontpage" >
        {registerstate}
            
            <img  style={{width:'53vw',height:'100vh'}}src={Twiter} alt="Twiter" />
            <div className="Rightside">
                <div >
                <img  style={{width:'8%',height:'8%'}}src={logo} alt="logo" />
                </div>
                <h1>Happening now</h1>
                <h4>Join Twitter today.</h4>
                <div className="rightsidebtn">
                    <button style={{backgroundColor:"white",color:"gray"}}><img  style={{width:'14%',height:'47%'}}src={google} alt="google" />Sign up with Google</button>
                    <button style={{backgroundColor:"white",color:"bold",marginTop:'7px'}}><img  style={{width:'14%',height:'47%'}}src={apple} alt="apple" />Sign up with Apple</button>
                </div>
                <hr/>
                <div>
                   {/* <Link to='/register'> */}
                        <button onClick={()=>{setregisterState(true)}} style={{backgroundColor:"#4d88ff",color:"white"}}>Sign up with phone or email</button>
                        {/* </Link> */}
                    <p style={{fontSize:'x-small'}} >By signing up,you agree to the Terms of Service and Privacy<br/> Policy,including Cookie Use.</p>
                </div>
                <h5 style={{marginTop:'5rem'}}>Already have an account?</h5>
                <button style={{border:"1px solid #4d88ff",color:"#4d88ff bold"}} onClick={()=>{setloginstate(true)}}>Sign in</button>
            
                
            </div>
          
        </div>
      {registerstate?<TwitterRegistrationForm setregisterState={setregisterState}  setloginstate={setloginstate}/>:null}
      {loginstate?<Login setloginstate={setloginstate} />:null}
      </div>
     
    );
}

export default TwiterCreateAccout;