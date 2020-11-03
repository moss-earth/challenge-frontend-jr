import { Box, Typography } from '@material-ui/core';
import React from 'react';

const EmptyTable = () => {
    return ( 
        <Box>
            <Typography variant="h6">Não há ordens pendentes</Typography>
        </Box>
     );
}
 
export default EmptyTable;
