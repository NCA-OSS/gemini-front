import styles from "./piechart.module.scss";
import React from "react";

const makeStyles=(usertype)=>{
    if(usertype === 'Permanent Employees')
    {
        return  {
            background: '#E8F2F3',
        }
    }
    else if(usertype === 'Contractor Employees')
    {
        return{
            background : '#F3E8ED',
        }
    }
}

const PiechartItem = ({usertype, value}) => {
    return (
                <span className={styles.card} style={makeStyles(usertype)}>
                        {value} {usertype}
                </span>

            )
}

export default PiechartItem