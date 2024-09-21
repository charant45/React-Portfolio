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

const OrangeTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: '#FD6F00',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#FD6F00',
    },
  },
  '& .MuiInputAdornment-root': {
    marginRight: theme.spacing(1),
  },
}));

const OrangeButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FD6F00',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: '#E56200',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: '#FD6F00',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

function HireMe({ goBack }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    goBack();
  };

  return (
    <Dialog open={true} onClose={goBack} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h4" align="center" fontWeight="bold" color="#FD6F00">
          Let's Work Together
        </Typography>
        <CloseButton aria-label="close" onClick={goBack}>
          <Close />
        </CloseButton>
      </DialogTitle>
      <DialogContent>
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
              startAdornment: <Person color="action" />,
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
              startAdornment: <Email color="action" />,
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
              startAdornment: <Message color="action" />,
            }}
          />
          <Box sx={{ mt: 3, mb: 2 }}>
            <OrangeButton type="submit" fullWidth variant="contained" size="large">
              Send Message
            </OrangeButton>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <SocialIconButton aria-label="github" href="https://github.com/charant45" target="_blank">
              <GitHub />
            </SocialIconButton>
            <SocialIconButton aria-label="linkedin" href="https://www.linkedin.com/in/tcharan/" target="_blank">
              <LinkedIn />
            </SocialIconButton>
            <SocialIconButton aria-label="email" href="mailto:charan4567890@gmail.com">
              <Mail />
            </SocialIconButton>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default HireMe;