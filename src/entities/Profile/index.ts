import { ProfileSchema , ValidateProfileError } from 'features/EditableProfileCard/model/types/editableProfileCardSchema';

import {
  profileActions,
  profileReducer,
} from '../../features/EditableProfileCard/model/slice/profileSlice';

import { Profile } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { Profile, ProfileSchema, ValidateProfileError };

export { profileActions, profileReducer };

export { ProfileCard };
