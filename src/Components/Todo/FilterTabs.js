import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const FilterTabs = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button>Hotels</Button>
                <Button>Restaurants</Button>
                <Button>Amusements</Button>
                <Button>Parks</Button>
                <Button>Sport</Button>
                <Button>Churches</Button>
                <Button>Tourist Attractions</Button>
            </ButtonGroup>
        </div>
    );
}

export default FilterTabs