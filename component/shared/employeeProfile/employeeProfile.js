//Employee Profile is the white card with employee's details, skillsets and contractor details (if present)

//React 
import React, { useState } from 'react';

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

//Style
import styles from './employeeProfile.module.scss';


const specificEmp = [
  {
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
      skill_sets:["React.js","Springboot","Drupal 8","Java","Angular"]
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

        <div className={styles.leftCol}>
          <h3>Personal Details</h3>
          <Paper>
            <TableContainer>
              <Table sx={{ minWidth:100 }} size="small" aria-label="smaller table">

                {/* <TableHead>
                  <TableRow>
                    <TableCell>Personal Details</TableCell>
                    <TableCell/>
                  </TableRow>
                </TableHead> */}
                
                <TableBody>
                {specificEmp?.map((specificEmp) => (
                  <React.Fragment>
                    <TableRow>
                      <TableCell variant="head">Name:</TableCell>
                      <TableCell>{specificEmp.name}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell variant="head">Full Name:</TableCell>
                      <TableCell>
                        <TextField value={userInput} onChange={handleChange} size="small"/>
                      </TableCell>
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
          </div>

      </div>
    </div>
  );
}


