import { useEffect, useState } from "react";
import {Container,Paper,Typography,Stack,IconButton,Button,Box} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TikTok from "./components/TikTok";
import BreakNsession from "./components/BreakNsession";
import Controls from "./components/Controls";

function App() {
  
  const [totalSec, setTotalSec] = useState(1500);
  const [isSession , setIsSession] = useState(false);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [pause,setPause] = useState(false)
  
  useEffect(() => {
      let interval;
      const startTimer = (duration) => {
        setTotalSec(duration);
        interval = setInterval(() => {
          
          setTotalSec((prev) => {
            if (prev >= 1) {
              return prev - 1;    
            } 
            else {
              clearInterval(interval); 
              const aud = new Audio("/alert/raceTimer.mp3");
              aud.play();
              setTotalSec(0);
              setIsSession(!isSession) ;
              const nextDuration = isSession ? breakLength*60 : sessionLength*60;
              startTimer(nextDuration);
            }
          });
        }, 1000);
      }
      startTimer(totalSec);
  
      return () => clearInterval(interval);
    }, []); 

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
          25+5 Timer
        </Typography>

     
        <TikTok totalSec={totalSec} />

        <Controls setPause={setPause} setTotalSec={setTotalSec} setSessionLength={setSessionLength} />
        
        <BreakNsession pause={pause} setBreakLength={setBreakLength} breakLength={breakLength} setSessionLength={setSessionLength} sessionLength={sessionLength} />
       
      </Paper>
    </Container>
  );
}

export default App;
