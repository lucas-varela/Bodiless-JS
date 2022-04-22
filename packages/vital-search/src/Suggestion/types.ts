import { ComponentType } from 'react';

export type SuggestionComponents = {
  Wrapper: ComponentType<any>,
  Text: ComponentType<any>,
  Count: ComponentType<any>,
};

export type SuggestionListComponents = {
  Wrapper: ComponentType<any>,
  ItemWrapper: ComponentType<any>,
  Item: ComponentType<any>,
};
