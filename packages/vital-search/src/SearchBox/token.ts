import { as } from '@bodiless/fclasses';
import { withLgResponsiveVariants, asLgResponsiveToken, vitalColor } from '@bodiless/vital-elements';
import { asSearchBoxToken } from './BoxClean';
import { vitalSearchSuggestionList } from '../Suggestion';
import SearchIcon from './assets/SearchIcon';
import { withChild } from '../../../bodiless-core/lib';

const Desktop = asSearchBoxToken({
  Theme: {
    SearchWrapper: as(vitalColor.BgPrimaryCard, 'border bg-white border-search-gray'),
    SearchInput: 'focus:outline-none',
  },
  Layout: {
    SearchWrapper: 'relative flex items-center',
    SearchInput: 'flex-grow',
    SearchButton: 'flex items-center',
  },
  Spacing: {
    SearchInput: 'px-2',
    SearchButton: 'mx-1',
  },
  Components: {
    SearchButton: withChild(SearchIcon),
    Suggestions: as(vitalSearchSuggestionList.Default),
  },
});

// @todo: apply mobile theme once available.
const Mobile = asSearchBoxToken({
  ...Desktop,
});

const Inline = asSearchBoxToken({
  ...Desktop,
  Theme: {
    SearchWrapper: 'w-1/2',
    SearchInput: 'outline-none',
  },
  Layout: {
    SearchWrapper: 'flex relative',
    SearchInput: 'flex-grow',
  },
  Spacing: {
    SearchInput: 'mx-2',
  },
});

const ResponsiveSearchBox = asLgResponsiveToken({
  Theme: {
    _default: as(Mobile),
    lg: as(Desktop),
  },
  Core: {
    _: withLgResponsiveVariants,
    _default: 'lg:hidden',
    lg: 'hidden lg:flex',
  },
});

const vitalSearchBox = {
  Default: ResponsiveSearchBox,
  Desktop,
  Mobile,
  Inline,
};

export {
  vitalSearchBox,
};
