import React, { NavLink } from 'react'
import { Image } from 'react-bootstrap';
import Globe from './Slider/img/globe_PNG62.png'
import InputSearch from "./InputSearch"
//material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginLeft: '1rem',
        fontSize: '2rem'
    },

}));


export const Navigation = ({ country }) => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className="Toolbar">
                        <Image width="50px" src={Globe} />
                        <Typography variant="h6" className={classes.title}>
                            {country}
                        </Typography>
                        <InputSearch />
                        <Link className={classes.link} href="/React-Voyager/#/" color="inherit">
                            Home
                        </Link>
                        <Link className={classes.link} href={`/React-Voyager/#/overview/${country}`} color="inherit">
                            Discover
                        </Link>
                        <Link className={classes.link} href={`/React-Voyager/#/whattodo/${country}`} color="inherit">
                            Todo
                        </Link> 
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}