import React,{useEffect,useState} from "react";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/TwitterMiddle.css';
import FileBase64 from 'react-file-base64';
import axios from 'axios';

// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function TwitterMiddle({follow}) {
  const [blogdata, setblogdata] = useState();
  const[item,setItem]=useState({bodyText:"",images:""});
  const[del,setdel]=useState(false);
  const[show,setshow]=useState(0);
  const[image,setimage]=useState(false);
 
 
  function deletetweet(blogId){
    axios.post('http://localhost:2000/blogs/delete-blog',{
      "blogId":blogId,
      "userId":localStorage.getItem("userId")
    }).then((data)=>{
      console.log(data);
      setdel(true);
    })
  }
  function sendTweet(){
    if(item.bodyText.length>0){
    axios.post('http://localhost:2000/blogs/create-blog',{
      "userId":localStorage.getItem("userId"),
      "title":"tital is not required",
      "bodyText":item.bodyText,
      "images":item.images
    }).then((data=>{
console.log(data);
setItem({bodyText:'',image:''});

    }))
  }
  }
  // console.log(item);

  useEffect( () => {
    setInterval(() => {
    axios.post('http://localhost:2000/blogs/get-blogs',{
     
        "userId":localStorage.getItem("userId"),
        "offset":show
      }
          ).then((res)=>{
            res=res.data;
            console.log(res);
            if(res.status=='200'){
              setblogdata(res);
            
            }
            // console.log(blogdata.data.data[0].data);
           setdel(false);
          });
        }, 100000);
    
  },[item,del,show,follow]);

console.log(blogdata);
  
  // if(!blogdata)
  //  return null;
  return (
    <>
      <div className="middle-block" >
        <h1 className="Home-title">Home</h1>
        <div style={{ display: "flex", color: "rgb(29, 155, 240)"}}>
          <div>
            <PersonIcon style={{ fontSize: 50 }} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <input
              type="text"
              placeholder="What's happening?"
              style={{ border: "none" }}
              value={item.bodyText}
              onChange={(e)=>{setItem({...item,bodyText:e.target.value})}}
  
            />
    
            <h6 style={{ color: "rgb(29, 155, 240)" }}>
              <PublicIcon />
              Everyone can reply
            </h6>
            <hr />
{image ?  <FileBase64
type="file"
multiple={false}
onDone={({ base64 }) => setItem({ ...item, images: base64 })}
/>:null
           }
            <button className="image" onClick={()=>setimage(!image)}><ImageIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            /></button>
            <GifBoxIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <PollIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <EmojiEmotionsIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />
            <EventAvailableIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            />

            <button className="tweet-blog"onClick={sendTweet}>
              Tweet
            </button>
          </div>
        </div>
        <hr />
        <h6 style={{ textAlign: "center" }}> Show more</h6>
        <hr />
      
        { blogdata ? blogdata.data.map((oneblog)=>{
          return  <><div className="blog-post" id={oneblog._id}>
            <div className="blog-head">
              <div><PersonIcon style={{ fontSize: 50 }} /></div>
              <div style={{fontWeight:"600",flex:"1"}}><span>{oneblog.userDetails.name+" "}</span><span style={{fontWeight:"400"}}>{"@"+oneblog.userDetails.username+" "+ ".21h"}</span>  <div className="blog-bodyText">
                {oneblog.bodyText}
              </div></div>
              {/* <div className="space"></div> */}
             <div> <button className="delete-post" id={oneblog._id} onClick={()=>deletetweet(oneblog._id)} ><DeleteIcon /></button></div>
            </div>
            <div >
              <div  style={{paddingLeft: "1.5rem"}}>
           
             
             </div>
              <div className="blog-icons">
                <ChatBubbleOutlineIcon />
                <KeyboardReturnIcon />
                 <button className="image" onClick={()=>setimage(!image)}><FavoriteBorderIcon
              style={{ color: "rgb(29, 155, 240)", marginLeft: "5px" }}
            /></button> 
                <IosShareIcon />
              </div>
          
            </div>
          </div>
         <hr/>
          </>
          }):null
        }
         <div className="show-more"   style={{
          marginTop:"2rem",
                marginLeft: "19rem",
                backgroundColor: "rgb(29, 155, 240)",
                color: "white",
                width: "6rem",
                borderRadius: "35px",
                height: "2rem",
                border: "none",
                textAlign:"center",
                
              }}
              onClick={()=>{setshow(show+6)}}> Show more</div>
      </div>
     
    </>
  );
}

export default TwitterMiddle;
