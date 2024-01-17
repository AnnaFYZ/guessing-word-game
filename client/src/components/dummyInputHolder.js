import MyButton from "./button"
import Input from "./input-component"
import { Grid } from "@mui/material"

const DummyInputHolder = () => {
    const handleConfirm = () => {

    }
    return (
        <Grid container direction="row" alignItems="center">
            <Input action={handleConfirm} />
            < MyButton buttonText="Confirm" color="yellow" onClick={() => handleConfirm()} />
        </Grid>
    )
}

export default DummyInputHolder