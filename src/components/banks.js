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
        fontSize:"1.1em"
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
   }
   
}))

function BanksPartOne(){
    const classes=useStyles()
    return(
        <Box className={classes.page}>
            <Container>
                <div className={classes.title}><h1>Banking Part One:</h1></div>
                <div>
                    <h4 className={classes.subTitle}>What is a bank?</h4>
                    <div>Banks are financial institutions with the intent to hold amounts of wealth and distribute 
                        loans to people. “Bank' is a blanket term as there are a variety of banks specialized for certains 
                        tasks or groups of people. Most notably, investment banks, but others do include retail, commercial, 
                        credit unions, and others. We won’t talk about what all of these banks do, but one can find all the 
                        information (INSERT LINK TO ARTICLE HERE). </div>
                        <img className={classes.img} alt="bank" src='https://image.shutterstock.com/image-vector/bank-building-isolated-on-white-260nw-749071768.jpg'></img>
                </div>
                <div>
                    <h4 className={classes.subTitle}>Purpose:</h4>
                    <div>Banks are critical to a nation’s economy as they provide a safe haven for someone’s money (well, to an 
                        extent). Banks, however, are not just meant to do good for the people, they are also a business with the 
                        intent of making themselves a profit. This is often done through investing services, but more commonly, 
                        loans and debt. </div>
                </div>
                <div>
                    <h4 className={classes.subTitle}>Debt:</h4>
                    <div>Debt is a blanket term for money that is borrowed from someone else for one’s own use, 
                        and is to be returned later. At first glance, this concept seems illogical as the debt-giver 
                        is taking unwarranted risk. However, debt is usually accompanied with interest, where an amount is 
                        paid on top of a debt while it is held. Although it sounds like one should avoid debt by all means 
                        to avoid paying extra, debt is sometimes necessary, and can also be a tool that can exponentially grow 
                        one’s net worth, but for now, things need to be kept simple.</div>
                        <img className={classes.img} src="data:image/png;base64,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"></img>
                </div>
                <div>
                    <h4 className={classes.subTitle}>Loan:</h4>
                    <div>An amount of money lent from one party to another for a specific reason. The amount that is lent is 
                        to be repaid, and is often accompanied with interest. For example, many people take on a type of loan,
                         called a mortgage, to purchase homes, which are often too much to pay for at once.
                         </div>  
                </div>
                <div className={classes.centerButton}><a href="/bptwo"><Button className={classes.button}>Next Topic: Picking a Bank</Button></a></div>

            </Container>
        </Box>
    )
}

export default BanksPartOne;