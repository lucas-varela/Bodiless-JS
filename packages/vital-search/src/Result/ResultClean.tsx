import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { SearchResultComponents, SearchResultItemComponents } from './types';

export { SearchResult as SearchResultClean } from '@bodiless/search';

const asSearchResultToken = asVitalTokenSpec<SearchResultComponents>();
const asSearchResultListItemToken = asVitalTokenSpec<SearchResultItemComponents>();

export { asSearchResultToken, asSearchResultListItemToken };
