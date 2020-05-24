import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './AppBarStyle';
import { Drawer, CssBaseline, AppBar, Toolbar, List, ListItem, ListItemText, Typography, Divider, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
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
                        {isNewOrderPage ? <ShoppingCartIcon className={classes.shoppingCart} /> : null}
                        <Button className={classes.logoutButton} color="inherit">Logout</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List onClick={handleDrawerClose}>
                    <Link className={classes.link} to="/new-order">
                        <ListItem button>
                            {/* <ListItemIcon></ListItemIcon> */}
                            <ListItemText primary="Nuevo Pedido" />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/not-developed">
                        <ListItem button>
                            {/* <ListItemIcon></ListItemIcon> */}
                            <ListItemText primary="Gestión de pedidos" />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/products">
                        <ListItem button>
                            {/* <ListItemIcon></ListItemIcon> */}
                            <ListItemText primary="Productos" />
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/not-developed">
                        <ListItem button>
                            {/* <ListItemIcon></ListItemIcon> */}
                            <ListItemText primary="Gestión de clientes" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    );
}
