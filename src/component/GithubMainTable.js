import React, {Component, forwardRef} from 'react';

import {Box} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';


import MaterialTable from 'material-table';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import GitHubIcon from '@material-ui/icons/GitHub';
import LockIcon from "@material-ui/icons/Lock";
import OpenRepoIcon from '@material-ui/icons/OpenInNew';
import DescriptionOpenIcon from '@material-ui/icons/Description';
import DescriptionCloseIcon from '@material-ui/icons/InsertDriveFile';
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
                    cellStyle: {textAlign: "right"},
                    render: rowData => (
                        rowData.private ?
                            (<div>
                                <Tooltip title={translator.openRepo}>
                                    <Link to={'/github/'+rowData.name} style={{color: 'black', marginRight:10}}>
                                        <OpenRepoIcon href={rowData.name}/>
                                    </Link>
                                </Tooltip>
                                <Tooltip title={translator.private}>
                                    <LockIcon/>
                                </Tooltip>
                            </div>) :
                            (<div>
                                <Tooltip title={translator.openRepo}>
                                    <Link to={'/github/'+rowData.name} style={{color: 'black', marginRight:10}}>
                                        <OpenRepoIcon href={rowData.name}/>
                                    </Link>
                                </Tooltip>
                                <Tooltip title={translator.viewGithub}>
                                    <a href={rowData.html_url} style={{color: 'black'}}>
                                        <GitHubIcon href={rowData.html_url}/>
                                    </a>
                                </Tooltip>
                            </div>)

                    )
                }
            ];

            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2} style={{marginTop: 25}}>
                    <Typography variant="h3" component="h4" gutterBottom align={"center"}>
                        {translator.allRepo}
                    </Typography>
                    <MaterialTable
                        title=""
                        columns={columns}
                        data={repoList}
                        icons={tableIcons}
                        options={{grouping: true}}
                        detailPanel={
                            [{
                                tooltip: translator.table.showDesc,
                                icon: DescriptionCloseIcon,
                                openIcon: DescriptionOpenIcon,
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
