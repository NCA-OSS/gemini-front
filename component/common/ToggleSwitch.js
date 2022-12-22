import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';
import { useRouter } from "next/router";

export function CommonToggleSwitch() {
    const [isContractor, setIsContractor] = React.useState(false);
    const handleChange = (e) => {
        if (!e.target.checked) setIsContractor(true)
        if (e.target.checked) setIsContractor(false)

        // do whatever you want with isChecked value
    }

    return (
        <div className={"toggleButton"}>
            <div className={"button button-r"} id={"button1"}>
                <input type="checkbox" className={"checkbox"} defaultChecked={false} onChange={e => handleChange(e)} />
                <div className={"knobs"}></div>
                <div className={"layer"}></div>
            </div>
        </div>
    )
}



