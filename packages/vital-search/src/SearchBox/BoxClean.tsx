import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { SearchBoxComponents } from './types';

export { SearchBox as SearchBoxClean } from '@bodiless/search';

const asSearchBoxToken = asVitalTokenSpec<SearchBoxComponents>();

export { asSearchBoxToken };
