import React from 'react';
import { Box, Typography } from '@material-ui/core';

const EmptyTable = () => {
    return ( 
        <Box>
            <Typography data-testid='empty-text' variant='h6'>Não há ordens pendentes</Typography>
        </Box>
     );
}
 
export default EmptyTable;
