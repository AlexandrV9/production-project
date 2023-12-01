import { StateSchema } from 'app/providers/StoreProvider';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from './addCommentForm';

describe('addCommentForm.test', () => {
  test('getAddCommentFormText', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        text: '123',
      },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual('123');
  });

  test('should work getAddCommentFormText with emty state', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {},
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
  });

  test('getAddCommentFormError', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        error: 'error',
      },
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
  });

  test('should work getAddCommentFormError with emty state', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {},
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
