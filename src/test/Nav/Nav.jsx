// export default function Nav({pages}){

//     pages = ["inicio", "tienda", "ofertas"]




// }

import { useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import { Autocomplete, Avatar, Container, IconButton, Menu, MenuItem, TextField, Tooltip, Typography } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import EmailIcon from '@mui/icons-material/Email';




// import React, { useState, useEffect } from 'react';
// import { Autocomplete, TextField } from '@mui/material';

// SearchBar Component
function InputSeach() {
    const [valor, setValor] = useState('');
    const [opciones, setOpciones] = useState([]);
    const [loading, setLoading] = useState(false);

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

    useEffect(() => {
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




// Pages Component
function NavButton({ page, action }) {
    return (
        <Button
            color='white'
            sx={{ fontSize: '13px', flexGrow: 1 }}
            onClick={action}
        >
            {page.icon} <span style={{ marginLeft: "10px" }}>{page.txt}</span>
        </Button>
    )

}

function UserControls({ settings }) {

    const [anchorElUser, setAnchorElUser] = useState(null);
    const { token } = useAuth();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    token.lv >= setting.lv
                        ? (<MenuItem key={`${setting.txt}-nav`} onClick={handleCloseUserMenu}>
                            <Button onClick={setting.action} color='#fff' sx={{ fontSize: "12px", textAlign: 'center' }}>{setting.txt}</Button>
                        </MenuItem>)
                        : ""
                ))}
            </Menu>
        </>
    )
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});






// export default function Nav({ pages, settings }) {


//     settings = [
//         { txt: 'Mi cuenta', icon: "", action: () => { alert("me fui a Mi cuenta") }, lv: 0, },
//         { txt: 'Mis Compras', icon: "", action: () => { alert("me fui a Mis Compras") }, lv: 0, },
//         { txt: 'Admin de Productos', icon: "", action: () => { alert("me fui a Mis Compras") }, lv: 1, },
//         { txt: 'Admin de Usuarios', icon: "", action: () => { alert("me fui a Mis Compras") }, lv: 1, },
//         { txt: 'Logout', icon: "", action: () => { alert("me fui a Logout") }, lv: 0, },
//     ];
//     pages = [
//         { txt: 'inicio', icon: <HomeIcon />, action: () => { alert("me fui a inicio") } },
//         { txt: 'tienda', icon: <ShoppingCartIcon />, action: () => { alert("me fui a tienda") } },
//         { txt: 'ofertas', icon: <LocalOfferIcon />, action: () => { alert("me fui a ofertas") } },
//         { txt: 'contacto', icon: <EmailIcon />, action: () => { alert("me fui a contacto") } },
//     ]

//     const { token } = useAuth();






//     return (
//         <ThemeProvider theme={darkTheme}>
//             <AppBar position="static">
//                 <Box sx={{ flexGrow: 1 }}>
//                     <Toolbar>
//                         <InputSeach />
//                         <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
//                             {
//                                 token
//                                     ? (<UserControls settings={settings} />)

//                                     : (<>
//                                         <Button color='#fff' >SIGN UP</Button> <Button color='#fff'>LOGIN</Button>
//                                     </>)
//                             }
//                         </Box>
//                     </Toolbar>
//                     <Toolbar>
//                         {pages.map(p => (
//                             <NavButton key={`${p.txt}-nav`} action={p.action} page={p}
//                             />
//                         ))}
//                     </Toolbar>

//                 </Box>

//                 <Box sx={{ position: 'sticky', top: 112, zIndex: 1000, backgroundColor: 'background.default', px: 2, py: 1 }}>
//                     <InputSeach />
//                 </Box>
//             </AppBar >
//         </ThemeProvider>
//     )
// }




export default function Nav({ pages, settings }) {
  const { token } = useAuth();
  const searchRef = useRef(null);
  const [showStickySearch, setShowStickySearch] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickySearch(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    if (searchRef.current) {
      observer.observe(searchRef.current);
    }

    return () => {
      if (searchRef.current) observer.unobserve(searchRef.current);
    };
  }, []);

  settings = [
    { txt: 'Mi cuenta', icon: "", action: () => alert("me fui a Mi cuenta"), lv: 0 },
    { txt: 'Mis Compras', icon: "", action: () => alert("me fui a Mis Compras"), lv: 0 },
    { txt: 'Admin de Productos', icon: "", action: () => alert("me fui a Mis Compras"), lv: 1 },
    { txt: 'Admin de Usuarios', icon: "", action: () => alert("me fui a Mis Compras"), lv: 1 },
    { txt: 'Logout', icon: "", action: () => alert("me fui a Logout"), lv: 0 },
  ];

  pages = [
    { txt: 'inicio', icon: <HomeIcon />, action: () => alert("me fui a inicio") },
    { txt: 'tienda', icon: <ShoppingCartIcon />, action: () => alert("me fui a tienda") },
    { txt: 'ofertas', icon: <LocalOfferIcon />, action: () => alert("me fui a ofertas") },
    { txt: 'contacto', icon: <EmailIcon />, action: () => alert("me fui a contacto") },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar ref={searchRef}>
            <InputSeach />
            <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
              {token ? (
                <UserControls settings={settings} />
              ) : (
                <>
                  <Button color="#fff">SIGN UP</Button>
                  <Button color="#fff">LOGIN</Button>
                </>
              )}
            </Box>
          </Toolbar>
          <Toolbar>
            {pages.map((p) => (
              <NavButton key={`${p.txt}-nav`} action={p.action} page={p} />
            ))}
          </Toolbar>
        </Box>
      </AppBar>

      {showStickySearch && (
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'var(--bs-body-color)',
            px: 2,
            py: 1,
            boxShadow: 1,
          }}
        >
          <InputSeach />
        </Box>
      )}
    </ThemeProvider>
  );
}