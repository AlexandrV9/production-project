import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form', () => {
    const form = {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname: 'testerin',
      first: 'tes',
      city: 'Anist',
      currency: Currency.EUR,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
