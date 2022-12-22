import React from 'react';

import { CommonToggleSwitch } from './ToggleSwitch';

export default {
    title: 'Common/ToggleSwitch',
    component: CommonToggleSwitch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const ToggleSwitchTemplate = () => <CommonToggleSwitch />;

export const BasicToggleSwitch = ToggleSwitchTemplate.bind({});



