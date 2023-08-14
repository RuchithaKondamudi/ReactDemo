import { Meta, StoryObj } from '@storybook/react';
import TextField from '.';

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const ButtonComponentStory: Story = {
  name: 'Button',
  args: {
    placeholder: 'Enter Input',
  },
};
