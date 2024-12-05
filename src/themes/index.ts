import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffa0c0',
      light: '#fad8b8',
      dark: '#e54041',
      contrastText: '#f04779',
    },
    secondary: {
      main: '#fff',
      light: '#f8a3a5',
      dark: '#ff6161',
      contrastText: '#c33d6e',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          ' .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.primary.main,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.contrastText,
            },
            ' &.Mui-focused fieldset': {
              borderColor: theme.palette.primary.contrastText,
            },
          },

          '& input': {
            color: theme.palette.primary.contrastText,
          },
        }),
      },
    },
  },
});

export default theme;
