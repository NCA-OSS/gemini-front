import React from 'react';
import { Formik } from 'formik';
import errorMsg from '../constant/errorMsg';
import { CommonInputField } from '../common/Field';
import { CommonDropdownField } from '../common/Dropdown';
import { emailValidation } from '../validate/emailValidation';
import { tribeList } from '../constant/tribe';

export default function AddEmployeeFormik() {

    const handleValidation = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = errorMsg.emailEmpty;
        } else if (!emailValidation(values.email)) {
            errors.email = errorMsg.emailInvalid;
        }
        return errors;
    }


    const submitForm = (values, setSubmitting) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }

    return (

        <div>
            <Formik
                initialValues={{ email: '', fullName: '', tribe: '' }}
                validate={values => handleValidation(values)}
                onSubmit={(values, { setSubmitting }) => { submitForm(values, setSubmitting) }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <CommonInputField
                            name="email"
                            label="Email Address"
                            type="email"
                            data={values.email}
                            error={Boolean(errors.email)}
                            onChange={handleChange}
                            errorMsg={errors.email}
                            size="small"
                            fullWidth
                        />
                        <CommonInputField
                            name="fullName"
                            label="Full Name"
                            data={values.fullName}
                            error={Boolean(errors.fullName)}
                            onChange={handleChange}
                            errorMsg={errors.fullName}
                            size="small"
                            fullWidth
                        />
                        <CommonDropdownField
                            name="tribe"
                            label="Tribe"
                            data={values.tribe}
                            onChange={handleChange}
                            size="small"
                            options={tribeList}
                            fullWidth
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
};

