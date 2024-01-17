import { Grid, Typography, Box } from "@mui/material"
import LetterCard from "./card"
import Timer from "./timer.js"

const DummyWordHolder = ({ letterState, setLetterState }) => {
    return (
        <div>
            <Box sx={{
                display: "inline-block",
                minWidth: "30rem",
                mb: "2rem"
            }}>
                <Grid container justifyContent="space-between" mb="1.5rem" >
                    <Typography variant="h5" sx={{
                        textTransform: "uppercase",
                        color: "white"

                    }}>
                        <span style={{
                            fontFamily: "Keania One",
                            fontWeight: 400,
                            fontSize: "30pt",
                            fontStyle: "normal",
                            color: "#FFC700"
                        }}>6</span> tries left to guess
                    </Typography>
                    <Timer />
                </Grid>


                <LetterCard letterState={letterState} />
            </Box>
        </div>
    )
}

export default DummyWordHolder
