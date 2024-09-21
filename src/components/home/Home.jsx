import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Profile from "../../assests/Group 2.svg";
import HireMe from '../Hireme';

const jobTitles = ["UI/UX Designer", "Web Developer"];

const OrangeButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FD6F00',
  color: theme.palette.common.white,
  padding: '10px 20px',
  fontSize: '1.125rem',
  fontWeight: 600,
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: '#E56200',
  },
}));

const SocialIcon = styled(motion.a)(({ theme }) => ({
  color: theme.palette.common.white,
  '&:hover': {
    color: '#FD6F00',
  },
}));

function HomePage() {
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (showForm) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#1E1E1E', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HireMe goBack={() => setShowForm(false)} />
      </Box>
    );
  }

  return (
    <Box id="home" sx={{ bgcolor: '#1E1E1E', minHeight: '100vh', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: { xs: 10, md: 12 } }}>
      <Box sx={{ width: '100%', maxWidth: '1400px', px: { xs: 3, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', textAlign: { xs: 'center', md: 'left' }, ml: { xs: 3, md: 8 } }}>
        <motion.div
          style={{ width: '100%', maxWidth: '600px', marginBottom: '1.5rem' }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" sx={{ mb: 1 }}>Hi, I am</Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: '#FD6F00' }}>Charan T</Typography>
          <motion.div
            style={{ minHeight: '4rem', marginBottom: '1.5rem' }}
            key={isTransitioning ? jobTitleIndex : undefined}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isTransitioning ? -20 : 0, opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>{jobTitles[jobTitleIndex]}</Typography>
          </motion.div>
          <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: { xs: '300px', md: 'none' }, mx: 'auto' }}>
            I specialize in designing seamless experiences for web applications as a web developer, focusing on user-friendly and aesthetically pleasing designs. My work involves collaborating with cross-functional teams to refine and implement effective design solutions.
          </Typography>
          <OrangeButton onClick={() => setShowForm(true)}>
            Hire Me
          </OrangeButton>
        </motion.div>

        <motion.div
          style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={{
              width: { xs: '80%', md: '22rem' },
              height: { xs: '80%', md: '22rem' },
              borderRadius: '50%',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              background: 'linear-gradient(to right, #1E1E1E, #1E1E1E, #1E1E1E)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={Profile} alt="Charan T" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <SocialIcon href="https://github.com/charant45" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <GitHubIcon fontSize="large" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/tcharan/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <LinkedInIcon fontSize="large" />
            </SocialIcon>
            <SocialIcon href="mailto:charan4567890@gmail.com" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <EmailIcon fontSize="large" />
            </SocialIcon>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HomePage;
