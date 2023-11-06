import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile; // данные от сервера (остаются не изменными, пока не будет новый запрос на получение)
  form?: Profile; // изменяемые данные
  isLoading: boolean;
  error?: string;
  readonly: boolean; // доступен ли пользователь для редактирования?
}
