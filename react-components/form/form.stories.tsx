import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormComponent from './form';
import './form.scss';

export default {
  title: 'Editorial/Form',
  component: FormComponent,
} as ComponentMeta<typeof FormComponent>;

const Template: ComponentStory<typeof FormComponent> = (args) => <FormComponent {...args} />;

export const Form = Template.bind({});
Form.args = {};