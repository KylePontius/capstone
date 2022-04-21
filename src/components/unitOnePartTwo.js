import { alpha, AppBar, Button, InputBase, a,Box, makeStyles, Toolbar, Typography, Container, Grid, styled, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';
import { AccountBalanceTwoTone, Block, Search, CloseIcon, Clear, ExpandLess } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';

const useStyles = makeStyles((theme ) =>({
page:{
    paddingTop: "64px",
    fontSize: "1.2rem",
    fontFamily:"Arial"
},

calculatorDiv:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:"15px",
    alignItems:"center",
},
calculate:{
    height: "100%",
    color: "White",
    backgroundColor: "#3A3064",
    '&:hover':{
        backgroundColor: "#3A3064"
      },
},
center:{
    textAlign:"center"
},
result:{
    textAlign:"center",
    paddingTop: "20px",

},
next:{
    backgroundColor: "#3A3064",
    '&:hover':{
        backgroundColor: "#3A3064"
      },
    alignItems:"center",
    color: "white",
},
centerButton:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"bold",
    marginTop:"20px",
    paddingBottom:"10px"
},
img:{
  width: "50%",
  height:"500px",
  marginLeft:"auto",
  marginRight:"auto",
  display:"block",
  paddingBottom:"20px"
},
title:{
    fontFamily:"Roboto"
}
}))

function calc(principal, inflationRate, time){
    var w, x, y, z, result
    w = document.getElementById("principal").value
    x = document.getElementById("inflationRate").value
    y = document.getElementById("time").value
    
    if (w < 0 || x < 0 || y < 0){
      result = ("No inputs can be less than 0!")
      result2(result)
    }
    else if (x > 100){
      result = ("Inflation cannot be more than 100!")
      result3(result)
    }
    else {
       z = (w * Math.pow(1-(x/100), y))
       result = z.toFixed(2)
       result1(result)
    }

    }
function result3(result){
    document.getElementById("resultOutput").innerHTML = result
}

function result2(result){
    document.getElementById("resultOutput").innerHTML = result
}
function result1 (result){
    document.getElementById("resultOutput").innerHTML = "Result: $" + result
}
function Inflation (){
    const classes = useStyles()
    return(
        <Box>
            <Container className={classes.page}>
                <header><h1 className={classes.title}>Introduction and Inflation</h1></header>
                <br></br>
                <p>Before we can start to learn about topics such as banks, one must understand that the world of finance is a place that is ever-evolving, 
                growing by complexity and opportunity by the second. 
                If you are not readily adapting to this, you are most 
                likely going to suffer. The macroeconomic factors of 
                international rivalry, population growth, competition, 
                inflation, and a multitude of various Day factors 
                contribute to each persons financial stability 
                and position in life. </p>
                <br></br>
                <hr></hr>
                <br></br>
                <header><h4 className={classes.title}>Inflation</h4></header>
                <img alt="rolls of money" className={classes.img}src="https://wcmassets.kbc.be/content/dam/kbceconomics/Apps/shutterstock_1276337977.jpeg/_jcr_content/renditions/cq5dam.web.960.9999.jpeg.cdn.res/last-modified/1599813835855/cq5dam.web.960.9999.jpeg"></img>

                <p> To better understand, we will introduce
                 one of the many factors, being inflation. Inflation is the persistent decline in value of a currency, becoming a significant issue to the masses,
                as those who work are typically not getting raises each year that
                beat inflation, meaning that gradually, people are doing the same
                (if not more) work every year only to be paid less. This can be
                 seen in action with the following formula and calculator:
                 </p>
                 <br></br>
               <p className={classes.center}><b>Principal x (rate of inflation)^Time </b></p>
                <br></br>
                We can plug in 3 (rate of inlation) to see what value a $50,000 salary will turn 
                into in 10 years, resulting in a measly $36781. The effects of inflation 
                are even more severe when Day macroeconomics or personal conflicts occur. 

                Try Plugging numbers in with the calculator below!

                <Container>
                <FormControl className={classes.calculatorDiv}  >
                    <div><TextField
          className={classes.principal}
          required = "true"
          variant ='filled'
          label="Principal Amount ($)"
          type="number"
          id = "principal"
          InputLabelProps={{
            shrink: true,
          }}
        /></div>
                <div > <Clear></Clear> </div>
                <div><TextField
                required = "true"
          variant ='filled'
          id = "inflationRate"
          label="Rate of Inflation (%)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /></div>
        <div > <ExpandLess></ExpandLess> </div>
        <div>
            
        <TextField
        required = "true"
          variant ='filled'
          label="Time"
          id ='time'
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
         />
        </div> 
        <div>
            <Button className={classes.calculate} onClick={(calc)}>Calculate</Button>
        </div>
                </FormControl>
                <div className={classes.result} id="resultOutput">
                    Result: 
                </div>
                <br></br>
                </Container>
                <div>
                    The leading measure of calculating inflation is with the Consumer Price Index, an index that 
                    measures the average change in prices of a variety of goods and services. These changes indicate inflation/deflation 
                    within an economy, an are associated with the cost of living in a country. 
                </div>
                <br></br>
                <div>
                    <p>Inflation is calculated by:</p>
                    <br></br>
                    <p>Percent inflation rate = (Final CPI Index Value / Initial CPI Value) * 100</p>
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <h4  className={classes.title}>Conclusion</h4>
                <div>
                Inflation is just one of many things involved in finance, it is crucial 
                to one’s life that they understand concepts such as these to ensure they 
                do not fall into a pit of financial hardship. Without the proper teachings 
                of finance, one is much more prone to financial hardship, which can get in 
                the way of your aspirations and livelihood. Many Americans don't understand 
                the concept of inflation and Day critical concepts, leaving them to have their 
                finances bleed slowly as the world goes on, unaware of what needs to be achieved to 
                stay afloat.
                </div>
            </Container>
            <div className={classes.centerButton}>
        <a href="/bpone"><Button className={classes.next}>
                  Next Topic: Banking
              </Button></a>
        </div>
        </Box>
        
    )
}

export default Inflation;