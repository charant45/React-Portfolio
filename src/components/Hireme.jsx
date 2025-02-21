import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Person, Email, Message, GitHub, LinkedIn, Mail, Close } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Styled components with improved styling
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'rgba(30, 30, 30, 0.85)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    color: '#fff',
    overflow: 'hidden', // For the animated background
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    position: 'relative',
    zIndex: 1,
  },
}));

const OrangeTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& label.Mui-focused': {
    color: '#FD6F00',
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FD6F00',
    },
  },
  '& .MuiInputAdornment-root': {
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

const OrangeButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FD6F00',
  color: theme.palette.common.white,
  padding: '12px 0',
  fontSize: '1.1rem',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#E56200',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(253, 111, 0, 0.2)',
  },
  transition: 'all 0.3s ease',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  padding: theme.spacing(1.5),
  '&:hover': {
    color: '#FD6F00',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover': {
    color: '#FD6F00',
  },
}));

// Animated background component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Animated blur orbs */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          background: 'linear-gradient(45deg, #FD6F00, #FF9E43)',
          filter: 'blur(80px)',
          opacity: 0.15,
        }}
        initial={{ 
          width: '300px', 
          height: '300px',
          x: -150, 
          y: -150,
          scale: 0 
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [
            Math.random() * window.innerWidth - 150,
            Math.random() * window.innerWidth - 150,
            Math.random() * window.innerWidth - 150
          ],
          y: [
            Math.random() * window.innerHeight - 150,
            Math.random() * window.innerHeight - 150,
            Math.random() * window.innerHeight - 150
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: i * 2,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

function HireMe({ goBack }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    goBack();
  };

  return (
    <StyledDialog 
      open={true} 
      onClose={goBack} 
      maxWidth="sm" 
      fullWidth
      TransitionComponent={motion.div}
      TransitionProps={{
        initial: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        transition: { duration: 0.3 }
      }}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
        },
      }}
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <DialogTitle sx={{ pb: 1, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            sx={{
              background: 'linear-gradient(45deg, #FD6F00, #FF9E43)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1
            }}
          >
            Let's Work Together
          </Typography>
        </motion.div>
        <CloseButton aria-label="close" onClick={goBack}>
          <Close />
        </CloseButton>
      </DialogTitle>

      <DialogContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <OrangeTextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              required
              variant="outlined"
              InputProps={{
                startAdornment: <Person />,
              }}
            />
            <OrangeTextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              required
              variant="outlined"
              InputProps={{
                startAdornment: <Email />,
              }}
            />
            <OrangeTextField
              margin="dense"
              id="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              required
              variant="outlined"
              InputProps={{
                startAdornment: <Message />,
              }}
            />
            <Box sx={{ mt: 4, mb: 3 }}>
              <OrangeButton type="submit" fullWidth variant="contained" size="large">
                Send Message
              </OrangeButton>
            </Box>
            <Box sx={{ 
              mt: 2, 
              display: 'flex', 
              justifyContent: 'center',
              gap: 2 
            }}>
              <SocialIconButton aria-label="github" href="https://github.com/charant45" target="_blank">
                <GitHub fontSize="large" />
              </SocialIconButton>
              <SocialIconButton aria-label="linkedin" href="https://www.linkedin.com/in/tcharan/" target="_blank">
                <LinkedIn fontSize="large" />
              </SocialIconButton>
              <SocialIconButton aria-label="email" href="mailto:charan4567890@gmail.com">
                <Mail fontSize="large" />
              </SocialIconButton>
            </Box>
          </Box>
        </motion.div>
      </DialogContent>
    </StyledDialog>
  );
}

export default HireMe;