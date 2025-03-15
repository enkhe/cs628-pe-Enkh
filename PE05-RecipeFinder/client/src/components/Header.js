import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/recipes" onClick={handleDrawerToggle}>
        <ListItemText primary="Recipes" />
      </ListItem>
      <ListItem button component={Link} to="/recipes-table" onClick={handleDrawerToggle}>
        <ListItemText primary="Recipes Table" />
      </ListItem>
      <ListItem button component={Link} to="/add-recipe" onClick={handleDrawerToggle}>
        <ListItemText primary="Add Recipe" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Recipe Finder
          </Typography>
          {/* Hamburger Menu for Mobile */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* Buttons for Desktop */}
          <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/recipes" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Recipes
          </Button>
          <Button color="inherit" component={Link} to="/recipes-table" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Recipes Table
          </Button>
          <Button color="inherit" component={Link} to="/add-recipe" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Add Recipe
          </Button>
        </Toolbar>
      </AppBar>
      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;