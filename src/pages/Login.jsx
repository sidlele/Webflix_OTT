import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Stack,
  Link,
} from '@mui/material';
import bgImage from '../assets/login-page-background.jpg';
import logo from '../assets/webflix-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add your login logic here
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

      {/* Header with logo */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
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
      </Box>

      {/* Login Form Centered */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 200px)', // full height minus header
        }}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            width: '100%',
            maxWidth: 400,
            backgroundColor: 'rgba(0,0,0,0.75)',
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              color: 'white',
              textAlign: 'left',
            }}
          >
            Sign In
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Email"
              type="email"
              variant="filled"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: { backgroundColor: '#fff' },
              }}
              InputLabelProps={{
                style: { color: '#555' },
              }}
            />

            <TextField
              label="Password"
              type="password"
              variant="filled"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              fullWidth
              sx={{ fontWeight: 'bold', fontSize: '1rem', py: 1.5 }}
            >
              Sign In
            </Button>
          </Stack>

          <Typography sx={{ mt: 3, color: '#ccc', textAlign: 'center' }}>
            New to Webflix?{' '}
            <Link
              onClick={() => navigate('/register')}
              underline="hover"
              sx={{ color: 'white', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Sign up now.
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
