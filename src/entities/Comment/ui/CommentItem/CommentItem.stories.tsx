import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentItem } from './CommentItem';

export default {
  title: 'entities/Comment/CommentItem',
  component: CommentItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => (
  <CommentItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'comment 1',
    user: {
      id: '1',
      username: 'Tester01',
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  comment: {
    id: '1',
    text: 'comment 1',
    user: {
      id: '1',
      username: 'Tester01',
    },
  },
};
