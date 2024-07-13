import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Quote from './quote';

export default {
  title: 'Editorial/Quote',
  component: Quote,
  argTypes: {
    modifierClass: {
      description: 'Additional CSS classes for the component',
      control: 'text',
    },
    logo: {
      description: 'HTML string for the logo image',
      control: 'text',
    },
    quote: {
      description: 'The quote text to be displayed',
      control: 'text',
    },
    image: {
      description: 'HTML string for the headshot image',
      control: 'text',
    },
    name: {
      description: 'The name of the person being quoted',
      control: 'text',
    },
    job: {
      description: 'The job title of the person being quoted',
      control: 'text',
    },
    layout: {
      description: 'The layout style of the quote component',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
} as ComponentMeta<typeof Quote>;

const Template: ComponentStory<typeof Quote> = (args) => <Quote {...args} />;

export const QuoteStory = Template.bind({});
QuoteStory.args = {
  modifierClass: '',
  logo: '<img src='https://placehold.co/400x300/333333/FFF?text=Logo' className='img-fluid rounded-circle' alt='Logo' />',
  quote: 'Quisque id odio. Sed a libero. Praesent ut ligula non mi varius sagittis. Curabitur nisi.',
  image: '<img src='https://placehold.co/400x300/333333/FFF?text=Headshot' className='img-fluid rounded-circle' alt='Headshot' />',
  name: 'Jane Doe',
  job: 'Donec interdum metus et hendrerit',
  layout: 'left',
};