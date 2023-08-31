"use client"
import * as React from 'react';
import { useRouter } from 'next/navigation'
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { ListItemText, ListItemIcon, ListItemButton, ListItem, IconButton, Divider, Box, Toolbar, List, CssBaseline, Typography, Drawer as MuiDrawer, useTheme } from '@mui/material';
import { Close } from '@mui/icons-material';

const drawerWidth = 320;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  borderRadius: '0px 30px 0px 0px'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  borderRadius: '0px 30px 0px 0px',
  overflowX: 'hidden',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

type DrawerItemType = {
  label: string,
  path: string,
  icon: React.ReactNode
}

type DrawerType = {
  children: React.ReactNode,
  drawerItems: DrawerItemType[]
};

export function PageLayout({ children, drawerItems }: DrawerType) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter()
  const theme = useTheme()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div id='page' style={{width: '100vw', height: '100vh', display: 'flex'}}>
      <Drawer
        variant="permanent"
        open={open}
        onMouseEnter={() => handleDrawerOpen()}
        onMouseLeave={() => handleDrawerClose()}
      >
        <DrawerHeader>
          {!!open && <IconButton
            onClick={() => handleDrawerClose()}
            sx={
              { [theme.breakpoints.up('md')]: { display: 'none' } }
            }>
            <Close />
          </IconButton>}
        </DrawerHeader>
        <Divider />
        <List>
          {drawerItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{width: '100%', height: '100%'}}>
        {children}
      </Box>
    </div>
  );
}
