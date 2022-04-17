import * as React from 'react';
import {Grid, Typography} from '@mui/material';
import {Delete} from '@mui/icons-material';

const Cancel = () => {
  return (
  <>
    <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={4}>
        <Delete/>
      </Grid>
      </Grid>
      </>
      );
      };

      export default Cancel