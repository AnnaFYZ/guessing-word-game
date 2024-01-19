import MyButton from "./button";
import Subtitle from "./subtitle";
import Input from "./input-component";
import { Box, Grid } from "@mui/material";

const DummyInputHolder = () => {
  const handleConfirm = () => {};
  return (
    <div>
      <Box
        sx={{
          display: "inline-block",
          minWidth: "30rem",
          mb: "2rem",
        }}
      >
        <Subtitle
          subtitle="Try to guess the letter or the whole word"
          fontSize="16pt"
        />
        <Grid container justifyContent="left" alignItems="center">
          <Grid item>
            <Input action={handleConfirm} />
          </Grid>
          <Grid item>
            <MyButton
              buttonText="Confirm"
              color="yellow"
              onClick={() => handleConfirm()}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DummyInputHolder;
