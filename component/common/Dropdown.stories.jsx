import React from 'react';

import { CommonDropdownField } from './Dropdown';

export default {
    title: 'Common/Dropdown',
    component: CommonDropdownField,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const DropdownTemplate = (args) => <CommonDropdownField {...args} />;

export const BasicDropdown = DropdownTemplate.bind({});

BasicDropdown.args = {
    label: "Dropdown Label",
    data: "makan",
    size: 'small',
    options: ["makan", "minum"],
    fullWidth: true,
};

