import { alpha, AppBar, Button, InputBase, a,Box, makeStyles, Toolbar, Typography, Container, Grid, styled, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';
import { AccountBalanceTwoTone, Block, Search, CloseIcon, Clear, ExpandLess } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme ) =>({
    page:{
        paddingTop:"66px",
        fontFamily:"Roboto",
        fontSize:"20px"},
    subTitle:{
        marginTop:"30px",
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
        backgroundColor: "#3A3064",
        opacity:".9",
    '&:hover':{
        backgroundColor: "#3A3064",
        opacity:"1"
      },
    alignItems:"center",
    color: "white",
    }

}))
    
    
    

function TaxesPartOne(){
    const classes = useStyles()
    return(
<Box className={classes.page}>
        <Container>
            <div>
                <Typography variant="h3">What are Taxes?</Typography>
                <div>
                Taxes are the only thing guaranteed in life, aside from death. They are fees given to the government to pay 
                for a wide variety of matters, all of which pertaining to ventures by the state. Taxes fund all government 
                ventures, including security of public officials, national defense, medicaid, roads, public transportation, etc..
                </div>
                <div>
                <Typography variant="h4" className={classes.subTitle}>Types of Taxes: Federal vs. State</Typography>
                <div>
                    Federal taxes are taxes paid to the federal government, as opposed to state taxes, which are paid to a state. Federal taxes are dependent on 
                    based on a progressive system, where higher earners are taxed more as opposed to lower earners. The amount of income you earn within a year determines what tax 
                    bracket you're placed in, and in turn what percent of your income you have to pay. State taxes are a bit quirkier compared to federal taxes as some states don't have an income tax,
                    some states have a flat rate, and some have a progressive system like the federal system. Some states also don't tax certain things like income, property, and sales. You also don't have to live in a state 
                    to pay taxes to that said state, depending on where money and how money is earned.
                </div>
                </div>
                <div>
                <Typography variant="h4" className={classes.subTitle}>Tax Forms: </Typography>
                <div>
                In the United States, taxes are a bit quirky compared to the rest of the world. In the United States, there are a
                 variety of forms to fill out for specific needs. The reasoning for these tax forms is that many people in the
                  United States earn income that is not reported via an employer. The IRS (Internal Revenue Service) also does 
                  not know what deductions can apply to you (as they don’t watch every detail of your life), and don’t know how
                   you are filing. The system is incredibly annoying and tedious for kinder words in an objective manner, but it
                    is necessary.
                </div>
                <Typography variant="h5" className={classes.subTitle}>Form 1040:</Typography>
                <div>The most renowned tax form, where you declare your filing status, claim credits, file for deductions, and
                     learn how much you need to pay in taxes. </div>
                <Typography variant="h5" className={classes.subTitle}>Form W-2:</Typography>
                <div>Form W-2: The most common tax form in conversation, it is a tax form where you report taxes on income 
                    you’ve earned as being an employee throughout the course of the year (assuming you made more than $600 
                    for the year). The form tells you how much of your paycheck is going to taxes, and in turn, tells you your
                     annual take home pay. This form is needed for both federal and state taxes. 
</div>
                <Typography variant="h5" className={classes.subTitle}>Form 1099-B:</Typography>
                <div>A type of tax form where a user reports their gains and losses of transactions obtained through a broker.
                     This form would be used when reporting gain or loss on stocks, but not preferred stocks, those go under a 
                     form 1099-INT or 1099-DIV.</div>
                </div>

            </div>
            <div>
                <Typography variant="h4" className={classes.subTitle}>Conclusion</Typography>
                <div>
                Taxes are annoying, and filling the forms out are just as annoying, but they are necessary for government funding,
                 and ensuring the IRS does not get aggravated with you. Information about filling out tax forms and all the types 
                 of tax forms can be found at the IRS website.
                </div>
            </div>
            <div className={classes.centerButton}>
                <a href="/insurance"><Button className={classes.button}>Next Unit: Insurance</Button></a>
            </div>
        </Container>
    </Box>
    )
}


export default TaxesPartOne