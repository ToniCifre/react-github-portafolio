import React from 'react';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const ResumeAbilitiesPunctuation = (props) => {
    const {points} = props
    const maxPunctiation = 4

    let punctuation = []
    for (let i = 0; i < points && i < maxPunctiation; i++) {
        punctuation.push(<FiberManualRecordIcon key={i} style={{ fontSize: 17 }}/>)
    }
    for (let i = points; i < maxPunctiation; i++) {
        punctuation.push(<FiberManualRecordIcon key={i} color="disabled" style={{ fontSize: 17 }}/>);
    }

    return (
        <div style={{ display: 'inline-block' }}>
            {punctuation}
        </div>
    )
};
export default ResumeAbilitiesPunctuation;
