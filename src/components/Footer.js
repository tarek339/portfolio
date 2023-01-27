import { createTheme, 
         Grid, 
         responsiveFontSizes, 
         ThemeProvider, 
         Typography } from '@mui/material'
import React from 'react'
import Imprint from './Imprint'
import PrivacyModal from './PrivacyModal'

let theme = createTheme()
theme = responsiveFontSizes(theme)

theme.typography.body1 = {
    fontSize: '14px',
}

export default function Footer() {
  return (
    <div className='footer'>
      <ThemeProvider theme={theme}>
      <div className='footer-content'>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
        >
        <Typography variant='body1'>Tarek Jassine</Typography> 
        <div className='same'>
          <div className='body1' variant='body1'>
            <PrivacyModal/>
          </div>
          <div className='body2' variant='body1'>
            <Imprint/>
          </div>
      </div>
        </Grid>
        </div> 
      </ThemeProvider>
    </div>
  )
}
