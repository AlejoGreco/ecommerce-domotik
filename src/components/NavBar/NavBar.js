import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.scss';

export const NavBar = () => {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="miNavBar">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Domotik - Plataforma
            </Typography>
            <Button color="inherit">Iluminación</Button>
            <Button color="inherit">Accesos</Button>
            <Button color="inherit">Climatización</Button>
            <Button color="inherit">Piscinas</Button>
        </Toolbar>
        </AppBar>
    </Box>
    );
} 