import React,{useState} from 'react'
import '../Registration/TwitterRegistrationForm.css';
import cross from '../assets/cross.jpg';
import axios from 'axios';
import {Link} from "react-router-dom"

import TwitterHome from '../twitterComponents/TwitterHome';
function Login({setloginstate}) {
    const [form, setform] = useState({loginid:"",password:""});
    const [formresponse, setformresponse] = useState({});
    const [errstatus,seterrstatus]=useState('');
    const[log,setlog]=useState(false);
    async function onFormSubmit(e){
        e.preventDefault();
      await axios.post('http://localhost:1000/auth/login',form)
       .then((res)=>{
      
       res=res.data;
       console.log(res);
        if(res.status=='200')
        {
        seterrstatus(res.message);
        setTimeout(() => {
            // setloginstate(false);
            // setfeed(true);
            setlog(true);
            
        }, 2000);
        }
        else{
            seterrstatus(res.error);
        }
        
   
       });
    }


    return (
        <>
        <div className="hide">
        
         
        <button onClick={()=>{setloginstate(false)}} className="exit" style={{width:'2%',height:'2%'}}  > <img  src={cross} alt="exit" /></button>
       <div className="formHeading"> Login</div>
       {/* <form method='POST' action='http://localhost:1000/auth/register' > */}
       <form onSubmit={onFormSubmit}>
           <div className="tagName">
           <input className="tagInput" value={form.loginid} onChange={(e)=>{setform({...form,loginid:e.target.value});seterrstatus('')} } placeholder="UserName or Email" type="text" id="loginid" name="loginid" required/></div>

           <div className="tagName">
           <input className="tagInput" value={form.password} onChange={(e)=>{setform({...form,password:e.target.value});seterrstatus('')}} placeholder="Password"  type="text" id="password" name="password" required/></div>
           <div className="status" style={{height:'2rem'}}>{errstatus}</div>
           {log?<Link to="/Feed"><button style={{width:'4rem',padding:'0rem'}}>Home</button></Link>:null}
           <button  className="submit" type="submit">Next</button>
        </form>
        
       </div>
      
       </>
      
    )
}

export default Login
