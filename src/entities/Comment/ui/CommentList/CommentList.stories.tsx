import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: "1",
      text: "comment 1",
      user: {
        id: "1",
        username: "Tester01"
      }
    },
    {
      id: "2",
      text: "comment 2",
      user: {
        id: "1",
        username: "Tester01"
      }
    },
    {
      id: "3",
      text: "comment 3",
      user: {
        id: "2",
        username: "Tester02"
      }
    }
  ]
};
Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  comments: []
}
Loading.decorators = [StoreDecorator({})];
