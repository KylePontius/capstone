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
function Credit(){
    const classes=useStyles()
    return(
<Box className={classes.page}>
    <Container>
        <div className={classes.title}><h3>Credit</h3></div>
    <div>
    <Typography variant="h4" className={classes.subTitle}>What is Credit?</Typography>
    <div>Credit is the measure of one’s capability to repay borrowed money. The extent of this ability is referred to as a
         credit score, typically from the range of 300 to 850. A higher credit score indicates the customer is less risky to
          lend money to, whereas the lower the score indicates higher risk in lending. Credit score is merely a quantified 
          reputation to present to loaners like banks, to determine to give you the money for a loan/line of credit without 
          personally knowing you.
    </div>
</div>
<div>
    <img className={classes.img} src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2019/06/credit-score-ranges-600x450.png" alt="Credit Score Rating"></img>
</div>
<div>
    <Typography variant="h4" className={classes.subTitle}>Why Maintain a High Credit Score?</Typography>
    <div>A high credit score is crucial to maintain as it makes taking on debt incredibly easier. Not only does it better
         qualify you to take on loans for hefty items such as a house, car, investment properties, etc., it is also often
         met with lower interest rates on the debt you take on, as the bank has a sense of trust in you. Another benefit 
         is that more than just banks take it into consideration when doing business, for example, landlords and rental 
         management teams may be kinder with rent payment as it is more likely that someone with a high credit score is to
          be a long staying tenant, capable of managing their finances. One more point, amongst a multitude more, is that a
           high credit score often allows people to get better discounts on insurance.
    </div>
</div>
<div className={classes.centerButton}>
    <a href="/creditparttwo"><Button className={classes.button}>Next Topic: Budgeting</Button></a>
</div>
    </Container>
</Box>
    )}

export default Credit;
