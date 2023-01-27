import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GrClose } from 'react-icons/gr';
import { Grid } from '@mui/material';
import { BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { IoMailSharp } from 'react-icons/io5';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:"auto",
  maxHeight:"90vh",
  display: "block"
};

export default function Imprint() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography onClick={handleOpen}>Impressum</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        disableAutoFocus={true}
      >
        <Box sx={style}>
        <Grid container direction="row" justifyContent="space-between">
        <h2>Impressum</h2>
        <GrClose className='close-icon' onClick={handleClose}/>
        </Grid>
        <div sx={{ mt: 2 }}>
          <p>Tarek's Web & App Developement</p>
          <p>Classenweg 21</p>
          <p>22391 Hamburg</p>
          <p>+49 (0) 151 25258758</p> 
          <p>USt.-IdNr.: DE355575992</p>
        </div>
        <div className='imprint-icon'>
          <a href='mailto:tarekjassine@gmail.com'><IoMailSharp size="24px"/></a> 
          &nbsp;&nbsp;
          <a href='https://wa.me/015125258758' target="_blank" rel='noreferrer'><BsWhatsapp size="24px"/></a>
          &nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/tarekjassine' target="_blank" rel='noreferrer'><BsLinkedin size="24px"/></a> 
          &nbsp;&nbsp;
          <a href='https://github.com/tarek339' target="_blank" rel='noreferrer'><BsGithub size="24px"/></a>
        </div>
        </Box>
      </Modal>
    </div>
  );
}
