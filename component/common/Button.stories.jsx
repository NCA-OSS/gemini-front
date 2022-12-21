import React from 'react';

import { CommonButton } from './Button';

export default {
    title: 'Common/Button',
    component: CommonButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const ButtonTemplate = (args) => <CommonButton {...args} />;

export const BasicButton = ButtonTemplate.bind({});

BasicButton.args = {
    data: 'Submit',
    disabled: false,
    color: "primary",
    size: 'large',
    fullWidth: false,
    variant: "contained"
};


