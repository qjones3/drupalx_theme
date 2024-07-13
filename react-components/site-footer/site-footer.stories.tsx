import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SiteFooter from './site-footer';

export default {
  title: 'General/Site Footer',
  component: SiteFooter,
  argTypes: {
    links: {
      description: 'Define the links',
      control: 'object',
    },
    siteLogo: {
      description: 'Define the site logo',
      control: 'text',
    },
    modifier: {
      description: 'Define the modifier',
      control: 'text',
    },
    menuModifier: {
      description: 'Define the menu modifier',
      control: 'text',
    },
  },
} as ComponentMeta<typeof SiteFooter>;

const Template: ComponentStory<typeof SiteFooter> = (args) => <SiteFooter {...args} />;

export const SiteFooter = Template.bind({});
SiteFooter.args = {
  siteLogo: './images/logo.svg',
  modifier: '',
  linkItemModifier: 'fs-5 text-white',
  links: [
    {
      title: 'Privacy Policy',
      url: '#',
    },
    {
      title: 'Terms of Use',
      url: '#',
    },
    {
      title: 'Contact Us',
      url: '#',
    },
  ],
};