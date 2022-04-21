import { alpha, AppBar, Button, InputBase, a,Box, makeStyles, Toolbar, Typography, Container, Grid, styled } from '@material-ui/core';
import { AccountBalanceTwoTone, Block, Search } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';

const useStyles = makeStyles((theme ) => ({
    page:{
        paddingTop:"70px",
        fontFamily:"Roboto",
        fontSize:"20px"
   },
   title:{
        fontFamily:"Arial",
        fontSize:"1.1em"
   },
   subTitle:{
        paddingTop:"40px",
        fontSize:"1.1em",
        fontWeight:"bold"
   },
   centerButton:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold",
        marginTop:"20px",
        paddingBottom:"10px"
   },
   button:{
        backgroundColor:'#3A3064',
        opacity:'.9',
        '&:hover':{
        backgroundColor:'#3A3064',
        opacity:'1'
        },
        alignItems:'center',
        color:'white'
   },
   img:{
        paddingTop:'20px',
        paddingBottom:'20px',
        display:'flex',
        width:'60%',
        height:'600px',
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto'
   },
   divider:{
       margin:"30px 0px 30px 0px"
   }
}))

function InvestingPartThree(){
    const classes = useStyles()
    return(
        <Box className={classes.page}>
            <Container>
                <div>
                    <div className={classes.title}>
                    <Typography variant="h3">
                        Technical Analysis
                    </Typography>
                    </div>
                    
                    <div>
                    When choosing a security to invest in, it is important to understand the technical interpretation of it.
                     Technical analysis allows one to interpret and understand price action, sentiment, and help project future
                      price targets, without the need of fundamental analysis.
                    </div>
                    <div>
                        <div>
                        <Typography variant="h4" className={classes.subTitle}>Elliott Wave Theory</Typography>
                        <div>Created by Ralph Nelson Elliott, is a theory of technical analysis that describes financial markets
                             moving in five wave structures that are fractal in nature. These structures are made up of corrective
                              and impulsive moves, which can be thought of as three steps forward, two steps back. Elliott Wave
                               Theory is a subjective theory, however, when applying the teachings of Fibonacci and indicators 
                               like the MACD, it becomes much more objective to provide high probability targets. Elliott Wave 
                               Theory often disregards news and fundamentals as it is a core belief that the forces of people’s
                                minds had already put assumptions into motion.
                        </div>
                        </div>
                        <div>
                        <Typography variant="h4" className={classes.subTitle}>Fibonacci</Typography>
                        <div>The math of nature, occurring throughout the universe, the DNA of people, and subconscious actions 
                            within people. The most common being various Greek temples. The idea of fibonacci in investing, is 
                            that since people are not exempt from the effects of the fibonacci sequence, the choices and actions 
                            of people in financial markets are no different.
                        </div>
                        </div>
                        <div>
                        <Typography variant="h4" className={classes.subTitle}>Moving Average Convergance Divergence</Typography>
                        <div>Known as the MACD, the moving average convergence divergence is a technical indicator that can 
                            indicate when things are overbought and oversold, and works by subtracting 26-period EMA from
                             12-period EMA.
                        </div>
                        </div>
                        <Typography variant="h4" className={classes.subTitle}>Conclusion</Typography>
                        <div>
                        Some people believe that the best means of investing is fundamental analysis, others technical, and 
                        others use a combination of both. There is no clear winner (it’s Technical Analysis), so just choose to
                         keep an open mind when taking into account what sways the entry into an investment. 
                        </div>
                    </div>
                </div>
                <div className={classes.centerButton}>
                    <a href="/highereducationpartone"><Button className={classes.button}>Next Unit: Higher Education</Button></a>
                </div>
            </Container>
        </Box>
    )
}

export default InvestingPartThree;