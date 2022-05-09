/**
 * Copyright © 2022 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export {
  SearchBoxClean,
  asSearchBoxToken,
  vitalSearchBox,
} from './SearchBox';

export {
  SearchResultClean,
  asSearchResultListItemToken,
  asSearchResultToken,
  vitalSearchResult,
  vitalSearchResultListItem,
} from './Result';

export {
  SearchLayoutClean,
  asSearchLayoutToken,
  vitalSearchLayout,
} from './Layout';

export {
  asSearchSuggestionListToken,
  asSearchSuggestionToken,
  vitalSearchSuggestionList,
} from './Suggestion';

export {
  SearchClean,
  asSearchMenuWrapper,
  asSearchToken,
  vitalSearch,
} from './Search';

export {
  vitalSearchToggler,
  asSearchMenuToggler,
  asSearchTogglerToken,
  SearchTogglerClean,
} from './SearchToggler';

export {
  SearchMenuContext,
  withSearchMenuProvider,
  useSearchMenuContext,
  useIsSearchMenuHidden,
  useIsSearchMenuVisible,
} from './SearchMenuContext';

// Re-export everything from @bodiless/search so site builders
// only need to import @bodiless/vital-search in their sites.
export * from '@bodiless/search';
