import React from 'react'
import {Container,Paper,Typography,Stack,IconButton,Button,Box} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const BreakNsession = ({breakLength,sessionLength,setBreakLength,setSessionLength,setTotalSec,pause}) => {
    
    const incrementSession = () => {
        if(pause){
            setSessionLength(sessionLength + 1);
            setTotalSec((sessionLength+1) * 60);
        }
    };

    const decrementSession = () => {
        if(pause){
            if(sessionLength.valueOf()>1){
                setSessionLength(sessionLength - 1);
                setTotalSec((sessionLength-1) * 60 );
            }

        }
    };

  return(

     <>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Break Length</Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="primary">
              <RemoveIcon
                onClick={() => {
                  setBreakLength(breakLength - 1);
                }}
              />
            </IconButton>
            <Typography variant="h5">{breakLength}</Typography>
            <IconButton color="primary">
              <AddIcon
                onClick={() => {
                  setBreakLength(breakLength + 1);
                }}
              />
            </IconButton>
          </Stack>
        </Box>

        
        <Box>
          <Typography variant="h6">Session Length</Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton color="primary">
              <RemoveIcon onClick={decrementSession} />
            </IconButton>
            <Typography variant="h5">{sessionLength}</Typography>
            <IconButton color="primary">
              <AddIcon onClick={incrementSession} />
            </IconButton>
          </Stack>
        </Box>
    </>
  )
}

export default BreakNsession