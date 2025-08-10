import React from "react";
import { useEffect, useState } from "react";
import {Container,Paper,Typography,Stack,IconButton,Button,Box} from "@mui/material";

const TikTok = ({totalSec}) => {
    let min = Math.floor(totalSec / 60);
    let sec = totalSec % 60;
    return (
    <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4 }}>
      {`${String(min).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`}
    </Typography>
  );
};

export default TikTok;
