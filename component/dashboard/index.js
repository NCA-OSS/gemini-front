import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './dashboard.module.scss';
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchBar from "material-ui-search-bar";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const dashboard_data = [
    {
        tribe: "DICE",
        squad: "Selfcare Portal",
        empl_number: "7",
        priority: "High",
        emp_data: [
            {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }, {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }, {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }
        ]
    }, {
        tribe: "DICE",
        squad: "Shop Portal",
        empl_number: "6",
        priority: "Normal",
        emp_data: [
            {
                name: "Gerald Lee Ming Han",
                email: "gerald.ming.han.lee@accenture.com",
                end_contract: "30-11-2022",
                priority: "Normal"
            }, {
                name: "Gerald Lee Ming Han",
                email: "gerald.ming.han.lee@accenture.com",
                end_contract: "30-11-2022",
                priority: "Normal"
            }, {
                name: "Gerald Lee Ming Han",
                email: "gerald.ming.han.lee@accenture.com",
                end_contract: "30-11-2022",
                priority: "Normal"
            }
        ]
    }, {
        tribe: "DICE",
        squad: "Biz Portal",
        empl_number: "5",
        priority: "Normal", // avg(sum(priority)/number of employee) (3months =< high(3), 6months =< normal(2), else = low(1))
        emp_data: [
            {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022", //end - current date  (3months =< high(3), 6months =< normal(2), else = low(1))
                priority: "High"
            }, {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }, {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }
        ]
    }, {
        tribe: "SPORA",
        squad: "Spora Portal",
        empl_number: "8",
        priority: "High",
        emp_data: [
            {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }, {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }, {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }
        ]
    }, {
        tribe: "SPORA",
        squad: "MyUnifi APP",
        empl_number: "5",
        priority: "Low",
        emp_data: [
            {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }, {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }, {
                name: "Tan Hong Shen",
                email: "hong.shen.tan@accenture.com",
                end_contract: "30-11-2022",
                priority: "High"
            }
        ]
    }
]

const makeStyles = (priority) => {

    if (priority === 'High') return { background: '#F12B2C' };
    else if (priority === 'Normal') return { background: '#FEC400' };
    else if (priority === 'Low') return { background: '#29CC97' };
}



function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow
                className='maintr'
                key={row.name}
            >
                <TableCell align="center">{row.tribe}</TableCell>
                <TableCell align="center">{row.squad}</TableCell>
                <TableCell align="center">{row.empl_number}</TableCell>
                <TableCell align="center">
                    <span className={styles.priority} style={makeStyles(row.priority)}>
                        {row.priority}
                    </span>
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
                <TableCell style={{ padding: '0px' }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Table aria-label="employee_info">
                                <TableBody>
                                    {row.emp_data?.map((emp_data) => (
                                        <TableRow key={emp_data.name} className='ndtr'>
                                            <TableCell align="center">{emp_data.name}</TableCell>
                                            <TableCell align="center">{emp_data.email}</TableCell>
                                            <TableCell align="center">{emp_data.end_contract}</TableCell>
                                            <TableCell align="center"><span className={styles.priority} style={makeStyles(emp_data.priority)}>{emp_data.priority}</span></TableCell>
                                            <TableCell>
                                                <IconButton
                                                    aria-label="more details"
                                                    size="small"
                                                ><ArrowCircleRightOutlinedIcon />
                                                </IconButton>
                                            </TableCell>
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



export function SummaryTable() {
    return (
        <Paper sx={{ overflowX: 'auto', minWidth: 900 }}>
            <TableContainer component={Paper}
                style={{
                    padding: '0px 20px 40px 20px',
                    // maxHeight: 650
                }}>
                <Typography
                    sx={{ padding: '20px 20px' }}
                    id="tableTitle"
                    component="div"
                    align="left"
                >
                    Contractor
                </Typography>
                <Table stickyHeader>

                    <TableHead>
                        <TableRow>
                            <TableCell align='center' className='maintr'>Tribes</TableCell>
                            <TableCell align="center" >Squads</TableCell>
                            <TableCell align="center" >Number of Employees</TableCell>
                            <TableCell align="center" >Priority</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dashboard_data.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>

    );
}



const employee_data = [
    {
        name: "Tan Hong Shen 1",
        email: "hong.shen.tan@accenture.com",
        end_contract: "30-11-2022",
        priority: "Low"
    }, {
        name: "Tan Hong Shen 2",
        email: "hong.shen.tan@accenture.com",
        end_contract: "30-11-2022",
        priority: "Normal"
    }, {
        name: "Tan Hong Shen 3",
        email: "hong.shen.tan@accenture.com",
        end_contract: "30-11-2022",
        priority: "High"
    },
    {
        name: "Gerald Lee Ming Han 1",
        email: "gerald.ming.han.lee@accenture.com",
        end_contract: "30-11-2022",
        priority: "Normal"
    }, {
        name: "Gerald Lee Ming Han 2",
        email: "gerald.ming.han.lee@accenture.com",
        end_contract: "30-11-2022",
        priority: "Normal"
    }, {
        name: "Gerald Lee Ming Han 3",
        email: "gerald.ming.han.lee@accenture.com",
        end_contract: "-",
        priority: "Normal"
    }
]


export function EmployeeTable() {
    const [selectedRow, setSelectedRow] = React.useState();
    // console.log({ selectedRow });

    const [rows, setRows] = React.useState(employee_data);
    const [searched, setSearched] = React.useState("");

    const requestSearch = (searchedVal) => {
        const filteredRows = employee_data.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };


    function handleRowClick(row) {
        setSelectedRow(row);
    }


    return (
        <div>
            <div className='mb3'>
                <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                    placeholder="Search for an employee or contractor (eg. Gerald)"

                />
            </div>
            <Paper sx={{ overflowX: 'auto' }}>


                <TableContainer component={Paper} sx={{ padding: '0px 20px 40px 20px', }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow >
                                <TableCell align='center'>Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">End Date of Contract</TableCell>
                                <TableCell align="center">Priority</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows?.map((row) => (
                                <TableRow
                                    href="/"
                                    className={`${styles.hoverMouse} maintr`}
                                    onClick={() => handleRowClick(row)}
                                    key={row.name}

                                >
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.end_contract}</TableCell>
                                    <TableCell align="center">
                                        <span className={styles.priority} style={makeStyles(row.priority)}>
                                            {row.priority}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            aria-label="more details"
                                            size="small"
                                        ><ArrowCircleRightOutlinedIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>

                    </Table>
                </TableContainer>
            </Paper >
        </div >

    );
}