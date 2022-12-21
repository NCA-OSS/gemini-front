import React from 'react';

import { CommonMultipleSelectField } from './MultipleSelect';

export default {
    title: 'Common/MultipleSelect',
    component: CommonMultipleSelectField,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const MultipleselectTemplate = (args) => <CommonMultipleSelectField {...args} />;

export const BasicMultipleselect = MultipleselectTemplate.bind({});

BasicMultipleselect.args = {
    label: "Multiple Select Label",
    size: 'small',
    options: ["Basketball", "Badminton", "Baseball", "Swimming", "Tennis", "Football"],
    fullWidth: true,
};

