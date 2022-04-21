import { alpha, AppBar, Button, InputBase, a,Box, makeStyles, Toolbar, Typography, Container, Grid, styled } from '@material-ui/core';
import { AccountBalanceTwoTone, Block, Search } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';
import Divider from '@mui/material/Divider';

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
function CreditPartTwo(){
    const classes=useStyles()
    return(
<Box className={classes.page}>
    <Container>
        <div className={classes.title}>
            <Typography variant="h4">What is a Budget?</Typography>
            <div>
            A budget is a spending plan to ensure money goes to  the needed places without spending too little or too much in any area. A budget is based around an individual’s income, or shared income, and estimating how much money will be spent where and in what time period. 

For example, cars and homes require elongated payments, so a percentage of income would go to those each week/month/year. 

            </div>
        </div>
        <div>
            <Typography variant="h4" className={classes.subTitle}>How to Budget:</Typography>
            <div>
                <div>
                    <Typography variant="h5" className={classes.subTitle}>Step 1: Calculate Net Income</Typography>
                    <div>
                    It is crucial  to know how much money you are taking home to understand how much money needs to be
                     distributed amongst the various aspects that need funding, for example, it’s not wise (or realistic)
                      to spend $100 on groceries a week if your income is $150.
                    </div>
                </div>
                <div>
                    <Typography variant="h5" className={classes.subTitle}>Step 2: Track Your Spending</Typography>
                    <div>
                    The budget is not something out of your control, it is you who chooses how to spend, the budget is merely
                     a guideline that is strongly suggestive of your purchases. At the end of the day, you swipe the credit
                      card or hand over the money. If you spend a lot in one area, it may be easier to extract spending from
                       there and assign it somewhere else. 
                    </div>
                </div>
                <div>
                    <Typography variant="h5" className={classes.subTitle}>Step 3: Set Realistic Goals</Typography>
                    <div>
                    Budgets are based solely on your income, it needs to reflect that. You can’t devote 90% of all income
                     to pay off debts in a quick manner, as it is highly unlikely you’ll be able to live on merely 10% of your
                      income. Some things in your budget will take decades to succeed.
                    </div>
                </div>
                <div>
                    <Typography variant="h5" className={classes.subTitle}>Step 4: Distribute</Typography>
                    <div>
                    Distribution is just how much money is to be allocated to what, a common method is the 50/30/20 plan,
                     where 50% is allocated towards needs, 30% to wants, and 20% to investments and paying off debt.
                    </div>
                </div>
                <div>
                    <Typography variant="h5" className={classes.subTitle}>Step 5: Repeat</Typography>
                    <div>
                    As you progress through life, conditions are destined to be changed for better or worse, it is important 
                    for a budget to reflect this. For example, if times are good, you can probably increase the amount spent 
                    on wants. 
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Conclusion</Typography>
                    <div>
                    You don’t need a budget to succeed financially, however, it makes things significantly easier,
                    especially as more products come into the market that you may buy into. It provides a plan for
                    spending to ensure one does not overspend or underspend in one area, and keeps you in the parameters
                    of financial reality. 
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.centerButton}>
            <a href="/taxespartone"><Button className={classes.button}>Next Unit: Taxes</Button></a>
        </div>
    </Container>
    </Box>
    )}

export default CreditPartTwo;
