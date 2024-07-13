import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColorToggle from './color-toggle';

export default {
  title: 'General/Color Mode Toggle',
  component: ColorToggle,
} as ComponentMeta<typeof ColorToggle>;

const Template: ComponentStory<typeof ColorToggle> = (args) => <ColorToggle {...args} />;

export const ColorToggleComponent = Template.bind({});
ColorToggleComponent.args = {};