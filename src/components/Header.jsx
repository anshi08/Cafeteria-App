import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.jpg"
import { Typography } from '@mui/material';
// import "./Header.css"

const Header = () => {


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <AppBar position="sticky" style={{ backgroundColor: 'rgb(255, 255, 255)', zIndex: 3000 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div className='flex items-center'>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '5px' }} />
                            <p className='font-bold'
                            style={{ color: 'black',marginTop:'1rem' }}>JIIT CAFETERIA</p>
                        </Link>
                    </div>



                    {/* Navigation menu for mobile view */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent: 'end', md: 'none' } }} >
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"

                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            style={{ display: { xs: 'block', md: 'none' }, zIndex: 3000 }}
                        >
                            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/current-orders">
                                Current Orders
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/inventory">
                                Inventory
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/order-history">
                                Order History
                            </MenuItem>
                        </Menu>
                    </Box>


                    {/* Navigation tabs for desktop view */}
                    <Box sx={{
                        display: 'flex', justifyContent: 'end',
                        flexGrow: 1, display: { xs: 'none', md: 'flex' }
                    }}>
                        <Button
                            component={Link}
                            className='headerNames'
                            to="/current-orders"


                        >
                            Current Orders
                        </Button>
                        <Button
                            component={Link}
                            to="/inventory"
                            className='headerNames'

                        >
                            Inventory
                        </Button>
                        <Button
                            component={Link}
                            to="/order-history"
                            className='headerNames'
                        >
                            Order History
                        </Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
