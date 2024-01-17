import { Grid, Typography, Box } from "@mui/material";
import randomWords from "../mockData";

const randomWord = (words) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex].word;
    let lettersArray = randomWord.split("").map((char) => char.toUpperCase());
    return lettersArray;
}

const LetterCard = ({ letterState }) => {
    //the states for letterState (pending, guessed, wrong)

    return (
        <div style={{ display: "flex", flexDirection: 'row' }}>
            {randomWord.map((letter, key) => (
                <Grid
                    container
                    alignItems="flex-end"
                    key={key}
                    sx={{
                        width: "4rem",
                        height: "5.3rem",
                        marginRight: "0.6rem",
                    }}
                >
                    <Grid
                        item
                        sx={{
                            width: "4rem",
                            height: "5.3rem",
                            backgroundImage:
                                letterState === "pending" &&
                                'linear-gradient(to bottom, rgba(217, 217, 217, 0), rgba(217, 217, 217, 0.8))',
                            backgroundColor: letterState === "guessed" ? "#77A100" : letterState === "wrong" ? "#E9400A" : undefined,
                            border: letterState === "guessed" ? "solid white 2px" : letterState === "wrong" ? "solid white 2px" : "none",

                        }}
                    >
                        {(letterState === "guessed" || letterState === "wrong") &&
                            (<Box sx={{
                                width: "100%",
                                height: "100%",
                                color: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Typography variant="h3" fontWeight="600">{letter}</Typography>
                            </Box>
                            )}
                    </Grid>
                    {letterState === "pending" && (
                        <Grid
                            item
                            sx={{
                                position: "absolute",
                                width: "4rem",
                                height: "0.4rem",
                                backgroundColor: "white",
                            }}
                        />
                    )}
                </Grid>
            ))}
        </div>
    );
};

export default LetterCard;
