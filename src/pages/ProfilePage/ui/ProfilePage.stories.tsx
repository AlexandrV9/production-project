import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'testerin',
        first: 'tes',
        city: 'Anist',
        currency: Currency.EUR,
      },
    },
  }),
  StoreDecorator({}),
];

export const Dark: Story = {};
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'testerin',
        first: 'tes',
        city: 'Anist',
        currency: Currency.EUR,
      },
    },
  }),
];
