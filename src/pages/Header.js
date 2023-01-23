import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { createTheme, Grid, responsiveFontSizes, Typography } from '@mui/material'
import { ImHtmlFive2, ImCss3 } from 'react-icons/im';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiExpress, SiMaterialui, SiMongodb } from 'react-icons/si';
import "../css/animation.css"

let theme = createTheme()
theme = responsiveFontSizes(theme)

theme.typography.body1 = {
    fontSize: '2rem',
    margin: "20px",
    '@media (min-width:768px)': {
      fontSize: '3rem'
    }
  }

export default function Header() {
  return (
    <div className='header' id='home'>
        <ThemeProvider theme={theme}>
          <Typography variant='body1'>Hi, ich bin Tarek</Typography>
          <Typography variant='body1'>Ich bin ein Webentwickler von</Typography>
          <Typography variant='body1' style={{color:"#ea4343"}}><span className="box b1">Webseiten</span></Typography>
          <Typography variant='body1' style={{color:"#ea4343"}}><span className="box b2">Webanwendungen</span></Typography>
          <Typography variant='body1' sx={{pt:16}}>Meine Skills</Typography>
        </ThemeProvider>
        <div className='react-icons-area'>
        <Grid 
          container 
          direction="row" 
          justifyContent="center" 
          spacing={{ xs: 4, md: 6 }} 
          columns={{ xs: 4, sm: 12, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
            <ImHtmlFive2 fontSize="5rem"/>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <ImCss3 fontSize="5rem"/>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <SiJavascript fontSize="5rem"/>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <FaReact fontSize="5rem"/>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <SiRedux fontSize="5rem"/>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <SiExpress fontSize="5rem"/>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <SiMaterialui fontSize="5rem"/>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <SiMongodb fontSize="5rem"/>
            </Grid>
        </Grid>
        </div>
    </div>
  )
}