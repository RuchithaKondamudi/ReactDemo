import { Meta, StoryObj } from '@storybook/react';
import TypographyComponent from '.';

const meta: Meta<typeof TypographyComponent> = {
  title: 'Atoms/Typography',
  component: TypographyComponent,
};

export default meta;

type Story = StoryObj<typeof TypographyComponent>;

export const TypographyComponentStory: Story = {
  name: 'Typography',
  args: {
    children: 'text',
  },
};
