import { Avatar, Typography } from "@mui/material";
import "../App.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon  from "@mui/icons-material/FavoriteBorder";
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post(props) {
  return (
    <div className="Post">
        <div className="Header">
            <Avatar  src={props.avt} sx={{border:" 3px solid indianred "}} />
            <MoreHorizIcon sx={{float:"right", marginTop:"10px" }} color="primary" />
        </div>
        <img className="PostImg" src={props.src} />
        <div style={{display:"flex", padding:"8px", justifyContent:"space-around", width:"25%"}} >
          <FavoriteBorderIcon color="primary" />
          <MapsUgcOutlinedIcon color="primary" />
          <SendOutlinedIcon color="primary" />
        </div>
        <Typography fontSize="15px" fontWeight="bold" color="primary" > 200 Likes </Typography>
        <Typography fontSize="15px" fontWeight="bold" color="primary" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
    </div>
  );
}

export default Post;
