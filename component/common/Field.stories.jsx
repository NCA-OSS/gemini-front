import React from 'react';

import { CommonInputField } from './Field';

export default {
    title: 'Common/Field',
    component: CommonInputField,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const InputFieldTemplate = (args) => <CommonInputField {...args} />;

export const BasicInputField = InputFieldTemplate.bind({});

BasicInputField.args = {
    data: 'This is Input Field Sample',
    error: false,
    errorMsg: 'Please input something',
    size: 'small',
    fullWidth: false,
};


