import { ComponentMeta,ComponentStory } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import testImg from "shared/assets/tests/test-photo.jpeg"
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'testerin',
    first: 'tes',
    city: 'Anist',
    currency: Currency.EUR,
    avatar: testImg
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};
withError.decorators = [StoreDecorator({})]

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
Loading.decorators = [StoreDecorator({})]