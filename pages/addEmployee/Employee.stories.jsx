import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import  AddEmployeePage  from './index';

export default {
    title: 'Page/AddEmployee',
    component: AddEmployeePage,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <AddEmployeePage {...args} />;

export const EmployeePage = Template.bind({});

