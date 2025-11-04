// export default function Nav({pages}){

//     pages = ["inicio", "tienda", "ofertas"]




// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import { useScreen } from '../../contexts/ScreenContext';
import { styled, alpha } from '@mui/material/styles';
import Input from '@mui/material/Input';
import { Autocomplete, TextField } from '@mui/material';





// import React, { useState, useEffect } from 'react';
// import { Autocomplete, TextField } from '@mui/material';

function InputSeach() {
    const [valor, setValor] = React.useState('');
    const [opciones, setOpciones] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    // Simula una "consulta a la base de datos"
    const simularQuery = (query) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const baseDatos = [
                    'Manzana',
                    'Banana',
                    'Naranja',
                    'Pera',
                    'Frutilla',
                    'Durazno',
                    'Sandía',
                    'Melón',
                    'Kiwi',
                    'Mango',
                    'Limón',
                ];
                const filtrados = baseDatos.filter((item) =>
                    item.toLowerCase().includes(query.toLowerCase())
                );
                resolve(filtrados);
            }, 2000); // 2 segundos de delay
        });
    };

    React.useEffect(() => {
        if (valor.length === 0) {
            setOpciones([]);
            return;
        }

        setLoading(true);
        const timer = setTimeout(() => {
            simularQuery(valor).then((resultados) => {
                setOpciones(resultados);
                setLoading(false);
            });
        }, 500); // debounce de 500ms

        return () => clearTimeout(timer);
    }, [valor]);

    return (
        <Autocomplete
            freeSolo
            options={opciones}
            inputValue={valor}
            loading={loading}
            sx={{ width: '50%' }}
            onInputChange={(event, newInputValue) => {
                setValor(newInputValue);
            }}
            slotProps={{
                listbox: {
                    style: {
                        maxHeight: 200,
                        overflowY: 'auto',
                    },
                },
            }}
            open={valor.length > 0}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Buscar fruta"
                    variant="outlined"
                    helperText={loading ? 'Buscando...' : ''}
                />
            )}
        />
    );
};






const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});



export default function Nav({ pages }) {

    pages = [
        { txt: 'inicio', icon: <HomeIcon />, action: () => { alert("me fui a inicio") } },
        { txt: 'tienda', icon: <ShoppingCartIcon />, action: () => { alert("me fui a tienda") } },
        { txt: 'ofertas', icon: <LocalOfferIcon />, action: () => { alert("me fui a ofertas") } },
    ]



    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { isMobile } = useScreen();
    const [valor, setValor] = React.useState('');
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function NavButton({ page, action }) {
        return <>
            <Button
                color='white'
                sx={{ fontSize: '13px', flexGrow: 1 }}
                onClick={action}
            >
                {page.icon} <span style={{ marginLeft: "10px" }}>{page.txt}</span>
            </Button>
        </>
    }





    return <>
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <Autocomplete
                            freeSolo
                            options={elementos}
                            inputValue={valor}
                            sx={{width: "50%"}}
                            onInputChange={(event, newInputValue) => {
                                setValor(newInputValue);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="Buscar fruta" variant="outlined" />
                            )}
                        /> */}

                        {/* V1 */}
                        {/* <Autocomplete
                            freeSolo
                            options={elementos}
                            inputValue={valor}
                            sx={{ width: '50%' }}
                            onInputChange={(event, newInputValue) => {
                                setValor(newInputValue);
                            }}
                                 slotProps={{
                                listbox: {
                                    style: {
                                        maxHeight: 200, // Altura máxima del dropdown
                                        overflowY: 'auto', // Scroll vertical
                                    },
                                }
                            }}
                            open={valor.length > 0} // Solo abre el dropdown si hay texto
                            renderInput={(params) => (
                                <TextField {...params} label="Buscar fruta" variant="outlined" />
                            )}
                        /> */}

                        <InputSeach />
                        {/* V1 */}




                    </Toolbar>
                    <Toolbar>
                        {pages.map(p => (
                            <NavButton key={`${p.txt}-nav`} action={p.action} page={p}
                            />
                        ))}

                    </Toolbar>


                    {/* <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div> */}

                </AppBar>
            </Box>
        </ThemeProvider>
    </>
}