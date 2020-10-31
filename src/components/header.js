import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { goBack, goToApprovalList } from '../router/coordinator';
import { useHistory } from 'react-router-dom';

const style = {
    justifyContent: 'space-between'
}

const Header = (props) => {
    const history = useHistory();

    return (
        <AppBar position="fixed" >
            <Toolbar style={style}>
                {!props.initial ? 
                    <IconButton aria-label="back" onClick ={() => goBack(history)}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    : <Box></Box>
                }
                <Button variant="text" color="inherit" onClick={() => goToApprovalList(history)}>gerenciar</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
