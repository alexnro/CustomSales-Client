import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useStyles from './AppBarStyle';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShopCartModal from '../products/shopCart/ShopCartModal';
import LogoutButton from '../logout/LogoutButton';
import DrawerComponent from '../drawer/DrawerComponent';


export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const isNewOrderPage = window.location.pathname === '/new-order' ? true : false;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <Link className={classes.titleLink} to="/">CustomSales</Link>
                    </Typography>
                    <div className={classes.leftAppBar}>
                        {isNewOrderPage ? <ShopCartModal /> : null}
                        <LogoutButton />
                    </div>
                </Toolbar>
            </AppBar>
            <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
        </div>
    );
}
