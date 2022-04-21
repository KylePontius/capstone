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
function HigherEducationPartTwo(){
    const classes = useStyles()
    return(
        <Box className={classes.page}>
            <Container>
                <div>
                    <div className={classes.title}>
                    <Typography variant="h3">How to Pick a Means of Higher Education</Typography>
                    </div>
                    
                    <div>
                        Choosing what path to pursue after high school for further education is not a one-size fits all type deal. There are a multitude of factors to consider. 
                        You could have the opportunity to go to a really good out-of-state school for immensely high tuition, or maybe the in-state school with a slightly lower reputation but very low cost. Maybe the programs and the professors 
                        leading certain topics intrigue you to pursue one thing over the other. Whatever the matter is, think of every possible thing that can be a consequence of your decision, the three that will be briefly covered are: 
                        cost, location, program, reputation, and enlightenment.
                    </div>
                
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Cost</Typography>
                    <div>
                        The financial burden that many avenues of higher education come with are a serious factor than can control much of your remaining life. Possibly taking on debt 
                        that not only compounds, but compounds at a rate higher than inflate, could restrict you from doing almost anything in your life aside from working. This is why 
                        so many Milennials are in such a bad economic state, as they were uninformed and took on bad loans. It becomes even worse if the 
                        career picked after choosing an avenue of high cost is only met with a low paying career, further worsening one's financial position. 
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Location</Typography>
                    <div>
                        The location of higher education contributes all other factors, whether the program is in-state, out-of-state, local, domestic, foreign, all control the quality and 
                        cost. Having to move away and rent out a place on top of taking on debt is just a recipe for financial tragedy unless the reward is incredible. 
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Program</Typography>
                    <div>
                        The quality and reputation of the program is important as it contributes to how employable you are in the job market. This becomes crucial for many fields as most employees would rather have someone from 
                        Stanford, than a random college in Kentucky.
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Enlightenment</Typography>
                    <div>
                        We've talked about the financial things to consider, but it is also important to consider what you get out of it in terms of likeness. Pursuing the education because you want it is 
                        a critical factor as education takes up much of your early adult life, if you do something and do not feel favorable towards it for so long, while doing it so much, you will ultimately succumb to a degree of sadness. 

                    </div>
                </div>
                <div className={classes.centerButton}>
                    <a href="/congrats"><Button className={classes.button}>Congratulations!</Button></a>
                </div>
            </Container>
        </Box>
    )
}

export default HigherEducationPartTwo