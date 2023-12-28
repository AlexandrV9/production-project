import { fetchProfileData } from '../../features/EditableProfileCard/model/services/fetchProfileData/fetchProfileData';
import {
  profileActions,
  profileReducer,
} from '../../features/EditableProfileCard/model/slice/profileSlice';

import {
  Profile,
  ProfileSchema,
  ValidateProfileError,
} from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { Profile, ProfileSchema, ValidateProfileError };

export { profileActions, profileReducer };

export { fetchProfileData };

export { ProfileCard };
