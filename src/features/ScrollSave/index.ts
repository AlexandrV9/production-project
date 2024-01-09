import {
  getSaveScroll,
  getSaveScrollByPath,
} from './model/seletors/scrollSaveSelectors';
import {
  scrollSaveActions,
  scrollSaveReducer,
} from './model/slices/scrollSaveSlice';
import type { ScrollSaveSchema } from './model/types/ScrollSaveSchema';

export {
  getSaveScroll,
  getSaveScrollByPath,
  scrollSaveActions,
  scrollSaveReducer,
  ScrollSaveSchema,
};
