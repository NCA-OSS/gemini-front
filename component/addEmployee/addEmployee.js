//React
import React, { useState } from 'react';
import styles from './addEmployee.module.scss'
import { useRouter } from "next/router"
import ContractorForm from './contractor/contractorFrom';
import CommonForm from './common/commonForm';


export default function AddEmployee(props) {
    const router = useRouter()
    const [isContractor, setIsContractor] = useState(false);

    const [addData, setAddData] = useState({
        status: '',
        userType: '',
        name: '',
        nickname: '',
        email: '',
        role: '',
        phoneNumber: '',
        tribe: '',
        squad: '',
        skillset: [],
        contractor: true,
        contractorDetails: {
            agencyName: '',
            country: '',
            startDate: '',
            endDate: '',
            latestendDate: '',
            status: ''
        }
    })

    const handleChange = (e) => {
        if (!e.target.checked) setIsContractor(true)
        if (e.target.checked) setIsContractor(false)

        // do whatever you want with isChecked value
    }

    return (
        <div>

            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>Personal Details</h2>
                    <CommonForm setAddData={setAddData} addData={addData} />
                </div>

                <div className={styles.card}>
                    <div className={styles.toggleButton}>
                        <h2>Contractor</h2>
                        <div className={`${styles.button} ${styles.r}`} id={styles.button1}>
                            <input type="checkbox" className={styles.checkbox} defaultChecked={false} onChange={e => handleChange(e)} />
                            <div className={styles.knobs}></div>
                            <div className={styles.layer}></div>
                        </div>
                    </div>

                    <div className={isContractor ? 'show animate__animated animate__fadeIn' : 'hide'}>
                        <ContractorForm />
                    </div>
                </div>


            </div>
        </div>
    );
}