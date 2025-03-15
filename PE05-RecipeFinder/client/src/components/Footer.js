import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ textAlign: 'center', py: 2, mt: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="textSecondary">
        © 2025 Recipe Finder. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;