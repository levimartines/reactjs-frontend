import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Link from '@mui/material/Link';

export const Forbidden = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Please <Link color="inherit" href="/">Log In</Link> to continue
      </Typography>
    </Box>
  );
};
