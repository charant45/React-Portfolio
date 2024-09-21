import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Snackbar, Alert, InputAdornment, GlobalStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as z from 'zod';
import { Person, Email, Phone, Subject, Message } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#f97316' },
    background: { default: '#1E1E1E', paper: '#2E2E2E' },
    text: { primary: '#ffffff' },
  },
});

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  number: z.string().regex(/^\d{10}$/, { message: 'Number should be 10 digits.' }),
  subject: z.string().min(2, { message: 'Subject is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      return true;
    } catch (error) {
      const newErrors = {};
      error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: '9ac59474-d0d8-462c-a958-89bed64ab94b',
            ...formData,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setSnackbar({ open: true, message: 'Your message has been sent successfully.', severity: 'success' });
          setFormData({ name: '', email: '', number: '', subject: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        setSnackbar({ open: true, message: 'Failed to submit form. Please try again.', severity: 'error' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  const inputProps = {
    name: { icon: <Person />, label: 'Name', placeholder: 'Enter your name' },
    email: { icon: <Email />, label: 'Email', placeholder: 'Enter your email' },
    number: { icon: <Phone />, label: 'Phone Number', placeholder: 'Enter your phone number' },
    subject: { icon: <Subject />, label: 'Subject', placeholder: 'Enter the subject' },
    message: { icon: <Message />, label: 'Message', placeholder: 'Enter your message' },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          'input:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 1000px #ffffff inset',
            '-webkit-text-fill-color': '#000000 !important',
          },
        }}
      />
      <Box id="contact" sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
        <Container maxWidth="sm">
          <Box sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            }
          }}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem', lg: '4.5rem' },
                fontWeight: 'bold',
                mb: { xs: 4, sm: 6, md: 8 },
                textAlign: 'center',
                color: 'text.primary',
              }}
            >
              Contact <span style={{ color: theme.palette.primary.main }}>Me</span>
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              {Object.entries(inputProps).map(([key, { icon, label, placeholder }]) => (
                <TextField
                  key={key}
                  margin="dense"
                  required
                  fullWidth
                  id={key}
                  label={label}
                  name={key}
                  autoComplete={key}
                  value={formData[key]}
                  onChange={handleChange}
                  error={!!errors[key]}
                  helperText={errors[key]}
                  type={key === 'email' ? 'email' : key === 'number' ? 'tel' : 'text'}
                  multiline={key === 'message'}
                  rows={key === 'message' ? 4 : 1}
                  placeholder={placeholder}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
                  }}
                  sx={{
                    mb: 2,
                    '& label.Mui-focused': {
                      color: '#FD6F00',
                    },
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#FD6F00',
                      },
                    },
                    '& .MuiInputAdornment-root': {
                      marginRight: '8px',
                    },
                  }}
                />
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  bgcolor: '#f97316',
                  color: '#ffffff',
                  '&:hover': {
                    bgcolor: '#ea580c',
                    transform: 'none',
                    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
                  },
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </Box>
          </Box>
        </Container>
        <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
