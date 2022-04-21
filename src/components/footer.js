import { alpha, AppBar, Button, InputBase, a, makeStyles, Toolbar, Typography, Box, TextField } from '@material-ui/core';
import { AccountBalanceTwoTone, Block, CallMissedSharp, Search } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import './footer.css';


const useStyles = makeStyles((theme) =>({
footerBox:{

    textDecorationColor: "red",
    paddingBottom:"10px",
    backgroundColor:"#3A3066",
    color:"white",
    marginTop:"50px",
    fontFamily:"Roboto"
},
first:{

    textAlign: "center"
},
newsletterTextField:{
    justifyContent:"center",
    textAlign:"center",
    height: "50%",

},
newsletterButton:{
    marginLeft:"10px",
    backgroundColor: "#3A3066",
    '&:hover':{
        backgroundColor: "#3A3066"
      },
    justifyContent:"center",
    textAlign:"center",
    color:"white"
},
second:{

    textAlign: "center"
},
third:{

    textAlign: "center"
},
linkList:{
   display:"flex",
   flexDirection:"column"
},
newsletter:{
    marginTop:"50px"
}
}))


function Footer(){
    const classes = useStyles()
    return(
        <div>
            <Grid container row className={classes.footerBox}>
                <Grid xs={12} md={6} lg={6} xl={6} className={classes.first}>
                    <div>
                        <h2>Finance Academy</h2>
                        <div className={classes.newsletter}>
                        <div>Join our newsletter!</div>
                        <div><TextField className={classes.newsletterTextField}
                             placeholder="Enter your email"
                             ></TextField>
                        <Button className={classes.newsletterButton}>Submit</Button></div>
                        </div>
                        
                    </div>
                </Grid>
                <Grid xs={6} md={6} lg={6} xl={6} className={classes.second}>
                    <h3>Units</h3>
                    <ul className={classes.linkList}>
                        <li><a href="/bpone">Banks</a></li>
                        <li><a href="/credit">Credit</a></li>
                        <li><a href="/taxespartone">Taxes</a></li>
                        <li><a href="/insurance">Insurance</a></li>
                        <li><a href="/investingpartone">Investing</a></li>
                        <li><a href="/highereducationpartone">Education</a></li>
                    </ul>
                </Grid>
            
            </Grid>
        </div>
    )
}

export default Footer
