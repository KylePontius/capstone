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
function HigherEducationPartOne(){
    const classes = useStyles()
    return(
<Box className={classes.page}>
    <Container>
        <div>
            <div className={classes.title}>
            <Typography variant="h3">
                Higher Education
            </Typography>
            </div>
            
            <div>
            One’s ability to properly invest along with their type of education are prominent factors that control one’s current
             and future level of financial prosperity. Of course, there are wonderful exceptions such as the stereotypical highschool 
             dropout billionaires, but they are such a small fraction of the population, that one cannot depend on being one. College 
             graduates with a Bachelor’s degree statistically make 75% more over their life compared to that of a high school graduate, 
             with proper investing, making that number rise much much higher. 
            </div>
        </div>
            <div>
                <Typography variant="h4" className={classes.subTitle}>College</Typography>
                <div>
                The most typical means of obtaining higher education, typical colleges have four-year programs to obtain a
                 Bachelor’s degree in a certain major, to prove academic knowledge in a certain field. College is often a 
                 fantastic means of achieving one’s aspirations either through passion, enlightenment, or securing a higher 
                 salary than those without a degree. All of which are valid reasons to go to college, but not many people think
                  about the financial consequences of choosing one college over another, which could create an immense disparity 
                  between people, based upon where they choose to go.
                  <br></br>
                  <br></br>
                  For example, schools native to one’s state often require attendees to pay less if they are from the state the college is based in, whereas those outside the attendee’s native state often cost five times more than an in-state school, despite the accreditation of both schools being quite comparable. Millennials are the most in-debt generation to debt, largely due to their prior lack of knowledge when taking on student loans, being incredibly with interest rates that compounded, with many students taking on education for careers that could not justify their choice from a financial perspective.
                  <br></br>
                  <br></br>
                 When particpating in a college program, the most common degree to have the best ROI is a bachelor's degree, as that is sufficient for 
                 most employers when considering possible candidates for almost all fields. Bachelor’s programs can take three years to complete, but the most typical is four years. 
                 Classes taken will not only include those pertaining to your major, but will also include a variety of core classes and humanties. 
                <br></br>
                <br></br>
                If you find a four year college to be too expensive, a great alternative is going to a community college for two years to earn an associate's degree, then apply to a bachelor's program and hopefuly win a scholarship to cover tuition.
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Trade School/Technical School</Typography>
                    <div>
                        Trade school is another means of higher education, however, it is not structured in the same way as colleges, with an uncommon completion ceiling being around 
                        two years. The classes are highly specialized for a particular job, and thus, do not require extra classes such as core classes and humanities. Welders, blacksmiths, technicians, and many other 
                        reputable careers beging with trade school. This type of education is not only much shorter, but much cheaper than college, with an entire course being less than a year's worth of tuition for an in-state college. 
                        Classes are also much smaller than most college classes, thus allowing for a better connection with staff, who often provide leniency for life matters.
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Bootcamps</Typography>
                    <div>Bootcamps are similar to trade school, except the topics covered in them do not pertain to fields not in trade school. 
                         These bootcamps are taught by private organizations, and are not often viewed with the best reputation when it comes to employment.
                         Bootcamps are prevalent for jobs in tech, real estate, and business. They aim at getting careers one would typically be enabled through college, without spending four years and so much cash. The 
                         cost to attend a bootcamp depends on the field you want to enter, for a software engineering bootcamp, it costs usually around $20,000, for less than a years worth of study.
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Self-Taught</Typography>
                    <div>
                        The riskiest but cheapest alternative that only applies to some careers, people who choose to teach themselves about a subject (typically one that is prevalent on the internet). Getting a job from being self-taught, is incredibly hard. One usually needs 
                        a ton of work experience from less reputable gigs, along with a ton of personal projects. One could of course, become employ themselves, which would also work, but job security would be entirely dependent on your ability to get customers. Also, this does not apply to most careers,
                        nobody wants a doctor or lawyer without a degree. However, if you simply want a means of higher education to enlighten yourself with zero cost aside from time, exploring a subject on the internet is probably your best bet.
                    </div>
                </div>
                </div>
                <div className={classes.centerButton}>
                    <a href="/higherEducationPartTwo"><Button className={classes.button}>Final Topic: How to Pick Higher Education</Button></a>
                </div>
    </Container>
</Box>
    )
}

export default HigherEducationPartOne;