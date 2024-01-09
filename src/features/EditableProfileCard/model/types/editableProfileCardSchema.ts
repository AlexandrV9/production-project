import { Profile } from 'entities/Profile/model/types/profile';

import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
  data?: Profile; // данные от сервера (остаются не изменными, пока не будет новый запрос на получение)
  form?: Profile; // изменяемые данные
  isLoading?: boolean;
  error?: string;
  readonly: boolean; // доступен ли пользователь для редактирования?
  validateError?: ValidateProfileError[];
}
