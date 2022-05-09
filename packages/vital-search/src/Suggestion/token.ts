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

import {
  addClassesIf,
  as,
} from '@bodiless/fclasses';
import { vitalColor } from '@bodiless/vital-elements';
// import { withSearchDataLayerSuggestion } from '@canvasx/gtm';
import {
  asSearchSuggestionToken,
  asSearchSuggestionListToken,
} from './SuggestionsClean';

const isOdd = (item: number) => item % 2 === 1;
const isEven = (item: number) => item % 2 === 0;

const DefaultSearchSuggest = asSearchSuggestionToken({
  // @todo uncomment after implementing gtm package
  // Behavior: {
  //   Wrapper: as(withSearchDataLayerSuggestion),
  // },
  Layout: {
    Wrapper: 'flex',
    Count: 'flex-grow',
  },
  Theme: {
    Wrapper: as(
      'hover:bg-teal-400 hover:text-white',
      addClassesIf(({ position }: any) => isEven(position))('bg-white'),
      addClassesIf(({ position }: any) => isOdd(position))('bg-teal-200'),
    ),
    Count: 'text-right',
  },
  Spacing: {
    Wrapper: 'px-2',
  },
});

const vitalSearchSuggestion = {
  Default: DefaultSearchSuggest,
};

const DefaultSearchSuggestionList = asSearchSuggestionListToken({
  Theme: {
    Wrapper: as(vitalColor.BgPrimaryCard, 'border border-black'),
  },
  Layout: {
    Wrapper: 'absolute top-full z-50 w-full',
  },
  Spacing: {
    ItemWrapper: 'my-2',
  },
  Components: {
    Item: as(vitalSearchSuggestion.Default),
  },
});

const vitalSearchSuggestionList = {
  Default: DefaultSearchSuggestionList,
};

export {
  vitalSearchSuggestionList,
};
