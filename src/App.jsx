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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={24}
          sx={{
            padding: { xs: 3, sm: 5 },
            textAlign: "center",
            borderRadius: 6,
            background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 8px 25px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: isSession 
                ? "linear-gradient(90deg, #ff6b6b, #ff8e8e)" 
                : "linear-gradient(90deg, #4ecdc4, #7fdbda)",
              borderRadius: "6px 6px 0 0",
            },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: 4,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            25+5 Timer
          </Typography>

          <Paper
            elevation={8}
            sx={{
              padding: 4,
              marginBottom: 4,
              borderRadius: 4,
              background: isSession
                ? "linear-gradient(145deg, #fff5f5, #ffe8e8)"
                : "linear-gradient(145deg, #f0fdfc, #e0f9f7)",
              border: isSession
                ? "2px solid #ffebee"
                : "2px solid #e0f2f1",
              position: "relative",
              transition: "all 0.3s ease-in-out",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "120%",
                height: "120%",
                background: isSession
                  ? "radial-gradient(circle, rgba(255,107,107,0.05) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(78,205,196,0.05) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: -1,
              },
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: isSession ? "#d32f2f" : "#00695c",
                marginBottom: 2,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              {isSession ? "🍅 Focus Session" : "☕ Break Time"}
            </Typography>
            <TikTok totalSec={totalSec} />
          </Paper>

          <Box sx={{ marginBottom: 4 }}>
            <Controls
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
              background: "linear-gradient(145deg, #f8f9fa, #e9ecef)",
              border: "1px solid #dee2e6",
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

          {/* Decorative elements */}
          <Box
            sx={{
              position: "absolute",
              top: -20,
              right: -20,
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              opacity: 0.1,
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -30,
              left: -30,
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ff6b6b, #ff8e8e)",
              opacity: 0.1,
              zIndex: -1,
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;