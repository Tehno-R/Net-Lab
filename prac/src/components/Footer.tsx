import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{
      py: 3,
      px: 2,
      mt: 5,
      backgroundColor: (theme) => theme.palette.grey[200],
      textAlign: 'center'
    }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Ваша компания. Все права защищены.
      </Typography>
    </Box>
  );
}

export default Footer;
