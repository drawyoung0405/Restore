
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
type Props = {
    darkMode: boolean
    toggleDarkMode: () => void}
export default function NavBar({toggleDarkMode, darkMode}: Props) {
 
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">Hoa's Shop</Typography>
                <IconButton onClick={toggleDarkMode}>
                    {darkMode ?'🌙':'☀️' } 
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
