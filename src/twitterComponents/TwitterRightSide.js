import React,{useEffect,useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from "@mui/icons-material/Person";
import '../styles/TwitterRight.css';
import axios from 'axios';
import TwitterRightSideNews from './TwitterRightComponents/TwitterRightSideNews';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('28c667c7e8114eb69659e1bd32ce9979');


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


function TwitterRightSide() {
  const [userdata, setuserdata] = useState(null);
  const[show,setshow]=useState(0);
  const[follow,setfollow]=useState('follow');
  const[news,setNews]=useState(null);

  useEffect(() => {
    axios.get('https://newsdata.io/api/1/news?apikey=pub_294299c7f3dab969a70810411e87dd735952',{headers: {
      'Content-Type': 'application/json'
      }}).then((data)=>{
      setNews(data);
      console.log(data);
    })
    
  }, [])


  useEffect( () => {
    axios.post('http://localhost:2000/auth/user',{
        "offset":show
      }
          ).then((data)=>{
            setuserdata(data);
            console.log(data);
            
            
           
          })
    
  },[show]);

  function followsomeone(followingUserId){
  
  
    axios.post('http://localhost:2000/follow/follow-user',{
        "followingUserId":followingUserId,
        "followerUserId":"61bed84c0bd43477309a09ae"
      }
          ).then((data)=>{
            // setuserdata(data);
            console.log(data);
            document.getElementById(followingUserId).style.backgroundColor="blue";
            document.getElementById(followingUserId).style.innerText='following';
            // console.log(blogdata.data.data[0].data);
           
          })
 
}




  if(!userdata)return null;
    return (
        <>
        <div style={{marginLeft:"10px"}}>
            <div style={{border:"2px solid #eff3f4",borderRadius:"20px",width:"21rem",position:"sticky",
            top:"0",
            zIndex:"100",
            backgroundColor:"white"}}>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Twitter"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>
          {/* <div  className='right-side'>
              <h2>What's happening</h2>
              <p>COVID-19 . LIVE</p>
              <h5>COVID-19 LIVE Covovax gets emergency use approval </h5>

              <p>Trending with #BipinRawat,Chief of Defence Staff</p>
              <hr/>
              <p>News.LIVE</p>
              <h5>COVID-19 LIVE Covovax gets emergency use approval</h5>
              <p>Trending with #BipinRawat,Chief of Defence Staff</p>
              <hr/>
            

          </div> */}
          {news?<TwitterRightSideNews/>:null}
          <div className='right-side' id='follow-someone'>
          <h2>Who to follow</h2>
        { userdata.data.data[0].data.map((oneuser)=>{
         return  <>
              <div className='follow'>
                <div className='imageicon'>
              <PersonIcon style={{ fontSize: 30 }} />
              </div>
              <div className='user-details'>
                <div className='user-name'>{oneuser.username}</div>
                <div className='name'>{oneuser.name}</div>
              </div>
              <div className='space'></div>
              <div >
                <button className='followbutton' id={oneuser._id} onClick={()=>followsomeone(oneuser._id)}>follow</button>
              </div>
              </div>
              </>

       
          })}
            
             <div className="show-more-right"   
              onClick={(e)=>{setshow(show+6)}}> Show more</div>
               </div>
        </div>
        
      
                       
        </>
    );
}

export default TwitterRightSide;