import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import { Box, 
         Drawer, 
         List, 
         ListItem, 
         ListItemButton, 
         ListItemText, 
         Toolbar, 
         Typography, 
         Stack,
         Link,
         AppBar,
       } from "@mui/material"

const drawerWidth = {xs: 240, sm: 380}

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography>
        Lable
      </Typography>
      <Divider /> */}
      <List>
      <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText>
                <Link underline="none" href="#home" style={{color:"#222", fontSize:"16px", textTransform:"uppercase"}}>Home</Link>
            </ListItemText>
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
                <Link underline="none" href="#service" style={{color:"#222", fontSize:"16px", textTransform:"uppercase"}}>Leistung</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
              <Link underline="none" href="#aboutme" style={{color:"#222", fontSize:"16px", textTransform:"uppercase"}}>Über mich</Link>
                </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText>
              <Link underline="none" href="#contact" style={{color:"#222", fontSize:"16px", textTransform:"uppercase"}}>Kontakt</Link>
                </ListItemText>
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box>
      <AppBar elevation={3} sx={{backgroundColor:"white"}}>
        <div
        >
        <Toolbar className="navbar" variant="dense">
          <MenuIcon
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color:"#222", mr: 1, display: { sm: "none" } }}
          />
          <Typography style={{color:"#222", fontSize:"18px", fontFamily:"sans-serif"}} sx={{ flexGrow: 1}}>Tarek's Web & App Developement</Typography>
          <Box sx={{ display: { xs: 'none', sm: "block" } }}>
          <Stack direction="row" spacing={4}>
              <Link underline="none" href="#home">
                <button 
                className="link"
                >Home</button>
              </Link>
              <Link underline="none" href="#aboutme">
                <button className="link">About me</button>
              </Link>
              <Link underline="none" href="#service">
                <button className="link">Service</button>
              </Link>
              <Link underline="none" href="#contact">
                <button className="link">
                  <span>Kontakt</span>
                </button>
              </Link>
          </Stack>
          </Box>
        </Toolbar>
        </div>
      </AppBar>
      
      <Box>
        <Drawer
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md:"none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

