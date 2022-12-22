import React from 'react';

import { CommonMultipleSelect } from './MultipleSelect';

export default {
    title: 'Common/MultipleSelect',
    component: CommonMultipleSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const MultipleSelectTemplate = (args) => <CommonMultipleSelect {...args} />;

export const BasicMultipleSelect = MultipleSelectTemplate.bind({});

BasicMultipleSelect.args = {
    label: "Multiple Select Label",
    size: 'small',
    options: ["Basketball", "Badminton", "Baseball", "Swimming", "Tennis", "Football"],
    fullWidth: true,
};

