import { as } from '@bodiless/fclasses';
// import { GTMDataLayerSearchResultHelmet } from '@bodiless/vital-gtm';
import {
  asSearchResultListItemToken,
  asSearchResultToken,
} from './ResultClean';

const DefaultSearchResultListItem = asSearchResultListItemToken({
  Theme: {
    ItemH3: 'text-xl',
    ItemAnchor: 'font-bold',
    ItemParagraph: 'text-base',
  },
  Spacing: {
    ItemList: 'mb-9',
    ItemH3: 'mb-5',
  },
});

const vitalSearchResultListItem = {
  Default: DefaultSearchResultListItem,
};

const DefaultSearchResult = asSearchResultToken({
  Theme: {
    SearchResultSummary: 'capitalize',
  },
  Components: {
    SearchResultListItem: as(vitalSearchResultListItem.Default),
    // @todo uncomment after implementing gtm package
    // SearchHelmet: startWith(GTMDataLayerSearchResultHelmet),
  },

});

const vitalSearchResult = {
  Default: DefaultSearchResult,
};

export {
  vitalSearchResult,
  vitalSearchResultListItem
};
