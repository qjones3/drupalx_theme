import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stat from './stat';
import './stat.scss';

export default {
  title: 'General/Stat',
  component: Stat,
  argTypes: {
    media: { control: 'text' },
    heading: { control: 'text' },
    body: { control: 'text' },
    modifier: { control: 'text' }
  }
} as ComponentMeta<typeof Stat>;

const Template: ComponentStory<typeof Stat> = (args) => <Stat {...args} />;

export const StatStory = Template.bind({});
StatStory.args = {
  media: <span className="material-symbols-outlined display-1">monitoring</span>,
  heading: 'This is small headling',
  body: 'Vestibulum fringilla pede sit amet augue. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
  modifier: 'col-4'
};