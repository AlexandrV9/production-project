import { ProfileSchema } from 'features/EditableProfileCard/model/types/editableProfileCardSchema';

import { AddNewCommentSchema } from '../types/addNewComment';

import {
  addNewCommentActions,
  addNewCommentReducer,
} from './addNewCommentSlice';

describe('addNewCommentSlice.test', () => {
  test('test set text', () => {
    const state: DeepPartial<AddNewCommentSchema> = {
      text: '123',
    };
    expect(
      addNewCommentReducer(
        state as ProfileSchema,
        addNewCommentActions.setText('456'),
      ),
    ).toEqual({ text: '456' });
  });
});
