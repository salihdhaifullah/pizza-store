import { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import { FiMenu } from 'react-icons/fi'

interface Props {
    window?: () => Window;
}

const navItems = ['Home', 'About', 'Contact'];

const Header = ({ window }: Props) => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const container = window !== undefined ? () => window().document.body : undefined

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <>
            <Box component="nav" className="">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    className='sm:hidden flex'
                >
                    <Box className='w-[240px] text-center bg-black text-white min-h-screen' onClick={handleDrawerToggle}>
                        <Typography variant="h6" className=" m-2 ">
                            LA CARAVANA
                        </Typography>
                        <Divider />
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item} disablePadding>
                                    <ListItemButton className="text-center hover:bg-gray-700 transition-all rounded-md">
                                        <ListItemText primary={item} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>

            <AppBar component="nav" className="sticky bg-black text-white">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        className="flex-1 flex text-[20px] lg:text-[30px]"
                    >
                        LA CARAVANA
                    </Typography>

                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className="flex sm:hidden text-inherit items-center"
                    >
                        <FiMenu />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}
                        className=" hidden  sm:block"
                    >
                        {navItems.map((item) => (
                            <Button key={item} className="text-[#fff]">
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header