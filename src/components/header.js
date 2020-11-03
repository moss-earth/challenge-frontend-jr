import React, { useState } from 'react';
import { AppBar, Button, makeStyles, Menu, MenuItem, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory } from 'react-router-dom';
import { goBack } from '../router/coordinator';

const useStyles = makeStyles((theme) => ({
    bar: {
        display: "flex",
        justifyContent: "space-between"
    }
}))
const Header = (props) => {
    const classes = useStyles()
    const history = useHistory()
    const [openMenu, setOpenMenu] = useState(false)

    const handleMenu = (bool) => {
        setOpenMenu(bool)
    }

    return (
        <AppBar position="fixed" >
            <Toolbar className={classes.bar}>
                <Button onClick={() => handleMenu(true)}>
                    <MenuIcon/>
                </Button>
                <Menu 
                    open={openMenu}
                    onClose={() => handleMenu(false)}
                    anchorReference='anchorPosition'
                    anchorPosition={{ top: 50, left: 30 }}
                    autoFocus
                    >
                    <MenuItem dense onClick={() => handleMenu(false)} component={Link} to={'/'}>Nova Ordem</MenuItem>
                    <MenuItem dense onClick={() => handleMenu(false)} component={Link} to={'/aprovar'}>Aprovação</MenuItem>
                    <MenuItem dense onClick={() => handleMenu(false)} component={Link} to={'/historico'}>Histórico</MenuItem>
                </Menu>
                {props.back ? <Button variant="text" onClick={() => goBack(history)}>voltar</Button> : <></>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;
