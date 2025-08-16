 import React from 'react'
 import {Container,Paper,Typography,Stack,IconButton,Button,Box} from "@mui/material";
 import AddIcon from "@mui/icons-material/Add";
 import RemoveIcon from "@mui/icons-material/Remove";

 const Controls = ({setTotalSec,setSessionLength,stopTimer}) => {

    const resetbtn = () => {
    setTotalSec(1500);
    setSessionLength(25);
    console.log("reset");
    
  };
  

   return (
        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          <Button variant="contained" color="primary" onClick={stopTimer}>
            Pause
          </Button>
          <Button variant="outlined" color="error" onClick={resetbtn}>
            Reset
          </Button>
        </Stack>
    )
 }
 
 export default Controls