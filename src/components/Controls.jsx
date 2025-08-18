 import React from 'react'
 import {Container,Paper,Typography,Stack,IconButton,Button,Box} from "@mui/material";
 import AddIcon from "@mui/icons-material/Add";
 import RemoveIcon from "@mui/icons-material/Remove";

 const Controls = ({pause,setTotalSec,setSessionLength,stopTimer}) => {

    const resetbtn = () => {
    setTotalSec(1500);
    setSessionLength(25);
    console.log("reset");
    
  };
  

  return (
 <Stack direction="row" spacing={3} justifyContent="center" mb={3}>
   <Button 
     variant="contained" 
     onClick={stopTimer}
     sx={{
       backgroundColor: pause ? "#40E0D0" : "#FF6347",
       color: "white",
       fontWeight: 700,
       px: 5,
       py: 2,
       borderRadius: 4,
       fontSize: "1.1rem",
       boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
       border: "2px solid",
       borderColor: pause ? "#00CED1" : "#FF4500",
       position: "relative",
       overflow: "hidden",
       "&:hover": {
         backgroundColor: pause ? "#00CED1" : "#FF4500",
         transform: "translateY(-2px)",
         boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
       },
       "&:active": {
         transform: "translateY(0)",
       },
       "&::before": {
         marginRight: "8px",
         fontSize: "1.2rem",
       },
       "&::after": {
         content: '""',
         position: "absolute",
         top: 0,
         left: "-100%",
         width: "100%",
         height: "100%",
         background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
         transition: "left 0.5s ease-in-out",
       },
       "&:hover::after": {
         left: "100%",
       },
       transition: "all 0.3s ease-in-out",
     }}
   >
     {pause ? 'Start' : 'Pause'}
   </Button>
   
   <Button 
     variant="outlined" 
     onClick={resetbtn}
     sx={{
       borderColor: "#4682B4",
       color: "#4682B4",
       fontWeight: 700,
       px: 5,
       py: 2,
       borderRadius: 4,
       fontSize: "1.1rem",
       borderWidth: "2px",
       background: "linear-gradient(145deg, #F0F8FF, #E6F3FF)",
       position: "relative",
       overflow: "hidden",
       "&:hover": {
         backgroundColor: "#4682B4",
         color: "white",
         borderColor: "#4682B4",
         transform: "translateY(-2px)",
         boxShadow: "0 8px 25px rgba(70,130,180,0.3)",
       },
       "&:active": {
         transform: "translateY(0)",
       },
       "&::before": {
         
         marginRight: "8px",
         fontSize: "1.2rem",
       },
       "&::after": {
         content: '""',
         position: "absolute",
         top: 0,
         left: "-100%",
         width: "100%",
         height: "100%",
         background: "linear-gradient(90deg, transparent, rgba(70,130,180,0.1), transparent)",
         transition: "left 0.5s ease-in-out",
       },
       "&:hover::after": {
         left: "100%",
       },
       transition: "all 0.3s ease-in-out",
     }}
   >
     Reset
   </Button>
 </Stack>
)
 }
 
 export default Controls