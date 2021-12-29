import React,{useState,useContext} from 'react'
import '../Registration/TwitterRegistrationForm.css';
import cross from '../assets/cross.jpg';
import axios from 'axios';
// import {Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// import  { Redirect } from 'react-router-dom';

import TwitterHome from '../twitterComponents/TwitterHome';
import { Navigate } from 'react-router';
function Login({setloginstate}) {
    const [form, setform] = useState({loginId:"",password:""});
    const [formresponse, setformresponse] = useState({});
    const [errstatus,seterrstatus]=useState('');
    const[log,setlog]=useState(false);

    const navigate=useNavigate();
    
    async function onFormSubmit(e){
        e.preventDefault();
      await axios.post('http://localhost:2000/auth/login',form)
       .then((res)=>{
      
       res=res.data;
       console.log(res);
        if(res.status=='200')
        {
        seterrstatus(res.message);
            // setloginstate(false);
            // setfeed(true);
            // <Redirect to='/Feed'  />
            localStorage.setItem('userId',res.data._id);
            setlog(true);
            setTimeout(() => {
                navigate('/feed');
            }, 300);
       
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
           <input className="tagInput" value={form.loginId} onChange={(e)=>{setform({...form,loginId:e.target.value});seterrstatus('')} } placeholder="UserName or Email" type="text" id="loginId" name="loginId" required/></div>

           <div className="tagName">
           <input className="tagInput" value={form.password} onChange={(e)=>{setform({...form,password:e.target.value});seterrstatus('')}} placeholder="Password"  type="text" id="password" name="password" required/></div>
           <div className="status" style={{height:'2rem'}}>{errstatus}</div>
           {/* {log?<Link to="/Feed"><button style={{width:'4rem',padding:'0rem'}}>Home</button></Link>:null} */}
               {/* {log?:null} */}
           <button  className="submit" type="submit">Next</button>
        </form>
        
       </div>
      
       </>
      
    )
}

export default Login
