import React from 'react';

import Container from "@material-ui/core/Container";
import ResumeTopDescription from "../component/resume/ResumeTopDescription";
import ResumeAbilities from "../component/resume/ResumeAbilities";
import ResumeContact from "../component/resume/ResumeContact";
import ResumeProgramming from "../component/resume/ResumeProgrammingLanguages";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ResumeDatabase from "../component/resume/ResumeDatabase";



const Resume = (props) => {
    const {translator} = props

    return (
        <>
            <ResumeTopDescription description={translator.description}/>
            <Container maxWidth={"lg"} style={{marginTop: 25, marginBottom: 25}}>
                <Grid container justify="center">
                    <Grid item s={12} lg={8}>
                        <ResumeProgramming translator={translator.languages}/>
                        <ResumeDatabase translator={translator.database}/>
                    </Grid>
                    <Grid item s={12} lg={4}>
                        <ResumeAbilities translator={translator.abilities}/>
                        <ResumeContact translator={translator.contact}/>
                    </Grid>

                </Grid>

            </Container>
        </>
    )


};
export default Resume;
