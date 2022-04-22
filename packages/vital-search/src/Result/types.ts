import { ComponentType } from 'react';

export type SearchResultComponents = {
  SearchResultWrapper: ComponentType<any>;
  SearchResultList: ComponentType<any>;
  SearchResultListItem: ComponentType<any>;
  SearchResultSummary: ComponentType<any>;
  SearchHelmet: ComponentType<any>;
};

export type SearchResultItemComponents = {
  ItemList: ComponentType<any>;
  ItemH3: ComponentType<any>;
  ItemAnchor: ComponentType<any>;
  ItemParagraph: ComponentType<any>;
};
