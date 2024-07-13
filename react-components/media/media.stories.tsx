import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Media from './media';

export default {
  title: 'Editorial/Media',
  component: Media,
  argTypes: {
    media: {
      description: 'Define the media item',
      control: 'text',
      type: {
        required: true,
      },
    },
  },
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = (args) => <Media {...args} />;

export const MediaComponent = Template.bind({});
MediaComponent.args = {
  media: '<img src='./images/card.webp' class='img-fluid rounded' alt='test image' />',
};