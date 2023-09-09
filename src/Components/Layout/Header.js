import React, {useState} from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import '../../Styles/HeaderStyle.css'

const Header = () => {
    const [mobileOpen, setmobileOpen] = useState(false)
    
    // handle menu click
    const handleDrawerToggle = () => {
        setmobileOpen(!mobileOpen)
    }
    // menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} 
            sx={{textAlign: 'center'}}
        >
            <Typography
                        color={"goldenrod"}
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 , my:2}}>

                        {/* <FastfoodIcon />
                        My Restaurant */}
                          <img src={Logo} alt='logo' height={"70"} width={"250"} />

                    </Typography>
                    <Divider/>
                        <ul className='mobile-navigation'>
                            <li>
                                <NavLink ActiveClassName='active' to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/menu'}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>

                        </ul>
                    
        </Box>
    );
    return (
        <Box>
            <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
                <Toolbar  >
                    <IconButton 
                    color='inherit' 
                    aria-label="open drwer" 
                    adge="start" 
                    sx={{ mr: 2, 
                          display: { sm: "none" }, 
                        }}
                            onClick={handleDrawerToggle}
                        >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        color={"goldenrod"}
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}>

                        {/* <FastfoodIcon />
                        My Restaurunt */}
                        <img src={Logo} alt='logo' height={"70"} width={"250"} />
                    </Typography>
                 
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <ul className='navigation-menu'>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/menu'}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>

                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* call Drawer */}
            <Box component="nav">
                    <Drawer 
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                        display:{xs:'block',sm:'none'},
                        "& .MuiDrawer-paper":{
                            boxSizing:"border-box",
                            width:"240px",
                    },
                    }}>
                    {drawer}
                    </Drawer>
            </Box>

            <Box >
            <Toolbar />
            </Box>

        </Box>
    )
}

export default Header