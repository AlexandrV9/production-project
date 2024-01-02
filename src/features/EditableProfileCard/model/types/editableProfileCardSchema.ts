import { Profile } from 'entities/Profile/model/types/profile';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}
export interface ProfileSchema {
  data?: Profile; // данные от сервера (остаются не изменными, пока не будет новый запрос на получение)
  form?: Profile; // изменяемые данные
  isLoading?: boolean;
  error?: string;
  readonly: boolean; // доступен ли пользователь для редактирования?
  validateError?: ValidateProfileError[];
}
