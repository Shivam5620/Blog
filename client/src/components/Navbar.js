import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6"
            noWrap
            component={Link} 
            to="/" 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              textDecoration: 'none', 
              color: 'inherit' 
            }}
          >
            BLOG
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
