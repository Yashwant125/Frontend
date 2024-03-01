import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import YourSvg from './logo.svg';

const drawerWidth = 240;

function FixedSidebar() {
    const icons = [
        <DashboardIcon />,
        <ReceiptIcon />,
        <PeopleIcon />,
        <GroupIcon />,
        <BarChartIcon />,
        <SettingsIcon />,
        <CalendarTodayIcon />,
      ];
    
      const menuItems = ['Dashboard', 'Loans', 'Customers', 'Users', 'Reports', 'Settings', 'Calendar'];
  return (
   
    <Box sx={{ display: 'flex' }}>
  
      
      {/* Fixed Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            zIndex: (theme) => theme.zIndex.drawer,
          }}
          open
        >
           <Toolbar sx={{ margin: 0, padding: 0 }} />
          <img src={YourSvg} alt="Your SVG" style={{ width: '100%', marginBottom: '16px' }} />
          <List>
          {menuItems.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
          ))}
          </List>
         
        </Drawer>
      </Box>

   
    </Box>
  );
}

export default FixedSidebar;