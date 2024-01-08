import { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
  title: 'shared/Stack/Flex',
  component: Flex,
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>1. first element</div>
        <div>2. second element</div>
        <div>3. other elements ...</div>
        <div>4. other elements ...</div>
        <div>5. other elements ...</div>
      </>
    ),
  },
};

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>1. first element</div>
        <div>2. second element</div>
        <div>3. other elements ...</div>
        <div>4. other elements ...</div>
        <div>5. other elements ...</div>
      </>
    ),
  },
};

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>1. first element</div>
        <div>2. second element</div>
        <div>3. other elements ...</div>
        <div>4. other elements ...</div>
        <div>5. other elements ...</div>
      </>
    ),
  },
};

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>1. first element</div>
        <div>2. second element</div>
        <div>3. other elements ...</div>
        <div>4. other elements ...</div>
        <div>5. other elements ...</div>
      </>
    ),
  },
};

export const RowGap32: Story = {
  args: {
    gap: '32',
    children: (
      <>
        <div>1. first element</div>
        <div>2. second element</div>
        <div>3. other elements ...</div>
        <div>4. other elements ...</div>
        <div>5. other elements ...</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>1. first element</div>
        <div>2. second element</div>
        <div>3. other elements ...</div>
        <div>4. other elements ...</div>
        <div>5. other elements ...</div>
      </>
    ),
  },
};

export const ColumnAlignEnd: Story = {
  args: {
    direction: 'column',
    align: 'end',
    children: (
      <>
        <div>1. first element</div>
        <div>2. second element</div>
        <div>3. other elements ...</div>
        <div>4. other elements ...</div>
        <div>5. other elements ...</div>
      </>
    ),
  },
};

export const ColumnGap16: Story = {
  args: {
    gap: '16',
    direction: 'column',
    children: (
      <>
        <div>1. first element</div>
        <div>2. second element</div>
        <div>3. other elements ...</div>
        <div>4. other elements ...</div>
        <div>5. other elements ...</div>
      </>
    ),
  },
};
