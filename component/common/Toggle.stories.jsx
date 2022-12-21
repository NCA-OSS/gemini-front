import React from 'react';

import { CommonToggle } from './Toggle';

export default {
    title: 'Common/Toggle',
    component: CommonToggle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const ToggleTemplate = (args) => <CommonToggle {...args} />;

export const BasicToggle = ToggleTemplate.bind({});

BasicToggle.args = {
    disabled: false,
    color: "primary",
    size: 'large',
};


