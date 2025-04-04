
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks=[
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks=[
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]
const navStyles = {color: 'inherit', 
    typoraphy:'h6',
textDecoration: 'none',
'&:hover': {
color:'grey.500'
},
'&.active':{
color:'#baecf9',
}
}
type Props = {
    darkMode: boolean
    toggleDarkMode: () => void;
}

export default function NavBar({ toggleDarkMode, darkMode }: Props) {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

            <Box display='flex' alignItems='center'>
            <Typography component={NavLink} to='/' variant="h6" sx={navStyles}>Hoa's Shop</Typography>
                <IconButton onClick={toggleDarkMode}>
                    {darkMode ? '🌙' : '☀️'}
                </IconButton>
            </Box>
                
                <List sx={{display: "flex"}}>
                {midLinks.map(({title, path}) => (
                    <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
                </List>
                <Box display='flex' alignItems='center'>
                <IconButton size="large" sx={navStyles}>
                    <Badge badgeContent='4' color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <List sx={{display: "flex"}}>
                {rightLinks.map(({title, path}) => (
                    <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
                </List>
                </Box>
                
            </Toolbar>
        </AppBar>
    )
}
