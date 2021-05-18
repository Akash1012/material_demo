import React from 'react'

import { makeStyles, Typography, Button, Container, TextField } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';


const useStyles = makeStyles({

});


export default function Create() {
    const classes = useStyles()
    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off">
                <TextField label="Note Title" variant="outlined" />

            </form>

            <Button onClick={() => console.log("You click mee")}
                type="submit"
                endIcon={<AcUnitIcon color="secondary" fontSize="small" />}
                color="primary" variant="contained">
                Submit
            </Button>
            <br />

        </Container>
    )
}
