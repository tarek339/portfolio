import {  createTheme, Grid, Paper, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { HiOutlineDevicePhoneMobile, HiOutlineDeviceTablet, HiOutlineComputerDesktop } from 'react-icons/hi2'
import { IoIosTimer } from 'react-icons/io'
import { IoReloadSharp } from 'react-icons/io5'
import { GrHost } from 'react-icons/gr'
import { MdOutlineHttps } from 'react-icons/md'
import { BsLightningCharge } from 'react-icons/bs'
import { RxUpdate } from 'react-icons/rx'

let theme = createTheme()
theme = responsiveFontSizes(theme)

theme.typography.body1 = {
    fontSize: '2rem',
    '@media (min-width:768px)': {
      fontSize: '3rem'
    }
  }

  const style = {
    padding: '10px',
    textAlign: "left"
  };

export default function Service() {
  return (
    <div className='service' id='service'>
      <ThemeProvider theme={theme}>
      <Typography style={{fontWeight:"bold"}} variant='body1'>Service</Typography>
      </ThemeProvider>
      <Box>
      <Grid 
       container
       spacing={{ xs: 2, sm: 4,  }} 
       columns={{ xs: 1, sm: 10, md: 16, lg: 16 }}
       direction="row" 
       justifyContent="center" 
       >
      <Grid item sm={4} md={5} lg={4}>
          <Paper style={style} className='paper' elevation={4}>
            <p className='paper-topic'>Responsives Design</p>
            <p className='paper-content'>Ansicht und Benutzerfreudlichkeit für alle Endgeräte</p>            
              <li><HiOutlineDevicePhoneMobile style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>Mobile</li>
              <li><HiOutlineDeviceTablet style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>Tablet</li>
              <li><HiOutlineComputerDesktop style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>Computer</li>
          </Paper>
        </Grid>
        <Grid item sm={4} md={5} lg={4}>
          <Paper style={style} className='paper' elevation={4}>
            <p className='paper-topic'>Leistung</p>
            <p className='paper-content'>Single Page Applications für schnelles Laden der Daten</p>
            <li><IoIosTimer style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>Ladezeit</li>
            <li><IoReloadSharp style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>Verarbeitung</li>
            <li><BsLightningCharge style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>Schnell</li>
          </Paper>
        </Grid>
        <Grid item sm={4} md={5} lg={4}>
          <Paper style={style} className='paper' elevation={4}>
            <p className='paper-topic'>Hosting</p>
            <p className='paper-content'>24/7 Hosting und Service für Erreichbarkeit der Website</p>
            <li><GrHost style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>Hosting</li>
            <li><RxUpdate style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>Update</li>
            <li><MdOutlineHttps style={{verticalAlign:"bottom", marginRight:"5px"}} fontSize="2rem"/>SSL Zertifikat</li>
          </Paper>
        </Grid>
      </Grid> 
      </Box>
    </div>
  )
}