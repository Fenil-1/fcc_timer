import React from 'react'
import {Container,Paper,Typography,Stack,IconButton,Button,Box} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const BreakNsession = ({breakLength,isSession,sessionLength,setBreakLength,setSessionLength,setTotalSec,pause}) => {
    
    const incrementSession = () => {
        if(pause){           
            setSessionLength(sessionLength + 1);
            if(isSession){
                 console.log('incrementSession');    
                setTotalSec((sessionLength+1) * 60);
            }
        }
    };

    const decrementSession = () => {
        if(pause){
            if(sessionLength.valueOf()>1){
                setSessionLength(sessionLength - 1);
                if(isSession){
                    console.log('decrementSession');    
                    setTotalSec((sessionLength-1) * 60 );
                }
            }
        }
    };

    const increaseBreakChange = () => {
        if (pause) {
            setBreakLength(breakLength+1);
            if(!isSession){
                 console.log('increaseBreakChange');    
                setTotalSec((breakLength+1)*60)
            }
        }
    } 

    const decreaseBreakChange = () => {
        if (pause) {
            if(breakLength.valueOf()>1){
                setBreakLength(breakLength-1);
                if(!isSession){
                    console.log('decreadeBreakChange');                   
                    setTotalSec((breakLength-1)*60)
                }
            }
        }
    } 

return (
 <>
   <Box 
     sx={{ 
       mb: 3,
       padding: 3,
       borderRadius: 3,
       background: "linear-gradient(145deg, #E0F6FF, #B0E0E6)",
       border: "2px solid #87CEEB",
       position: "relative",
       "&::before": {
         content: '"❄️"',
         position: "absolute",
         top: "8px",
         right: "12px",
         fontSize: "1.2rem",
         opacity: 0.6,
       },
     }}
   >
     <Typography 
       variant="h6"
       sx={{
         color: "#008B8B",
         fontWeight: 600,
         mb: 2,
         textAlign: "center",
       }}
     >
       ❄️ Break Length
     </Typography>
     <Stack
       direction="row"
       spacing={2}
       justifyContent="center"
       alignItems="center"
     >
       <IconButton 
         sx={{
           backgroundColor: "#40E0D0",
           color: "white",
           "&:hover": {
             backgroundColor: "#00CED1",
           },
           width: 40,
           height: 40,
         }}
       >
         <RemoveIcon onClick={decreaseBreakChange} />
       </IconButton>
       <Typography 
         variant="h5"
         sx={{
           color: "#008B8B",
           fontWeight: 700,
           minWidth: "3rem",
           textAlign: "center",
         }}
       >
         {breakLength}
       </Typography>
       <IconButton 
         sx={{
           backgroundColor: "#40E0D0",
           color: "white",
           "&:hover": {
             backgroundColor: "#00CED1",
           },
           width: 40,
           height: 40,
         }}
       >
         <AddIcon onClick={increaseBreakChange} />
       </IconButton>
     </Stack>
   </Box>

   <Box
     sx={{
       padding: 3,
       borderRadius: 3,
       background: "linear-gradient(145deg, #FFF8DC, #FFE4B5)",
       border: "2px solid #DEB887",
       position: "relative",
       "&::before": {
         content: '"🔥"',
         position: "absolute",
         top: "8px",
         right: "12px",
         fontSize: "1.2rem",
         opacity: 0.6,
       },
     }}
   >
     <Typography 
       variant="h6"
       sx={{
         color: "#CD853F",
         fontWeight: 600,
         mb: 2,
         textAlign: "center",
       }}
     >
       🔥 Session Length
     </Typography>
     <Stack
       direction="row"
       spacing={2}
       justifyContent="center"
       alignItems="center"
     >
       <IconButton 
         sx={{
           backgroundColor: "#FF6347",
           color: "white",
           "&:hover": {
             backgroundColor: "#FF4500",
           },
           width: 40,
           height: 40,
         }}
       >
         <RemoveIcon onClick={decrementSession} />
       </IconButton>
       <Typography 
         variant="h5"
         sx={{
           color: "#CD853F",
           fontWeight: 700,
           minWidth: "3rem",
           textAlign: "center",
         }}
       >
         {sessionLength}
       </Typography>
       <IconButton 
         sx={{
           backgroundColor: "#FF6347",
           color: "white",
           "&:hover": {
             backgroundColor: "#FF4500",
           },
           width: 40,
           height: 40,
         }}
       >
         <AddIcon onClick={incrementSession} />
       </IconButton>
     </Stack>
   </Box>
 </>
)}

export default BreakNsession