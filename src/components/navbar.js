import { alpha, AppBar, Button, InputBase, a, makeStyles, Toolbar, Typography, Box } from '@material-ui/core';
import { AccountBalanceTwoTone, Block, Opacity, Search } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import React, {useState} from 'react';
import './navbar.css'
import Select from 'react-select'
import {Link} from 'react-router-dom'
import HomePage from './homePage';




const useStyles = makeStyles((theme ) => ({
  Toolbar:{
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#3A3064",
    fontFamily:"Roboto"
  },
  searchBar:{
    display:"flex",
    alignItems:"center",
    width:"300px",
    color:"black"
  },
  Select:{
    width: "300px",
    color:"black"
  },
  logoLg:{
    display:"none",
    
    [theme.breakpoints.up("md")]:{
      display:"block",
    }
  },
  logoSm:{
    display:"none",
    [theme.breakpoints.down("sm")]:{
      display: "block"
    }},
  logIn:{
    backgroundColor:"#CFB249",
    '&:hover':{
      backgroundColor:"#CFB249",
      opacity: ".8",
    }
  },
  signUp:{
    backgroundColor:"#CFB249",
    '&:hover':{
      backgroundColor:"#CFB249",
      opacity: ".8"
    }
  },
  units:{
    color:"white",
    textTransform:"none",
    '&:hover':{
      opacity:".4",
    }
  },
  articles:{
    textTransform:"none",
    '&:hover':{
      opacity:".4" 
    }
  },
  search:{
    display:"flex",
    alignItems:"center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover':{
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("sm")]:{
      background: "none"
    }
  },
  inputBar:{
    color:"white",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
      display: "none"
    }
  },
  navLinks:{
    color: "black"
  },
  navSeperator:{
    fontSize:"20px",
    [theme.breakpoints.down("md")]:{
      display: "none"
    }
  },
  dropdownContent:{
    display:"none",
    position:"absolute",
    
  },
  show:{
    display:"block"
  }
}))

const options = [
  {value: '0.0', label:"Introduction"},
  {value: '1.0', label:"Banks"},
  {value: '2.0', label:"Credit"},
  {value: '3.0', label:"Taxes"},
  {value: '4.0', label:"Investing"},
  {value: '5.0', label:"Insurance"},
  {value: '6.0', label:"Education"},
  {value: '7.0', label:"Career"},
]


function Navbar() {
  const classes = useStyles()
  return <AppBar><Toolbar className={classes.Toolbar}>
     <Typography variant="h6" className={classes.logoLg}>
        <a href="/" className='logoLink'> Finance Academy</a>
      </Typography>
        <Typography variant="h6"className={classes.logoSm}>
        <a href="/" className='logoLink'><AccountBalanceTwoTone style={{position: 'relative', top: '5px'}}></AccountBalanceTwoTone></a>
      </Typography>      
        <ul>
          <li className={classes.navLinks}><a href="units" className={classes.link}><Button className={classes.units}>Units</Button></a></li>
        
        </ul>
      </Toolbar>
    </AppBar>;
}

export default Navbar;
