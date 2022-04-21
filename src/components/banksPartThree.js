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

function BanksPartThree(){
    const classes = useStyles()
    return(
        <Box className={classes.page}>
            <Container>
                <div>
                    <h1 className={classes.title}>Types of Banks</h1>
                </div>
                <div>
                    <h4 className={classes.subTitle}>Retail Banks</h4>
                    <div>Banks that typically deal with a single entity (like you or anyone else), offering products to store
                         wealth typically through savings and checking accounts, these banks are usually the ones providing 
                         loans for homes, cars, and other items that individuals need.
                    </div>
                    <h4 className={classes.subTitle}>Commerical Banks</h4>
                    <div>Banks focused on providing products to business owners, typically dealing out loans for business 
                        equipment and managing payments for customers.
                    </div>
                    <h4 className={classes.subTitle}>Online Banks</h4>
                    <div>Banks that are only interacted with through the internet, they have no physical location to settle 
                        matters at. They can be both commercial and retail banks, but more convenient to people due to the 
                        ability to interact with them from anywhere.
                    </div>
                    <h4 className={classes.subTitle}>Credit Unions</h4>
                    <div>These are financial institutions who do not operate on a for-profit basis, they are owned and operated 
                        by customers. Credit unions offer products similar to those of retail banks. These are different from banks
                         in the sense that credit union members typically have some major similarity between all of them.
                    </div>
                </div>
                <div>
                    <div><h3 className={classes.subTitle}>Conclusion</h3></div>
                    <div>There are many other factors to consider when choosing a bank (and many other types of banks), such as fees, transaction restrictions, 
                        the amount of interest, and type of interest (if any). Not all of these intricacies were heavily touched,
                         nor were the ideas that seem to be decently mentioned, we encourage everyone to go further research about
                          what bank or financial institution is best for you.
                    </div>
                </div>
                <div className={classes.centerButton}><a href="/credit"><Button className={classes.button}>Next Unit: Credit</Button></a></div>
            </Container>
        </Box>
    )
}

export default BanksPartThree;