import React from 'react';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const ResumeAbilitiesPunctuation = (props) => {
    const {points} = props

    let punctuation = []
    for (let i = 0; i < points; i++) {
        punctuation.push(<FiberManualRecordIcon style={{ fontSize: 17 }}/>)
    }
    for (let i = points; i < 5; i++) {
        punctuation.push(<FiberManualRecordIcon color="disabled" style={{ fontSize: 17 }}/>);
    }

    return (
        <div style={{ display: 'inline' }}>
            {punctuation}
        </div>
    )
};
export default ResumeAbilitiesPunctuation;
