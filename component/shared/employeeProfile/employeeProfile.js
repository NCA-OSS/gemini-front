//Employee Profile is the white card with employee's details, skillsets and contractor details (if present)

//React 
import React, { useState } from 'react';

//Components
import EmpStatusItem from "./empStatusItem";

//Package
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses}from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IconButton} from "@mui/material";


import TextField from '@mui/material/TextField';

import {ButtonSubmit} from '../button'

//Style
import styles from './employeeProfile.module.scss';


const specificEmp = [
  {
      empStatus:"Active",
      name: "Tan Hong Shen 1",
      email: "hong.shen.tan@accenture.com",
      end_contract: "30-11-2022",
      priority: "High",
      full_name:"Tan Hong Shen",
      nick_name:"Hong Shen",
      job_title:"Springboot Developer",
      role:"Senior Developer",
      contact:"+6012-9923211",
      usertype:"User",
      tribe:"DICE",
      squads:["Unifi Portal","Shop Portal","Selfcare Portal"],
      skill_sets:["React.js","Springboot","Drupal 8","Java","Angular","Python"],
      isContractor: "true",
      company:"TM",
      country:"Singapore",
      start_date:"01/05/2020",
      latest_start_date:"01/05/2021",
      latest_end_date:"01/05/2022",
      contractor_status: "ENDED"
  }
]



export default function EmployeeProfile(props) {

  const[userInput,setUserInput] = useState('');

  const handleChange = event => {
    setUserInput(event.target.value);
  };


  return (
    <div >
      <div className={styles.row}>
        {/* Add employee current_status card here */}
        <div className={styles.leftCol}>

          <div className={styles.row}>
              <div className={styles.leftCol}>
                <h3>Personal Details</h3>
              </div>

              <div className={styles.rightCol}>
                <div className={styles.statusPadding}>
                  {specificEmp.map((emp, index) => {
                      return (
                          <EmpStatusItem {...emp}/>
                      )
                  })}
                </div>
              </div>

        </div>
          <Paper>
            <TableContainer>
              <Table sx={{[`& .${tableCellClasses.root}`]: {borderBottom: "none"}}}
              size="small" aria-label="smaller table">

                <TableBody>
                {specificEmp?.map((specificEmp) => (
                  <React.Fragment>
                    <TableRow>
                      <TableCell variant="head">Name:</TableCell>
                      <TableCell>{specificEmp.name}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Full Name:</TableCell>
                      <TableCell>{specificEmp.full_name}</TableCell>
                      {/* <TableCell>
                        <TextField value={userInput} onChange={handleChange} size="small"/>
                      </TableCell> */}
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Nick Name:</TableCell>
                      <TableCell>{specificEmp.nick_name}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Job Title:</TableCell>
                      <TableCell>{specificEmp.job_title}</TableCell>
                    </TableRow>
                    
                    <TableRow>
                      <TableCell variant="head">Email:</TableCell>
                      <TableCell>{specificEmp.email}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Role:</TableCell>
                      <TableCell>{specificEmp.role}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Contact:</TableCell>
                      <TableCell>{specificEmp.contact}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Usertype:</TableCell>
                      <TableCell>{specificEmp.usertype}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Tribe:</TableCell>
                      <TableCell>{specificEmp.tribe}</TableCell>
                    </TableRow>


                    <TableRow>
                      <TableCell variant="head">Squad(s):</TableCell>
                      <TableCell>
                        <ul>
                          {specificEmp.squads.map(items=>(
                            <li>{items}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>
          </div>

          <div className={styles.rightCol}>
          <h3>Skillset</h3>
          <Paper>
            <TableContainer>
              <Table sx={{[`& .${tableCellClasses.root}`]: {borderBottom: "none"}}}
              size="small" aria-label="smaller table">
                <TableBody>
                {specificEmp?.map((specificEmp) => (
                  <React.Fragment>
                    <TableRow>
                      <TableCell>
                        <ul>
                          {specificEmp.skill_sets.map(items=>(
                            <li>{items}</li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>

          <h3>Contractor Details</h3>
          <Paper>
            <TableContainer>
              <Table sx={{[`& .${tableCellClasses.root}`]: {borderBottom: "none"}}}
              size="small" aria-label="smaller table">
                <TableBody>
                {specificEmp?.map((specificEmp) => (
                  <React.Fragment>

                    <TableRow>
                      <TableCell variant="head">Company:</TableCell>
                      <TableCell>{specificEmp.company}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Country:</TableCell>
                      <TableCell>{specificEmp.country}</TableCell>
                    </TableRow>   

                    <TableRow>
                      <TableCell variant="head">Start Date:</TableCell>
                      <TableCell>{specificEmp.start_date}</TableCell>
                    </TableRow>   

                    <TableRow>
                      <TableCell variant="head">Latest Start Date:</TableCell>
                      <TableCell>{specificEmp.latest_start_date}</TableCell>
                    </TableRow>   

                    <TableRow>
                      <TableCell variant="head">Latest End Date:</TableCell>
                      <TableCell>{specificEmp.latest_end_date}</TableCell>
                    </TableRow>   

                    <TableRow>
                      <TableCell variant="head">Contractor Status:</TableCell>
                      <TableCell>{specificEmp.contractor_status}</TableCell>
                    </TableRow>   

                  </React.Fragment>
                ))}
                </TableBody>

              </Table>
            </TableContainer>
          </Paper>

          <div className={styles.alignButtonRight}><ButtonSubmit buttonText="EDIT"/> </div>
          

          </div>

      </div>
    </div>
  );
}


