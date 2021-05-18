import React from 'react'
import { Card, Container, Grid, Typography, Box, Avatar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


const useStyles = makeStyles((theme) => ({
    blogContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%"
    },
    media: {
        height: 240,
    },
    cardAction: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    }
}));


const Article = () => {
    const classes = useStyles();
    const [data, setData] = React.useState(["https://images.unsplash.com/photo-1584425233919-5a9422beeca5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1605677677382-8baa24578e08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1565296777964-0c6376aeba60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1620136094441-02b6622f5968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80",
        "https://images.unsplash.com/photo-1617355453845-6996ffeee4de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
    ])
    console.log(data)
    return (
        <div>
            <Container maxWidth="lg" className={classes.blogContainer}>
                <Typography variant="h4" className={classes.blogTitle}>
                    Article
                </Typography>
                <Grid container spacing={3}>
                    {data.map((d) => {
                        return <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.Card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={d}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            React Hooks
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardAction}>
                                    <Box className={classes.author}>
                                        <Avatar src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432" />
                                        <Box ml={2}>
                                            <Typography variant="subtitle2" component="p">
                                                Iron Man
                                        </Typography>
                                            <Typography color="textSecondary" variant="subtitle2" component="p">
                                                May 18 2021
                                        </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <BookmarkBorderIcon />
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    })}


                    {/* <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.Card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React Hooks
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardAction}>
                                <Box className={classes.author}>
                                    <Avatar src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Iron Man
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle2" component="p">
                                            May 18 2021
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.Card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        React Hooks
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardAction}>
                                <Box className={classes.author}>
                                    <Avatar src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Iron Man
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle2" component="p">
                                            May 18 2021
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>

                    </Grid> */}

                </Grid>
            </Container>
        </div>
    )
}

export default Article