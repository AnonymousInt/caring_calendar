import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Scheduler from './components/Scheduler';
const drawerWidth = 50;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#094e87',
    height: '50px',
  },
  appToolBar:{
    minHeight: '50px',
    padding: '0px 13px'
  },
  appAvatar:{
    width: '21px',
    height: '21px',
    fontSize: '10px',
    backgroundColor: '#202020'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    overflowX: 'hidden',
    width: '50px',
    background: '#121212',
  },
  drawerContainer: {
    // overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  appBtnIcon:{
    background: '#121212',
    padding: '6px',
    opacity: '0.72',
    margin: '6px 4px 5px'
  },
  appDropDown:{
    background: '#121212',
    opacity: '0.72',
    margin: '6px 4px 5px',
    fontSize: '8px',
    height: '24px',
    borderRadius: '0px',
  },
  appDept:{
    paddingLeft : '10px', 
    display: 'flex',
    fontSize: '12px',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.appToolBar}>
          <Avatar className={classes.appAvatar}>H</Avatar>     
          <Typography noWrap className={classes.appDept}>
            Sydney Clinic <ExpandMoreIcon/>
          </Typography>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            className={classes.appDropDown}
          >
            Open Menu <ExpandMoreIcon/>
          </Button>
          <AddBoxIcon className={classes.appBtnIcon}/>
          <SearchIcon className={classes.appBtnIcon}/>
          

         
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List className={'calendar-drawer'}>
            {['Dashboard', 'Calendar', 'People', 'Mail','Reports', 'Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon><img src={'./images/' + text +'.png'} alt=''/></ListItemIcon>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className='main-page'>
        <main className={classes.content}>
        
            <Scheduler/>  
          
        </main>
      </div>
    </div>
  );
}
