import './App.css'
import { Button, Grid2 } from "@mui/material";
import { useState } from "react";
import { sendLog } from "./request.js";

const texts = [
    {
        title: "Will you be my Valentine?",
        button: "NO",
        size: "1rem"
    },{
        title: "Will you be my Valentine please?",
        button: "Try again!",
        size: "2rem"
    },{
        title: "Why did you say no again? Will you be my Valentine please?",
        button: "Are you sure?",
        size: "3rem"
    },{
        title: "will be my Valentine? :)",
        button: "",
        size: "4rem"
    }
]

function App() {
    const [successful, setSuccessful] = useState(false);
    const [text] = useState(texts);
    const [attempts, setAttempts] = useState(0);

    const handleYes = () => {
        setSuccessful(true);
        sendLog("She said yes after " + attempts + " attempts!")
    }

    const handleNo = () => {
        setAttempts(attempts + 1);
        sendLog("She said no, attempt: " + attempts);
    }

  return (

    <Grid2 container spacing={2}>
        <Grid2 size={12}>
            <h3>{successful? "Yayyyyy!!!" : text[attempts].title}</h3>
        </Grid2>
        <Grid2 size={12}>
            {successful?
                <img
                    src={"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFya2g4aXBqb3duYm9wbHI0anBiNGtham54cDd0czQ3c3Z5cWV2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tJJ7L31VvDa9PKjyT6/giphy.gif"}
                    alt="Your are my valentine"
                /> :
                <img
                    src={"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3I4NzNqejQxeDB2b2lvaG52bnN2dDEwem41MHk2dnJ3NzNmdGVvNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Gut8LeP5yefbSdpIOr/giphy.gif"}
                    alt="Will you be my valentine"
                />
            }
        </Grid2>

        <Grid2 size={12} spacing={2}>
            {!successful && <Button
                color="success"
                variant="contained"
                size="large"
                sx={{ fontSize: texts[attempts].size }}
                onClick={handleYes}
            >
                YES
            </Button>
            }
            {attempts < 3 && !successful && <Button
                color="error"
                variant="contained"
                size="large"
                sx={{ fontSize: "1rem" }}
                onClick={handleNo}
            >
                {text[attempts].button}
                </Button>}
        </Grid2>
    </Grid2>
  )
}

export default App
