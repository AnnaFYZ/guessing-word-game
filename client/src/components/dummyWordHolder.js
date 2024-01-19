import { Grid, Box } from "@mui/material"
import LetterCard from "./card"
import Timer from "./timer.js"
import Title from "./title"

const DummyWordHolder = ({ letterState, runTimer, setRunTimer, lettersArray, rightLetters }) => {
    console.log("lettersArray", lettersArray)
    console.log("lettersArray", letterState)
    return (
        <div>
            <Box sx={{
                display: "inline-block",
                minWidth: "30rem",
                mb: "2rem"
            }}>
                <Grid container justifyContent="space-between" alignItems="center" mb="1.5rem" >
                    <Grid item >
                        <Grid container alignItems="flex-end">
                            <span style={{
                                fontFamily: "Keania One",
                                fontWeight: 400,
                                fontSize: "30pt",
                                marginRight: "0.5rem",
                                fontStyle: "normal",
                                color: "#FFC700"
                            }}>6</span>
                            <Title title="tries left to guess" fontSize="20pt" />
                        </Grid>
                    </Grid>
                    <Timer runTimer={runTimer} setRunTimer={setRunTimer} />
                </Grid>
                <div style={{ display: "flex", flexDirection: 'row' }}>
                    {lettersArray.map((letter, index) => (
                        <Grid
                            container
                            alignItems="flex-end"
                            key={index}
                            sx={{
                                width: "4rem",
                                height: "5.3rem",
                                marginRight: "0.6rem",
                            }}
                        >
                            <LetterCard
                                letter={letter}
                                letterState={rightLetters.includes(letter) ? "guessed" : "pending"}
                            />
                        </Grid>
                    ))}
                </div>

            </Box>
        </div>
    )
}

export default DummyWordHolder
