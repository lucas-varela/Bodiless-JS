/* eslint-disable react/jsx-pascal-case */
import React, { FC, Fragment } from 'react';
import {
  designable, Div, H1, as
} from '@bodiless/fclasses';
import { SearchResult as SearchResultClean } from '@bodiless/search';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { SearchBoxClean } from '../SearchBox';
import { SearchLayoutComponents, SearchLayoutProps } from './types';

const searchLayoutComponents: SearchLayoutComponents = {
  Wrapper: Div,
  Header: H1,
  Box: SearchBoxClean,
  Result: SearchResultClean,
  Suggestions: Fragment,
};

const SearchLayoutBase: FC<SearchLayoutProps> = ({
  components: C,
  ...rest
}) => (
  <C.Wrapper {...rest}>
    <C.Header {...rest} />
    <C.Box {...rest} />
    <C.Result {...rest} />
    <C.Suggestions {...rest} />
  </C.Wrapper>
);

const SearchLayoutClean = as(
  designable(searchLayoutComponents, 'Search Layout'),
)(SearchLayoutBase);

const asSearchLayoutToken = asVitalTokenSpec<SearchLayoutComponents>();

export {
  SearchLayoutClean,
  asSearchLayoutToken
};
