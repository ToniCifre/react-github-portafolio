import React from 'react';

import Container from "@material-ui/core/Container";
import ResumeTopDescription from "../component/resume/ResumeTopDescription";
import ResumeAbilities from "../component/resume/ResumeAbilities";



const Resume = (props) => {
    const {translator} = props

    return (
        <div>
            <ResumeTopDescription description={translator.description}/>
            <Container maxWidth={"lg"} style={{marginTop: 25, marginBottom: 25}}>
                <ResumeAbilities translator={translator.abilities}/>
            </Container>
        </div>
    )


};
export default Resume;
