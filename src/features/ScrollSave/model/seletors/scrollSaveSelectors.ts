import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getSaveScroll = (state: StateSchema) => state.scrollSave.scroll;
export const getSaveScrollByPath = createSelector(
  getSaveScroll, // --> { article: 100, main: 45 }
  (state: StateSchema, path: string) => path,  // --> { article или main }
  (scroll, path) => scroll[path] ?? 0
)
