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

function InvestingPartOne(){
    const classes = useStyles()
    return(
        <Box className={classes.page}>
            <Container>
                <div>
                    <Typography variant="h3" className={classes.title}>Investing</Typography>
                    <div>
                    Investing is a critical component of most people’s financial position. It is the primary means of beating 
                    inflation, and successfully having adequate money for retirement. Investing is so crucial, as keeping money
                     in the bank (as many people do) is only a means of letting one’s money bleed slowly. The rate of inflation
                      in the United States for the last thirty years, is 2.18%, meaning one lost 2.18% of whatever cash they had 
                      every year. Most savings accounts, money market accounts, or certificates of deposit accounts don’t even 
                      come close to the rate of inflation, and especially not the annia; average return of the S&P 500 at 7%.
                       Naturally, one does not want to lose money, rather, they want to let it grow, investing is the most 
                       efficient way of doing so, for the average person. 
                    </div>
                    <div>
                        <Typography variant="h4" className={classes.subTitle}>Ways to Invest in the Stock Market</Typography>
                        <div>
                        There are various ways to invest, such means include bonds, stocks, real estate, precious metals,
                         and collectibles. In this, we will specifically cover publicly traded securities, which stocks are
                          a part of. There are three types of financial securities which will be covered in this course, being: stocks, etfs, and REITs. 
                        </div>
                    </div>
                    <div>
                        <Typography variant="h5" className={classes.subTitle}>Stocks</Typography>
                        <div>
                        Also known as an equity, stocks are a very small piece of a company, and entitles the holder to a piece of the company’s assets and profits, depending on how many shares of stock are owned. 
                        They are primarily traded on exchanges such as the New York Stock Exchange, Nasdaq, Hong Kong Stock Exchange, amongst many others. Typically, one cannot directly buy or sell stock as the majority of people do not have a trading license, which requires the need of a broker (typically online such as: TD Ameritrade, Tradestation, Robinhood, etc.) to execute the desired command. 
                        </div>
                        <Typography variant="h5" className={classes.subTitle}>ETFs</Typography>
                        <div>An ETF, or exchange-traded fund, is a basket of securities covering a much broader topic that can be exchanged just like stock. ETFs cover almost everything, from the S&P 500, Nasdaq Composite, semiconductors, banks, consumer discretionary, emerging markets, etc.. </div>
                        <Typography variant="h5" className={classes.subTitle}>REITs</Typography>
                        <div>A type of a stock, a REIT, or Real Estate Investment Trust, is a company that invests in real estate that generates income (usually by renting properties out to people, such as the common person or retail stores). They typically do not grow as much as ETFs or normal stocks, but do provide hefty dividend payments (percentages of the stock price) quite often, with many REITs distributing dividend payments every month. </div>
                    </div>
                </div>
                <div className={classes.centerButton}>
                    <a href="/investingparttwo"><Button className={classes.button}>Next Topic: Fundamental Analysis</Button></a>
                </div>
            </Container>
        </Box>
    )
}

export default InvestingPartOne;