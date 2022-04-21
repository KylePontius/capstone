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
   },
   divider:{
       margin:"30px 0px 30px 0px"
   }
}))

function BanksPartTwo(){
    const classes=useStyles()
    return(
        <Box className={classes.page}>
            <Container>
                <div><h1 className={classes.title}>Picking a bank:</h1></div>
                <div>Picking a bank is a critical part of one’s financial journey, as it controls the amount of convenience 
                    you have. There is no limit to how many bank accounts one can have, but it does not make sense to have some 
                    accounts when you don’t need them. There are three main factors to consider when choosing a bank, being: types
                     of bank accounts, type of bank, and features associated with that bank. 
                </div>
                <hr className={classes.divider}></hr>
                <div><h2 className={classes.subTitle}>Types of Bank Accounts:</h2></div>
                <div>When associated with a bank, it is crucial to understand what account services they offer, and which one is
                     best for you. There are various types of bank accounts, with some of the most common being:
                     </div>
                <div><h4 className={classes.subTitle}>Checking Account</h4></div>
                <div>A type of deposit account provided as a service from a bank where funds are easily transferred, either in
                     inflow or outflow. This is an account that is good when the balance needs to fluctuate a lot, such as buying
                      groceries, paying bills, or receiving pay.
                </div>
                <div><h4 className={classes.subTitle}>Savings Account</h4></div>
                <div>A type of deposit account provided as a service from a bank where funds held in the account are given
                     interest. The interest is very rarely compound interest, and is often simple interest. We have not gone over
                     the differences between the two, but in this scenario, one would want compounding interest on their money.
                     Savings accounts have limitations on how often funds can leave the account, as banks use funds in these 
                     accounts to distribute loans. Their restrictions and oftenness to have more interest than checking accounts
                     makes it a good account for emergencies. 
                </div>
                <div><h4 className={classes.subTitle}>Money Market Account</h4></div>
                <div>
                A type of deposit account with tiered interest rates, where the more money that is deposited, the higher yield one
                gets in return. These accounts typically have a $1,000 minimum deposit feed, and are not as liquid as a savings 
                or checking account. The interest rates of money market accounts typically surpass that of a savings account.
                </div>
                <div><h4 className={classes.subTitle}>Certificate of Deposit Account</h4></div>
                <div>A type of deposit account where one loan’s the bank for an extended period of time, typically ranging from 
                    one week, to ten years. These accounts can have the highest interest rates, as their rates depend upon the 
                    length of time money is stored in the account. It must be noted that there are almost always penalties for 
                    withdrawing money before the agreed upon time span ends.
                </div>
                <div><h4 className={classes.subTitle}>Brokerage</h4></div>
                <div>A brokerage account is a type of deposit account meant to grow one’s money through investments. The funds can
                     be taken in and out at any point, similar to that of a checking account, but when taking money out of the 
                     account, the transaction usually takes a few days. In this account, whenever one invests in an equity/etf/
                     security, they pay some amount of tax if they have gained in their position. This is called capital gains 
                     tax, and becomes much less severe after a year of holding a security.
                </div>
                <div><h4  className={classes.subTitle}>Individual Retirement Account</h4></div>
                <div>An individual retirement account, most commonly denoted as an “IRA” is a type of savings account with tax 
                    advantages to help people grow their money. Anyone with an earned income can open an IRA, and many employers 
                    automatically open them for their employees once work starts. Money can be taken out of an IRA at any time, 
                    however, there is a 10% fine on any amount taken out before 59.5 years of age.
                </div>
                <hr  className={classes.divider}></hr>
                <div><h3 className={classes.subTitle}>Compound Interest</h3></div>
                <div>
                    Most of these listed accounts are made with the intent to let money grow through interest, banks often do either simple interest or 
                    compound interest when holding money in a savings, certificates of deposit, and money market accounts. Simple interest give the user money on 
                    however much they initially put in, whereas compound interest stacks on top of the initial amount, and the amount gained through interest.
                </div>
                <div><h3 className={classes.subTitle}>Conclusion</h3></div>
                <div>
                    Although most banks carry most or even all of the above products, there are variations in the types of banks to consider when choosing a bank, which will be 
                    covered in the next part.
                </div>
                <div className={classes.centerButton}><a href="/bpthree"><Button className={classes.button}>Next Topic: Types of Banks</Button></a></div>
            </Container>
        </Box>
    )
}

export default BanksPartTwo;