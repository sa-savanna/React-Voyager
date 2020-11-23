import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        marginTop: '5rem'
    },

}));

const FilterTabs = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="All results" {...a11yProps(0)} />
                    <Tab label="Hotels" {...a11yProps(1)} />
                    <Tab label="Restaurants" {...a11yProps(2)} />
                    <Tab label="Amusements" {...a11yProps(3)} />
                    <Tab label="Places" {...a11yProps(4)} />
                    <Tab label="Sport" {...a11yProps(5)} />
                    <Tab label="Green paths" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                All
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>

            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>

            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>

            </TabPanel>
        </div>
    );
}
export default FilterTabs
