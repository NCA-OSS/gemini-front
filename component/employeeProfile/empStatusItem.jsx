import styles from "./employeeProfile.module.scss";
import React from "react";

const makeStyles=(empStatus)=>{
    if(empStatus === 'Active')
    {
        return  {
            background: '#29CC97',
        }
    }
    else if(empStatus === 'Resigned')
    {
        return{
            background : '#F12B2C',
        }
    }
}

const empStatusItem = ({empStatus}) => {
    return (
                <span className={styles.statusCard} style={makeStyles(empStatus)}>
                        {empStatus}
                </span>

    )
}

export default empStatusItem