import { useEffect, useState, useRef } from "react";
import { Container, Paper, Typography, Stack, IconButton, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TikTok from "./components/TikTok";
import BreakNsession from "./components/BreakNsession";
import Controls from "./components/Controls";

function App() {
  const [totalSec, setTotalSec] = useState(1500);
  const [isSession, setIsSession] = useState(true);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [pause, setPause] = useState(false);
  const interval = useRef(null);

  const startTimer = (duration) => {
    setTotalSec(duration);
    interval.current = setInterval(() => {
      setTotalSec((prev) => {
        if (prev >= 1) {
          return prev - 1;
        } else {
          clearInterval(interval.current);
          const aud = new Audio("/alert/raceTimer.mp3");
          aud.play();
          setTotalSec(0);
          setIsSession(!isSession);
          console.log(isSession.valueOf());

          const nextDuration = isSession ? breakLength * 60 : sessionLength * 60;
          startTimer(nextDuration);
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    setPause(!pause);
  };

  useEffect(() => {
    if (!pause) {
      startTimer(totalSec);
    } else {
      clearInterval(interval.current);
    }

    const intervalClearance = () => clearInterval(interval.current);
    return intervalClearance;
  }, [pause]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #87CEEB 0%, #4682B4 50%, #1E90FF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '"❄️"',
          position: "absolute",
          top: "10%",
          left: "20%",
          fontSize: "2rem",
          opacity: 0.3,
          animation: "float 4s ease-in-out infinite",
        },
        "&::after": {
          content: '"❄️"',
          position: "absolute",
          top: "60%",
          right: "15%",
          fontSize: "1.5rem",
          opacity: 0.2,
          animation: "float 6s ease-in-out infinite 2s",
        },
        "@keyframes float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(5deg)" },
          "66%": { transform: "translateY(-5px) rotate(-5deg)" },
        },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={24}
          sx={{
            padding: { xs: 3, sm: 5 },
            textAlign: "center",
            borderRadius: 6,
            background: "linear-gradient(145deg, #ffffff 0%, #f0f8ff 100%)",
            boxShadow: "0 20px 60px rgba(70,130,180,0.3), 0 8px 25px rgba(30,144,255,0.2)",
            border: "3px solid rgba(135,206,235,0.4)",
            backdropFilter: "blur(10px)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "6px",
              background: isSession 
                ? "linear-gradient(90deg, #FF6347, #FF4500)" 
                : "linear-gradient(90deg, #40E0D0, #00CED1)",
              borderRadius: "6px 6px 0 0",
            },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #4682B4, #1E90FF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              marginBottom: 4,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
           Penguin Timer     
            <Typography variant="h3" sx={{
              marginTop:"20px",
            }}>🐧</Typography>
          </Typography>

          <Paper
            elevation={8}
            sx={{
              padding: 4,
              marginBottom: 4,
              borderRadius: 4,
              background: isSession
                ? "linear-gradient(145deg, #FFF8DC, #FFE4B5)"
                : "linear-gradient(145deg, #E0F6FF, #B0E0E6)",
              border: isSession
                ? "3px solid #DEB887"
                : "3px solid #87CEEB",
              position: "relative",
              transition: "all 0.3s ease-in-out",
              "&::before": {
                content: isSession ? '"🐧"' : '"😴"',
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "2rem",
                animation: "bounce 2s ease-in-out infinite",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "120%",
                height: "120%",
                background: isSession
                  ? "radial-gradient(circle, rgba(255,99,71,0.1) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(64,224,208,0.1) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: -1,
              },
              "@keyframes bounce": {
                "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
                "40%": { transform: "translateY(-10px)" },
                "60%": { transform: "translateY(-5px)" },
              },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: isSession ? "#CD853F" : "#008B8B",
                marginBottom: 2,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              {isSession ? "🔥 Focus in the Igloo" : "❄️ Antarctic Break"}
            </Typography>
            <TikTok totalSec={totalSec} />
          </Paper>

          <Box sx={{ marginBottom: 4 }}>
            <Controls
              pause={pause}
              stopTimer={stopTimer}
              setPause={setPause}
              setTotalSec={setTotalSec}
              setSessionLength={setSessionLength}
            />
          </Box>

          <Paper
            elevation={6}
            sx={{
              padding: 3,
              borderRadius: 3,
              background: "linear-gradient(145deg, #F0F8FF, #E6F3FF)",
              border: "2px solid #B0C4DE",
              position: "relative",
              "&::before": {
                content: '"🧊"',
                position: "absolute",
                top: "-5px",
                left: "-5px",
                fontSize: "1.5rem",
                opacity: 0.7,
                transform: "rotate(-15deg)",
              },
              "&::after": {
                content: '"🧊"',
                position: "absolute",
                bottom: "-5px",
                right: "-5px",
                fontSize: "1.5rem",
                opacity: 0.7,
                transform: "rotate(15deg)",
              },
            }}
          >
            <BreakNsession
              isSession={isSession}
              setTotalSec={setTotalSec}
              pause={pause}
              setBreakLength={setBreakLength}
              breakLength={breakLength}
              setSessionLength={setSessionLength}
              sessionLength={sessionLength}
            />
          </Paper>

          {/* Decorative penguin elements */}
          <Box
            sx={{
              position: "absolute",
              top: -15,
              right: -15,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #4682B4, #1E90FF)",
              opacity: 0.1,
              zIndex: -1,
              "&::before": {
                content: '"🐧"',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "2rem",
                opacity: 0.3,
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -20,
              left: -20,
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #40E0D0, #00CED1)",
              opacity: 0.15,
              zIndex: -1,
              "&::before": {
                content: '"❄️"',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.5rem",
                opacity: 0.4,
              },
            }}
          />
          
          {/* Additional floating elements */}
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              left: "10%",
              fontSize: "1rem",
              opacity: 0.3,
              animation: "float 5s ease-in-out infinite 1s",
              "&::before": {
                content: '"🐧"',
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "30%",
              right: "20%",
              fontSize: "1.2rem",
              opacity: 0.25,
              animation: "float 4s ease-in-out infinite 3s",
              "&::before": {
                content: '"❄️"',
              },
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;