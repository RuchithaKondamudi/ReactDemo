import { Meta, StoryObj } from '@storybook/react';
import ButtonComponent from '.';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const ButtonComponentStory: Story = {
  name: 'Button',
  args: {
    name: 'Submit',
    size: 'small',
    variant: 'contained',
  },
};
