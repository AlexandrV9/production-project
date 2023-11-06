import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

enum LoginErrors {
  INCORRECT_DATA = '',
  SERVER_ERROR = '',
}

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState());

  try {
    const res = await extra.api.put<Profile>('/profile', formData);

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue('error');
  }
});
