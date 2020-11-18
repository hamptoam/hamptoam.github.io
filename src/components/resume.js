import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Container, Grid, Card, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        spacing: 0,
        display: 'flex',
        justifyContent: 'flex',
        height: '100vh',
        fontFamily: 'Nunito',
        flexGrow: 1,
        alignItems: 'center',
        margin: 'auto',
    },
    container: {
        borderRadius: '25px',
        height: 'auto',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: 'auto',
        padding: '50px',
        width: '100%',
        backgroundColor: theme.palette.primary,
        color: theme.palette.primary.contrastText,
    },
    paragraph: {
        color: theme.palette.primary,
    },
    title: {
        color: 'black',
        fontSize: '3rem',
        padding: '10px',
    },
}));

export default function Resume(props) {

    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);

    }, [])

    return (
        <Grid className={classes.root}>
            <Container className={classes.container}>
                        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                            <Card className={classes.card}>
                                <Typography variant="body1" display="block" className={classes.paragraph}>       
                                Amelia Hampton  
Milwaukee, Wisconsin (Would consider relocation, Can work remote)  | | (262) 933 2309  ||  hamptoam.dev@outlook.com  
 
LinkedIn: (www.linkedin.com/in/amelia-hampton-b1b71b196/) 
Github: (hamptoam.github.io) 

Objective 

Recent graduate looking to kickstart career in software development with equal preference to front end and back end technologies.  Extensive background working with not for profit institutions. Interested in developing informative, innovative, and creative solutions.  

Technologies 

Proficient in HTML, CSS, JavaScript, React, Material-UI, Styled Components, Node.Js, C#, Bootstrap, SQL, ASP.NET MVC5, ASP.NET Core, AJAX, jQuery, Entity Framework, APIs, Git, and Microsoft SQL Server
Learning Python, C++ and Unreal Engine 

Projects
 
BETTERDIAL 
Technologies: ASP.NET MVC5, HTML, CSS, JavaScript, Twilio SMS/Phone API’s, Stripe Payment Processing API 
Overview: An improved communication interface for tele-fundraising/marketing purposes that uses SMS as well as Phone Dialing 
Features:  
Uses SMS to determine most opportune time to call a potential client and notifies the employee when to dial. 
Has roles for both employees and managers of the business, with managers having the ability to see visual data on both generated funds and calls made on a group to individual basis.  
PCI compliant payment processor through the Stripe API (in development). 
 
MOVIE LIBRARY  
Technologies: ASP.NET MVC 5, HTML, JavaScript, JSON  
Overview: Custom API built to hold data about movies 
Features:  
User friendly front end 
Allows user to view information as well as edit and add movies to the API.  
 
CUSTOM LIST 
Technologies: C#, TDD  
Overview: Custom generic list in C# built not using the built-in list methods in Visual Studio. Included are Unit Tests as well to display Test Driven Development.  

Education 

FULL-STACK SOFTWARE DEVELOPMENT CERTIFICATE  |   DEVCODECAMP 
Earned: 10/31/2019 
MILWAUKEE AREA TECHNICAL COLLEGE  

Took several general education credits while exploring various career opportunities.


Job Experience 

TELE -FUNDRAISER || BLUEPRINT ADVANCEMENT | FEB 2016 – JUNE 2019, Current

Utilized communication and marketing skills to raise funds for several non – profit organizations including UPAF, Shedd Aquarium, and Paramount and State Theater in Austin Texas.  
Left to attend DevCode Camp, have returned temporarily until I gain employment as a developer. 
TELE -FUNDRAISER | SIEGEL MARKETING GROUP | OCT 2015 – FEB 2016 

Fundraised for several non- profits under the Jewish Federation. 
Left for better opportunity at Blueprint Advancement. 
CAPTIONING ASSISTANT | CAPTEL | AUG 2013 – JAN 2015 

. Captioned telephone calls for the hearing impaired using voice recognition software
                                </Typography>
                            </Card>
                        </Collapse>
            </Container>
        </Grid>
    )
};

Resume.propTypes = {
    children: PropTypes.element.isRequired
};
