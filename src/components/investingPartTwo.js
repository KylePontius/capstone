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

function InvestingPartTwo(){
    const classes = useStyles()
    return(
        <Box className={classes.page}>
            <Container>
                <div>
                    <div className={classes.title}>
                    <Typography variant="h3">Fundamental Analysis</Typography>
                    </div>
                    
                    <div>
                    When choosing an investment, it is critical for many to understand the ins and outs of a security and
                     what can affect it. This involves a variety of things, such as macroeconomics, microeconomics, revenue,
                      growth, competition, innovation, public relations, management, etc..
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Some Things to Look Out for:</Typography>
                    <div>
                        <Typography variant="h5" className={classes.subTitle}>Macroeconomics</Typography>
                        <div>
                        The part of economics that concerns things on a large scale in an economy such as GDP, interest  rates, inflation, etc.. 
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>Microeconomics</Typography>
                        <div>
                        The part of economics that concerns the factors and effects of decisions produced from individuals. 
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>Revenue</Typography>
                        <div>
                        The dollar amount of sales a company produces over a time frame, typically by quarter or annually. 
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>Growth</Typography>
                        <div>
                        The ability and probability for a company’s stock price to rise at a rate above most. 
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>Competition</Typography>
                        <div>
                        The number and market share of companies that do something in similar fashion to a particular sector. 
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>Innovation</Typography>
                        <div>
                        The ability for a company to create progress in a sector. 
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>Public Relations</Typography>
                        <div>
                        A company’s reputation with the public.
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>Management</Typography>
                        <div>
                        A company’s oligarchy, controlling the direction of progress in a company, along with the controlling of funds raised through stock sales. 
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>Earnings</Typography>
                        <div>
                        Net-income of a company after a certain period of a time, such as quarterly or yearly (often in a fiscal year). 
                        </div>
                    </div>
                </div>
                <div className={classes.centerButton}>
                    <a href="/investingpartthree"><Button className={classes.button}>Next Topic: Technical Analysis</Button></a>
                </div>
            </Container>
        </Box>
    )
}

export default InvestingPartTwo