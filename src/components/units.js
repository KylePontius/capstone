import { alpha, AppBar, Paper, Button, InputBase, a,Box, makeStyles, Toolbar, Typography, Container, Grid, styled, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';
import { AccountBalanceTwoTone, Block, Search, CloseIcon, Clear, ExpandLess } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';
import Divider from '@mui/material/Divider';

const useStyles = makeStyles((theme ) => ({
   page:{
    paddingTop: "100px",
    fontSize: "1.2rem",
    fontFamily:"Arial"
   },
   gridItem:{
       display:"flex",
       justifyContent:"center",
       textAlign:"center",
       border:"1px solid black"
   },
   topicTitle:{
       color:"black",
       paddingTop:"20px",
   },
   topicSummary:{
       color:"black",
       paddingTop:"20px",
       display:"block"
   },
   button:{
    fontSize:"20px",
    color:"black",
    marginTop:"15px",
    fontSize:"20px",
    color:"#F3F3FA",
    marginTop:"15px",
    backgroundColor: alpha("#17122B", 0.9),
    '&:hover':{
    backgroundColor: alpha("#17122B", 0.8),

   }}

}))

function Units(){
    const classes = useStyles()
    return(
        <Box className={classes.page}>
            <Container>
              <div>
                <Typography variant="h4" className={classes.topicTitle}>Introduction</Typography>
                <div className={classes.topicSummary}>A short, introductory unit where users are introduced to the importance of understanding finance 
                through the matters of inflation. Users are provided with a brief explaination to what inflation is, how it affects one's financial position, and 
                an interactive calculator where the values of amount, time, and inflation rate can be plugged in to determine the depreciation of cash over time.</div>
                <a href="/Inflation"><div className={classes.buttonDiv}><Button className={classes.button}>Get Started</Button></div></a>
              </div>
              <div>
                <Typography variant="h4" className={classes.topicTitle}>Banks</Typography>
                <div className={classes.topicSummary}>
                  A three part unit where users are introduced to various topics and features pertaining to banks. This unit is designed to educate the user on 
                  the concepts of banks, the financial products offered by banks, along with the types of banks along with their utility.
                </div>
                <a href="/Bpone"><div className={classes.buttonDiv}><Button className={classes.button}>Get Started</Button></div></a>
              </div>
              <div>
                <Typography variant="h4" className={classes.topicTitle}>Credit</Typography>
                <div className={classes.topicSummary}>This unit introduces the idea of credit and budgeting, with the users learning about the concept of credit, how to acheive a high score, and 
                how to maintain said score.</div>
                <a href="/Credit"><div className={classes.buttonDiv}><Button className={classes.button}>Get Started</Button></div></a>
              </div>
              <div>
                <Typography variant="h4" className={classes.topicTitle}>Taxes</Typography>
                <div className={classes.topicSummary}>This unit introduces the concept of taxes, where the user is taught the reasoning for taxes, how to pay taxes, and 
                why taxes are done in a peculiar manner.</div>
                <a href="/Taxespartone"><div className={classes.buttonDiv}><Button className={classes.button}>Get Started</Button></div></a>
              </div>
              <div>
                <Typography variant="h4" className={classes.topicTitle}>Insurance</Typography>
                <div className={classes.topicSummary}>This unit introduces the concept of insurance, the types of insurance, and when one might need to consider obtaining or abstaining 
                from insurance. </div>
                <a href="/Insurance"><div className={classes.buttonDiv}><Button className={classes.button}>Get Started</Button></div></a>
              </div>
              <div>
                <Typography variant="h4" className={classes.topicTitle}>Investing</Typography>
                <div className={classes.topicSummary}>This unit introduces the concept of investing, a means of wealthbuilding, the user will learn about 
                two ideas of analyzing a financial securities, being technical and fundamental analysis.</div>
                <a href="/Investingpartone"> <div className={classes.buttonDiv}><Button className={classes.button}>Get Started</Button></div></a>
              </div>
              <div>
                <Typography variant="h4" className={classes.topicTitle}>Higher Education</Typography>
                <div className={classes.topicSummary}>This unit introduces the concept of obtaining education after high school, with a focus on the typical 
                four year college route, trade school, community college, and certifications.</div>
                <a href="/highereducationpartone"><div className={classes.buttonDiv}><Button className={classes.button}>Get Started</Button></div></a>
              </div>
              
            </Container>
        </Box>

    )
}

export default Units;