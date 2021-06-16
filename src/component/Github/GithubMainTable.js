import React, {Component, forwardRef} from 'react';

import {Box} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";


import MaterialTable from 'material-table';

import Clear from '@material-ui/icons/Clear';
import LockIcon from "@material-ui/icons/Lock";
import Search from '@material-ui/icons/Search';
import Remove from '@material-ui/icons/Remove';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import GitHubIcon from '@material-ui/icons/GitHub';
import ViewColumn from '@material-ui/icons/ViewColumn';
import OpenRepoIcon from '@material-ui/icons/OpenInNew';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import {Link} from "react-router-dom";

class GithubMainTable extends Component {

    render() {
        const {repoList} = this.props;

        if (!repoList) {
            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2} style={{marginTop: 25}}>
                    <Typography variant="h2" component="h3" gutterBottom>
                        <Skeleton/>
                    </Typography>
                </Box>
            )
        } else {
            const {translator} = this.props;
            const tableIcons = {
                DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
                FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
                LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
                NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
                PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
                ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
                Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
                SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
                ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
                ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
            };

            const columns = [
                {title: translator.table.name, field: 'name', grouping: false},
                {title: translator.table.language, field: 'language'},
                {title: 'description', field: 'description', hidden: true, grouping: false},
                {title: 'html_url', field: 'html_url', hidden: true, grouping: false},
                {
                    title: translator.table.actions, field: 'private', type: 'boolean',
                    headerStyle: {textAlign: "right"},
                    cellStyle: {textAlign: "right",},
                    render: rowData => (
                        <div>
                            <Tooltip title={translator.openRepo}>
                                <Link to={'/github/'+rowData.name} style={{color: 'currentcolor', marginRight:10}}>
                                    <OpenRepoIcon href={rowData.name}/>
                                </Link>
                            </Tooltip>
                            <Tooltip title={translator.private}>
                                {rowData.private ?
                                    <LockIcon/>
                                    :
                                    <a href={rowData.html_url} style={{color: 'currentcolor'}} >
                                        <GitHubIcon href={rowData.html_url}/>
                                    </a>
                                }
                            </Tooltip>
                        </div>



                    )
                }
            ];

            return (
                <Box border={1} borderColor="background.paper" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={0} style={{marginTop: 25}} >
                    <Typography variant="h3" gutterBottom align={"center"} style={{paddingTop: 20}}>
                        {translator.allRepo}
                    </Typography>
                    <MaterialTable
                        title=""
                        columns={columns}
                        data={repoList}
                        icons={tableIcons}
                        options={{grouping: true,
                            headerStyle: {
                                fontSize: '1.1em',
                                fontWeight: 'bold'
                            }}}

                        style={{borderRadius: 20, margin:'2vw', paddingBottom:15}}
                        detailPanel={
                            [{
                                tooltip: translator.table.showDesc,
                                icon: ExpandMoreIcon,
                                openIcon: ExpandLessIcon,
                                render: rowData => {
                                    if (rowData.description) {
                                        return (
                                            <Box p={[1, 2, 3, 4]}>
                                                <Typography variant="h5" component="h5" gutterBottom>
                                                    {translator.description}
                                                </Typography>
                                                <Typography variant="body1" gutterBottom>
                                                    {rowData.description}
                                                </Typography>
                                            </Box>
                                        )
                                    } else {
                                        return (
                                            <Box p={[1, 2, 3, 4]}>
                                                <Typography variant="h5" component="h5" gutterBottom>
                                                    {translator.description}
                                                </Typography>
                                                <Typography variant="body1" gutterBottom>
                                                    {translator.noDescript}
                                                </Typography>
                                            </Box>
                                        )
                                    }

                                }
                            }]
                        }
                    />
                </Box>
            )
        }
    }


}

export default GithubMainTable;
