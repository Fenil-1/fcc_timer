import { useEffect, useState } from "react";
import {Container,Paper,Typography,Stack,IconButton,Button,Box} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function App() {
  const [totalSec , setTotalSec] = useState(8);
  let min =  Math.floor(totalSec / 60);
  let sec = totalSec % 60;
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTotalSec((prev)=>{
        if(prev!=0){
          return prev-1;
        }
        else{
          const aud = new Audio('/alert/raceTimer.mp3');
          aud.play();
          return clearInterval(interval);
        }
      })  
    },1000);
    return ()=>clearInterval(interval);
  },[])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSec((prevSec) => {
  //       if (prevSec > 0) {
  //         return prevSec - 1;
  //       } else {
  //         setMin((prevMin) => {
  //           if (prevMin > 0) {
  //             setSec(59);
  //             return prevMin - 1;
  //           } else {
  //             clearInterval(interval);
  //             return 0;
  //           }
  //         });
         
  //       }
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

 return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          textAlign: "center",
          borderRadius: 4,
          width: "100%",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Pomodoro Timer
        </Typography>

        {/* Timer Display */}
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4 }}>
          {`${String(min).padStart(2,'0')} : ${String(sec).padStart(2,'0')}`}
        </Typography>

        {/* Control Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          <Button variant="contained" color="primary">Pause</Button>
          <Button variant="outlined" color="error">Reset</Button>
        </Stack>

        {/* Break Length Controls */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6">Break Length</Typography>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <IconButton color="primary">
              <RemoveIcon />
            </IconButton>
            <Typography variant="h5">5</Typography>
            <IconButton color="primary">
              <AddIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Session Length Controls */}
        <Box>
          <Typography variant="h6">Session Length</Typography>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <IconButton color="primary">
              <RemoveIcon />
            </IconButton>
            <Typography variant="h5">20</Typography>
            <IconButton color="primary">
              <AddIcon />
            </IconButton>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
