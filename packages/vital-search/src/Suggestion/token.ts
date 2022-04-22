import {
  addClassesIf,
  as,
} from '@bodiless/fclasses';
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
    Wrapper: 'border border-black bg-white',
  },
  Layout: {
    Wrapper: 'absolute top-full z-50 w-full',
  },
  Spacing: {
    ItemWrapper: 'my-1',
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
