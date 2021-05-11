import React from 'react'

import { makeStyles, Typography, Button, Container } from '@material-ui/core'
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
                color="primary"
            >
                Create a New Note
            </Typography>
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
