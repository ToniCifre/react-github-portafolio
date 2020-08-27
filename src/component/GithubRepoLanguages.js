import React, {Component} from 'react';

import {Alert, AlertTitle} from '@material-ui/lab';
import { withStyles  } from '@material-ui/core/styles';

import {Doughnut} from 'react-chartjs-2';
import {Box} from "@material-ui/core";

class GithubRepoLanguages extends Component {

    render() {
        const {translator ,languages, error} = this.props;

        if (error !== '') {
            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2}  style={{minHeight: 200, minWidth:200}}>
                    <h3>{translator.languages}</h3>
                    <Box bgcolor='rgb(232, 244, 253)' border={1} borderColor="grey.300" boxShadow={1} borderRadius="20px" p={[2, 3, 4]}>
                        <Alert severity="info">
                            <AlertTitle>Info</AlertTitle>
                            {error}
                        </Alert>
                    </Box>
                </Box>
            )
        } else {
            const series = Object.values(languages);
            const labels = Object.keys(languages);
            const data = {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: series,
                    backgroundColor: [
                        "#79CAF2",
                        "#89e051",
                        "#e34c26",
                        "#f1e05a",
                        "#563d7c",
                        "#b83998",
                        "#b07219"
                    ],
                }]
            };
            const options = {
                legend: {
                    position: 'bottom'
                }
            };

            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2}  style={{minHeight: 200, minWidth:200}}>
                    <h3>{translator.languages}</h3>
                    <Doughnut data={data} options={options} height={1} width={1}/>
                </Box>
            )
        }
    }


}

export default GithubRepoLanguages;
