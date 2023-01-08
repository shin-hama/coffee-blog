import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'light'
    },
    typography: {
      button: {
        textTransform: 'none'
      },
      h1: {
        fontSize: '3.5rem',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '2.75rem',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '2rem'
      },
      h4: {
        fontSize: '1.75rem'
      },
      h5: {
        fontSize: '1.5rem'
      },
      h6: {
        fontSize: '1.25rem'
      },
      body2: {
        fontSize: '0.8rem'
      },
      fontFamily: ['"Roboto"', '"Noto Sans JP"', 'sans-serif'].join(',')
    }
  })
)

export default theme
