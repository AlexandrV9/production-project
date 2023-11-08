import { Profile, ValidateProfileError } from 'entities/Profile';

export function validateProfileData(profile?: Profile) {
  if (!profile) return [ValidateProfileError.NO_DATA];

  const { first, lastname, age, country } = profile;

  const erros: ValidateProfileError[] = [];

  if (!first || !lastname) {
    erros.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    erros.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    erros.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return erros;
}
