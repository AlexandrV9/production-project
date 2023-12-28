import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  profileActions,
  profileReducer,
  ProfileSchema,
  ValidateProfileError,
} from 'entities/Profile';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Armenia,
  lastname: 'testerin',
  first: 'tes',
  city: 'Anist',
  currency: Currency.EUR,
};

describe('loginSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });
  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: '123',
        lastname: '123',
      },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: '456', lastname: '456' }),
      ),
    ).toEqual({ form: { username: '456', lastname: '456' } });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateError: [ValidateProfileError.INCORRECT_AGE],
      form: data,
      data,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({ readonly: true, validateError: undefined, form: data, data });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({ isLoading: true, validateErroes: undefined });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErroes: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
