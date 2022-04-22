import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { SuggestionComponents, SuggestionListComponents } from './types';

const asSearchSuggestionToken = asVitalTokenSpec<SuggestionComponents>();
const asSearchSuggestionListToken = asVitalTokenSpec<SuggestionListComponents>();

export {
  asSearchSuggestionToken,
  asSearchSuggestionListToken,
};
