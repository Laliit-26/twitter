import React,{useState} from 'react'
import './TwitterRegistrationForm.css';
import cross from '../assets/cross.jpg'
import axios from 'axios';

function TwitterRegistrationForm({setregisterState,setloginstate}) {
    // console.log(props);

const [form, setform] = useState({username:"",name:"",password:"",email:"",phonenumber:""});
const [formresponse, setformresponse] = useState({});
const [errstatus,seterrstatus]=useState('');
    async function onFormSubmit(e){
     e.preventDefault();
   await axios.post('http://localhost:1000/auth/register',form)
    .then( (res)=>{ 
       console.log(res);
       res=res.data;
       
        if(res.status=='200')
        {
        seterrstatus(res.message);
       setTimeout(() => {
        setregisterState(false);
        setloginstate(true);
    }, 2000);
        
        }
        else{
            seterrstatus(res.error);
        }});
    
    
     
    

    }
    return (
        <div className="hide">
        
         
        <button onClick={()=>{setregisterState(false)}} className="exit" style={{width:'2%',height:'2%'}}  > <img  src={cross} alt="exit" /></button>
       <div className="formHeading"> Create your account</div>
       {/* <form method='POST' action='http://localhost:1000/auth/register' > */}
       <form onSubmit={onFormSubmit}>
           <div className="tagName">
           <input className="tagInput" value={form.username} onChange={(e)=>{setform({...form,username:e.target.value});seterrstatus('')} } placeholder="User Name" type="text" id="username" name="username" required/></div>

           <div className="tagName">
           <input className="tagInput" value={form.name} onChange={(e)=>{setform({...form,name:e.target.value});seterrstatus('')}} placeholder="Name"  type="text" id="name" name="name" required/></div>

           <div className="tagName">
           <input className="tagInput" value={form.password} onChange={(e)=>{setform({...form,password:e.target.value});seterrstatus('')}} placeholder="Password"  type="password" id="password" name="password" required/></div>

           <div className="tagName">
           <input className="tagInput" value={form.email} onChange={(e)=>{setform({...form,email:e.target.value});seterrstatus('')}} placeholder="Email"  type="text" id="email" name="email" required/></div>

           <div className="tagName">
           <input className="tagInput" value={form.phonenumber} onChange={(e)=>{setform({...form,phonenumber:e.target.value});seterrstatus('')}} type="text" placeholder="Phone Number" id="phonenumber" name="phonenumber"/></div>
           <div className="status" style={{height:'2rem'}}>{errstatus}</div>
           <button  className="submit" type="submit">Next</button>
       </form>
       </div>
    )
}

export default TwitterRegistrationForm;
