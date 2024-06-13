import type { Meta, StoryObj } from '@storybook/react';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import testImg from '@/shared/assets/tests/test-photo.jpeg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'testerin',
    first: 'tes',
    city: 'Anist',
    currency: Currency.EUR,
    avatar: testImg,
  },
};

export const withError: Story = {};
withError.args = {
  error: 'true',
};
withError.decorators = [StoreDecorator({})];

export const Loading: Story = {};
Loading.args = {
  isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
