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

function Insurance(){
    const classes = useStyles()
    return(
        <Box className={classes.page}>
            <Container>
                <div>
                    <Typography variant="h3">Insurance</Typography>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>What is Insurance?</Typography>
                    <div>
                    Insurance is a critical component to life in the United States and across the world. Insurance is a contract 
                    (often for a specific thing) provided by insurance companies in which a protected financial loss in the event
                    of unfortunate circumstances. Insurance companies exist not to help, but to of course profit, their business
                    model for profit is designed around people avoiding tragedies, where customers pay a monthly premium to 
                    ensure coverage in the event one occurs. The price of the premium depends on the risk of the potential
                    client. For example, a lower premium would be awarded to a driver who has driven for a decade with no 
                    accidents, compared to someone who had recently gotten their license and had gotten into an accident.
                    If a potential client is too risky, they can be denied insurance altogether, for example, a company
                    would not provide someone coverage from a natural disaster if they lived next to a volcano that erupted
                    every year. 
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Types of Insurance:</Typography>
                    <div>
                        <div>
                            <Typography variant="h5" className={classes.subTitle}>Health</Typography>
                            <div>
                            Covers expenses pertaining to medical procedures such as acquiring medicine and surgeries.
                            </div>
                        </div>
                        <div>
                            <Typography variant="h5" className={classes.subTitle}>Car</Typography>
                            <div>
                            Covers expenses for damages to your car if you cause an accident or are subject to an accident from
                             anything that isn’t a person. This insurance also covers the cost for your car and other parties if
                              you are at fault in a collision. 
                            </div>
                        </div>
                        <div>
                            <Typography variant="h5" className={classes.subTitle}>Home</Typography>
                            <div>
                            Covers expenses of repairing or replacing your home if it is subject to some tragedy such as
                             fire or if someone else gets injured inside the home. 
                            </div>
                        </div>
                        <div>
                            <Typography variant="h5" className={classes.subTitle}>Life</Typography>
                            <div>A promise from the insurance company to pay a beneficiary in the event of the signer’s death,
                                 typically acquired when a married couple is old.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Side Note</Typography>
                    <div>
                    There are various types of insurance, with only a few mentioned here. If you feel as though you could be 
                    subject to some tragedy, there is most likely a type of insurance for it, no matter how niche.
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>When to Get Insurance</Typography>
                    <div>
                    It is important to understand what you’re getting insurance for, if you just bought a car, insurance needs
                     to be a priority immediately in the event you get into an accident, in another case, it’s not reasonable 
                     to get life insurance when a healthy baby is born.
                    </div>
                </div>
                <div>
                    <Typography variant="h4" className={classes.subTitle}>Conclusion</Typography>
                    <div>
                    Insurance isn’t necessary in most cases, however, if you choose not to get any, it is likely you will
                     have to pay extreme amounts of money for yourself or another party in the event of an unfortunate event.
                      To those that are lucky, they’ll never have to exercise an insurance policy, however, none of us know what
                       is beyond the present, and insurance protects us from that to an extent.
                    </div>
                </div>
                <div className={classes.centerButton}>
                <a href="/Investingpartone"><Button className={classes.button}>Next Unit: Investing</Button></a>
              </div>
            </Container>
        </Box>
    )
}

export default Insurance;