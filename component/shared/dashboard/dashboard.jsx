import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './dashboard.module.scss';
import {IconButton} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const dashboard_data = [
    {
        tribe: "DICE",
        squad: "Selfcare Portal",
        empl_number: "7",
        priority: "High",
        emp_data:[
            {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            },{
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            },{
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }
        ]
    },{
        tribe: "DICE",
        squad: "Shop Portal",
        empl_number: "6",
        priority: "Normal",
        emp_data:[
            {
                name: "Gerald Lee Ming Han",
                email: "gerald.ming.han.lee@accenture.com",
                end_contract: "30-11-2022",
                priority: "Normal"
            },{
                name: "Gerald Lee Ming Han",
                email: "gerald.ming.han.lee@accenture.com",
                end_contract: "30-11-2022",
                priority: "Normal"
            },{
                name: "Gerald Lee Ming Han",
                email: "gerald.ming.han.lee@accenture.com",
                end_contract: "30-11-2022",
                priority: "Normal"
            }
        ]
    },{
        tribe: "DICE",
        squad: "Biz Portal",
        empl_number: "5",
        priority: "Normal",
        emp_data:[
            {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            },{
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            },{
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }
        ]
    },{
        tribe: "SPORA",
        squad: "Spora Portal",
        empl_number: "8",
        priority: "High",
        emp_data:[
            {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            },{
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            },{
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }
        ]
    },{
        tribe: "SPORA",
        squad: "MyUnifi APP",
        empl_number: "5",
        priority: "Low",
        emp_data:[
            {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            },{
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            },{
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }
        ]
    }
]

const makeStyles=(priority)=>{

    if(priority === 'High')
    {
        return  {
            background: '#F12B2C',
        }
    }
    else if(priority === 'Normal')
    {
        return{
            background : '#29CC97',
        }
    }
    else if (priority === 'Low')
    {
        return {
            background : '#FEC400',
        }
    }
}


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
                <TableRow
                    key={row.name}
                    sx={{ '& > *': { borderBottom: 'unset' } }}
                >

                    <TableCell align="center">{row.tribe}</TableCell>
                    <TableCell align="center">{row.squad}</TableCell>
                    <TableCell align="center">{row.empl_number}</TableCell>
                    <TableCell align="center">
                        <span className={styles.priority} style={makeStyles(row.priority)}>{row.priority}</span>
                    </TableCell>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                </TableRow>
            <TableRow>
                <TableCell style={{ padding:0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Table aria-label="employee_info">
                                <TableBody>
                                        {row.emp_data.map((emp_data) => (
                                            <TableRow key={emp_data.name}>
                                                <TableCell className={styles.miniCell} align="center">{emp_data.name}</TableCell>
                                                <TableCell className={styles.miniCell} align="center">{emp_data.email}</TableCell>
                                                <TableCell className={styles.miniCell} align="center">{emp_data.end_contract}</TableCell>
                                                <TableCell className={styles.miniCell} align="center"><span className={styles.priority} style={makeStyles(row.priority)}>{emp_data.priority}</span></TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
Row.propTypes = {
    row: PropTypes.shape({
        tribe: PropTypes.string.isRequired,
        squad: PropTypes.string.isRequired,
        empl_number: PropTypes.number.isRequired,
        priority: PropTypes.string.isRequired,
        emp_data: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                end_contract: PropTypes.string.isRequired,
                priority: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};
export default function BasicTable() {
    return (
            <Paper sx={{overflowX:'auto'}}>
                <TableContainer sx= {{maxHeight:250}} component={Paper}
                                style = { {boxShadow: '0px 13px 20px 0px #80808029'}}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>Tribes</TableCell>
                                <TableCell align="center">Squads</TableCell>
                                <TableCell align="center">Number of Employees</TableCell>
                                <TableCell align="center">Priority</TableCell>
                                <TableCell/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dashboard_data.map((row) => (
                                <Row key={row.name} row={row}/>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

    );
}
