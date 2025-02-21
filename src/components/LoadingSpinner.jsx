import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const spinnerVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear',
    },
  },
};

const LoadingSpinner = () => (
  <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#1E1E1E',
      gap: 2
    }}
  >
    <motion.div
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: '3px solid rgba(255, 255, 255, 0.1)',
        borderTopColor: '#FD6F00',
        borderLeftColor: '#FD6F00',
      }}
      variants={spinnerVariants}
      animate="animate"
    />
    <Box 
      sx={{ 
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '14px',
        fontFamily: 'Poppins, sans-serif'
      }}
    >
      Loading...
    </Box>
  </Box>
);

export default LoadingSpinner;