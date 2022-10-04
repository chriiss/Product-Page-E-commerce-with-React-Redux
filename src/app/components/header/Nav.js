import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNavOpen, getNavOpen } from "../../store/Slice";
import Cart from './cart/Cart';
import { Box, AppBar, Toolbar, Avatar, List, ListItem, ListItemButton, ListItemText, Grid, Link, Popover, Drawer } from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import imgAvatar from "../../assets/image-avatar.png";
import imgLogo from "../../assets/logo.svg";
import CssStyle from "../../styles/CssStyle";
import DataJson from "../../data/Data.json";


const Nav = (props) => {
    const navItems = DataJson.navbarComponent;
    const dispatch = useDispatch();
    const openNav = useSelector(getNavOpen);
    const [anchorEl, setAnchorEl] = useState(null);
    const { qty, cart, setCart, size } = props;

    const toggleDrawer = (open) => () => {
        dispatch(addNavOpen((open)));
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const list = (
        <List sx={CssStyle.navStyle.fdColumn}>
            {navItems.list.map((item) => (
                <ListItem key={item.name} disablePadding>
                    <ListItemButton sx={CssStyle.navStyle.buttonColor}>
                        <Link href="#" sx={CssStyle.navStyle.color}><ListItemText primary={item.name} /></Link>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )

    return(
        <>
            <Box className={CssStyle.navStyle.flex}>
                <AppBar position='sticky' sx={CssStyle.navStyle.nav} disablegutters='true'>
                    <Toolbar>
                        <Grid container spacing={2}>
                            <Grid item md={1} sm={0.2} xs={0.5}></Grid>
                            <Grid item sm={4.2} xs={1.2} sx={CssStyle.navStyle.menu}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                >
                                    <MenuIcon sx={CssStyle.navStyle.menuIcon} />
                                </IconButton>
                            </Grid>
                            <Grid item md={2} sm={4.5} xs={6} sx={CssStyle.navStyle.dFlex}>
                                <img src={imgLogo} alt="logo sneakers"/>
                            </Grid>
                            <Grid item md={6.8}>
                                <Grid item md={3} sx={{display: { sm: 'none', md: 'block', xs: 'none' }}}>
                                    {list}
                                </Grid>
                            </Grid>
                            <Grid item md={0.6} xs={1} sx={CssStyle.navStyle.dFlex}>
                                <ShoppingCartIcon sx={CssStyle.navStyle.color} aria-describedby={id} variant="contained" onClick={handleClick}/>
                                <ListItem sx={CssStyle.navStyle.notification}>{size}</ListItem>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                <Cart cart={cart} setCart={setCart} qty={qty}/>
                                </Popover>
                            </Grid>
                            <Grid item md={0} sx={CssStyle.navStyle.dFlex}>
                                <Avatar sx={{width: 50, height: 50}} alt="sneakers profile" src={imgAvatar}/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <React.Fragment >
                    <Drawer open={openNav} onClose={toggleDrawer(false)} sx={{display: {sm: 'block', md: 'none', xs: 'block'}, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }}}>
                        {list}
                    </Drawer>
                </React.Fragment>
            </Box>
        </>
    )
}

export default Nav;