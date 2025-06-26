import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TextField from '@mui/material/TextField'

interface ComponentProps {
    active: string;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px',
            }}
        >
            <Container maxWidth={false} sx={{ maxWidth: '100%', padding: 0 }}>
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                        Самые крутые видеокарты со всего мира
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            variant={active === "1" ? "contained" : "text"}
                            color="info"
                            size="medium"
                        >
                            Home
                        </Button>
                        <Button
                            variant={active === "2" ? "contained" : "text"}
                            color="info"
                            size="medium"
                        >
                            About us
                        </Button>
                        <Button
                            variant={active === "3" ? "contained" : "text"}
                            color="info"
                            size="medium"
                        >
                            List
                        </Button>
                        <TextField id="standard-basic" label="Find GPU" variant="standard" sx={{ml: '30px', mr: '20px'}} />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ whiteSpace: 'nowrap'}}
                        >
                            Поиск
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <MenuItem
                                    selected={active === "1"}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'info.main',
                                            color: 'white',
                                        },
                                        backgroundColor: active === "1" ? 'info.main' : undefined,
                                        color: active === "1" ? 'white' : undefined,
                                    }}
                                >
                                    Home
                                </MenuItem>
                                <MenuItem
                                    selected={active === "2"}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'info.main',
                                            color: 'white',
                                        },
                                        backgroundColor: active === "2" ? 'info.main' : undefined,
                                        color: active === "2" ? 'white' : undefined,
                                    }}
                                >
                                    About us
                                </MenuItem>
                                <MenuItem
                                    selected={active === "3"}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'info.main',
                                            color: 'white',
                                        },
                                        backgroundColor: active === "3" ? 'info.main' : undefined,
                                        color: active === "3" ? 'white' : undefined,
                                    }}
                                >
                                    List
                                </MenuItem>
                                <Box sx={{mb: '7px'}}>
                                    <TextField id="standard-basic" label="Find GPU" variant="standard" sx={{width: '80%', ml: '15px', mr: '20px'}} />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ whiteSpace: 'nowrap'}}
                                    >
                                        Поиск
                                    </Button>
                                </Box>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;