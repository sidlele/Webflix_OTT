import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Stack,
} from '@mui/material';
import bgImage from '../assets/login-page-background.jpg';
import logo from '../assets/webflix-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    console.log('Start with email:', email);
    navigate('/register');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      />

      {/* Header */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          py: 2,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Webflix"
          sx={{ height: { xs: 60, sm: 100 }, cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate('/login')}
          sx={{
            fontWeight: 'bold',
            textTransform: 'none',
            px: 3,
            py: 1,
          }}
        >
          Sign In
        </Button>
      </Box>

      {/* Main Content pinned to top */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
          pt: { xs: 4, sm: 6 }, // very small top padding
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
          }}
        >
          Unlimited movies, TV shows and more
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Watch anywhere. Cancel anytime.
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Ready to watch? Enter your email to create your profile.
        </Typography>

        <Box
          component="form"
          onSubmit={handleStart}
          sx={{ width: '100%', maxWidth: 600 }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ alignItems: 'center' }}
          >
            <TextField
              variant="filled"
              fullWidth
              label="Email address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: { backgroundColor: '#fff' },
              }}
              InputLabelProps={{
                style: { color: '#555' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{
                fontSize: '1rem',
                py: 1.5,
                px: 4,
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
