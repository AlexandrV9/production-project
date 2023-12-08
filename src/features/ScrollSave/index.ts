import { ScrollSaveSchema } from './model/types/ScrollSaveSchema';
import {
  scrollSaveReducer,
  scrollSaveActions,
} from './model/slices/scrollSaveSlice';
import {
  getSaveScroll,
  getSaveScrollByPath,
} from './model/seletors/scrollSaveSelectors';

export {
  ScrollSaveSchema,
  scrollSaveReducer,
  scrollSaveActions,
  getSaveScroll,
  getSaveScrollByPath,
};
