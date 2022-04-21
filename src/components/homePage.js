import { alpha, AppBar, Button, InputBase, a,Box, makeStyles, Toolbar, Typography, Container, Grid, styled } from '@material-ui/core';
import { AccountBalanceTwoTone, Block, Search } from '@material-ui/icons';
import { withThemeCreator } from '@material-ui/styles';
import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import './homePage.css'


const useStyles = makeStyles((theme ) => ({
    palette:{

    },
    header:{
        display: "flex",
        fontSize: "28px",
        paddingTop: "60px",
        border: "1px solid green",
        height: "400px",
        alignItems:"center",
        backgroundImage: `linear-gradient(to right, rgba(23, 18, 43, .9),rgba(92, 73, 177, .9))`,
    },
    getStarted:{
        fontSize:"20px",
        marginLeft:"20px",
        color:"#F3F3FA",
        marginTop:"15px",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover':{
        backgroundColor: alpha(theme.palette.common.white, 0.25),

    },

    },
    headerText:{
        color:"#F3F3FA",
        marginLeft:"20px",
        fontFamily:"Roboto"
    },
    animation:{
    [theme.breakpoints.down("md")]:{
      display: "none"
    }
    },
    introTopics:{
        paddingTop: "50px",
        fontFamily:"Roboto"
    },
    introInfo:{
        fontSize:"20px",
        fontFamily:"Arial"
    },
    img:{
        width: "250px",
        height: "200px",
        float:"right",
        [theme.breakpoints.down("md")]:{
            display:"none"
        }
    },
    imgTwo:{
        display:"none",
        [theme.breakpoints.down("md")]:{
            display:"flex",
            width: "80%",
            justifyContent:"center",
            marginLeft:"auto",
            marginRight:"auto"
        }
    },
    imgThree:{
        width: "300px",
        height: "150px",
        float:"left",
        
        [theme.breakpoints.down("md")]:{
            display:"none"
        }
    },
    imgFour:{
            width: "250px",
            height: "200px",
            float:"right",
            marginBottom:"100px",
            [theme.breakpoints.down("md")]:{
                display:"none"
            }
        },
    startJourneyButton:{
        color:"white",
        backgroundColor: alpha("#17122B", 0.9),
        '&:hover':{
        backgroundColor: alpha("#17122B", 0.8),
        }
    },
    start:{
        marginLeft:"250px",
        marginTop:"100px",
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        [theme.breakpoints.down("md")]:{
            marginLeft:"0px"
        }
    }

}))
function HomePage(){
    const classes=useStyles()
    return(
        <Box>
     
            <Grid spacing={2} className={classes.header}>
            
            <Grid  sm={12} xs={12} md={5} lg={5} >
            <div className={classes.headerText}>
            The world of finance is constantly evolving in complexity and opportunity, however,
                 most don't know where to start. Don't be left behind.
                 Secure the bag.
            </div>
            <div>
            <Grid container justify="center" alignItems="center">
            <a href="/inflation"><Button className={classes.getStarted}>Get Started</Button></a>
            </Grid>
            </div>
            </Grid>
            <div className='box'>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
                <div  className="dollar"><img src="https://www.i2symbol.com/images/abc-123/s/small_dollar_sign_uFE69_icon_256x256.png" alt="floating dollar signs"></img></div>
            </div>
            <Grid md={7} lg={7}>
            </Grid>   
            </Grid>
            <Container className={classes.content}>
                <Grid>
                    <Grid  className={classes.introTopics}><header><h1>Why Financial Literacy Matters:</h1></header>
                    <div className={classes.introInfo}>
                    <a target="_blank" href="https://sjes.springeropen.com/articles/10.1186/s41937-019-0027-5" rel="noreferrer"><img className={classes.img} src="https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs41937-019-0027-5/MediaObjects/41937_2019_27_Fig1_HTML.png?as=webp" alt="A graph indicating financial literacy levels amongst age groups"></img></a>
                    The inexorable growth of the world leads to the complication of all matters in the world, 
                    including matters of finance, and unfortunately, when interpreting 
                    various sources of data, people under the age of twenty-five are objectively 
                    the worst in terms of financial literacy and financial position. Financial 
                    literacy is lacking amongst all age groups in the United States despite its 
                    prosperous economic position, with macroeconomic factors such as international 
                    economic competition and inflation are forcing a further need to better handle 
                    finances. There has been minimal to no adequate teaching of financial literacy 
                    in schools since the American education system was created, thus resulting 
                    in a vast majority of the population to be left to struggle, throwing darts at 
                    random targets hoping for it to be the right throw. How can someone expect generations of people to thrive
                    when they simply don't know how to?
                    </div>
                    <a target="_blank"  href="https://sjes.springeropen.com/articles/10.1186/s41937-019-0027-5" rel="noreferrer"><img className={classes.imgTwo} src="https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs41937-019-0027-5/MediaObjects/41937_2019_27_Fig1_HTML.png?as=webp" alt="A graph indicating financial literacy levels amongst age groups"></img></a>
                    </Grid>
                    <Grid className={classes.introTopics}><header><h1>Goals:</h1></header>
                    <img alt="Growth of money" className={classes.imgThree} src="data:image/jpeg;base64,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"></img>
                    <div className={classes.introInfo}>
                    Here at Finance Academy we have one goal, to help. Our entire aspriation is to help the users of this website 
                        better prepare themselves for the real world, where they will be surrounded by matters of finance. By no means
                        is this the entirety of finance, but it is a great starting platform for your lifelong adventure. We hope to educate all people in the matters of finance,
                        however, we understand that this cannot be done by ourselves, we are hoping that the utility of sites like Finance Academy will become catalysts for full scale 
                        implentation of finance in education at all levels. This can only be achieved with a heightened interest in finances, which the country, and world, desperately need.
                    </div>
                    <img alt="Growth of money" className={classes.imgTwo}src="data:image/jpeg;base64,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"></img>
                    </Grid>
                    <Grid className={classes.introTopics}><header><h1>Method:</h1></header>
                    <img className={classes.imgFour}alt="A web application infographic" src="https://codyhouse.co/assets/img/gems/hero-sharing/animated-intro-section-featured.png"></img>
                    <div className={classes.introInfo}>
                    Users will be greeted with various informative articles and activities that will allow users to understand basic financial 
                    concepts to lay the groundwork for their future after the course. The course is divided into six units, banks, credit, taxes, investing, 
                    insurance, and education. None of the units go into such depth to fully prepare one for achieving most or even half of what they can experience with each topic, but each 
                    unit does provide a basic understanding of components part of each broader topic to provide users with an adequate baseline, to further pursue topics via other sites/media/classes.
                    </div>
                    <div>
                    <img className={classes.imgTwo}alt="A web application infographic" src="https://codyhouse.co/assets/img/gems/hero-sharing/animated-intro-section-featured.png"></img>
                    </div>
                    </Grid>
                </Grid>
                <div className={classes.start}><a href="/inflation"><Button className={classes.startJourneyButton}>Start Your Journey</Button></a></div>
            </Container>
        </Box>
        ) 
}

export default HomePage;