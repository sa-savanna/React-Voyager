import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Spinner from "../Spinner/Spinner"


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BreadCrumb({ country }) {
    const classes = useStyles();
    const theme = useTheme();
    const [region, setRegion] = useState('')
    const [capital, setCapital] = useState('')

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (country) {
            setLoading(true);
            fetch(`https://restcountries.eu/rest/v2/name/${country}`)
                .then((res) => res.json())
                .then((data) => {
                    setRegion(data[0].subregion);
                    setCapital(data[0].capital)
                });
            setLoading(false)
        }

    }, [country]);


    return loading ? <Spinner /> : (
        <div className={classes.root}>

            <Breadcrumbs separator={<MdKeyboardArrowRight color="red" fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    {region}
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    {country}
                </Link>
                {/* <Typography color="textPrimary"></Typography> */}
            </Breadcrumbs>
        </div>
    );
}
