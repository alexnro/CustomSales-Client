import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './DrawerStyle';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SelectClientModal from '../UI/SelectClientModal';


const DrawerComponent = props => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List onClick={props.handleDrawerClose}>
                <ListItem button>
                    <SelectClientModal />
                </ListItem>
                <Link className={classes.link} to="/orders">
                    <ListItem button>
                        <ListItemText primary="Orders management" />
                    </ListItem>
                </Link>
                <Link className={classes.link} to="/products">
                    <ListItem button>
                        <ListItemText primary="Products" />
                    </ListItem>
                </Link>
                <Link className={classes.link} to="/clients">
                    <ListItem button>
                        <ListItemText primary="Clients management" />
                    </ListItem>
                </Link>
                <Link className={classes.link} to="/users">
                    <ListItem button>
                        <ListItemText primary="Users management" />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    )
}

export default DrawerComponent;
