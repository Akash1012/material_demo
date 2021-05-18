import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, AppBar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import SectionImage from './SectionImage'

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#cf2929"
    },
    title: {
        flexGrow: 2,
        color: theme.palette.secondary.light
    }
}));


const NavBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="primary" className={classes.title}>
                        Welcome
                    </Typography>
                    <Button color="secondary">News</Button>
                    <Button color="secondary">More</Button>
                    <Button color="secondary">Login</Button>
                </Toolbar>
            </AppBar>






            <SectionImage />
        </div>
    )
}

export default NavBar