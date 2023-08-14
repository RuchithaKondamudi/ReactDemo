import { Meta, StoryObj } from '@storybook/react';
import TypoWithInput from '.';

const meta: Meta<typeof TypoWithInput> = {
  title: 'Molecules/TypoWithInput',
  component: TypoWithInput,
};

export default meta;

type Story = StoryObj<typeof TypoWithInput>;

export const ComponentStory: Story = {
  name: 'TypoWithInput',
  args: {
    variant: 'blue',
    name: 'Username',
    placeholder: 'Enter Username',
  },
};
