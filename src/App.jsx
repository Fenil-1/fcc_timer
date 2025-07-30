import { useEffect, useState } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";

function App() {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prevSec) => {
        if (prevSec > 0) {
          return prevSec - 1;
        } else {
          setMin((prevMin) => {
            if (prevMin > 0) {
              setSec(59);
              return prevMin - 1;
            } else {
              clearInterval(interval);
              return 0;
            }
          });
          return 
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {`${String(min).padStart(2, "0")} : ${String(sec).padStart(
              2,
              "0"
            )}`}
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default App;
