import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return true', () => {
    const validateError = [ValidateProfileError.NO_DATA, ValidateProfileError.INCORRECT_COUNTRY];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateError);
  });

  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
