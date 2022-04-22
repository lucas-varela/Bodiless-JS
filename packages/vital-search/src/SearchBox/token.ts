import { I, addProps, as } from '@bodiless/fclasses';
import { withChild } from '@bodiless/core';
import { withLgResponsiveVariants, asLgResponsiveToken } from '@bodiless/vital-elements';
import { asSearchBoxToken } from './BoxClean';
import { vitalSearchSuggestionList } from '../Suggestion';

const withSearchIcon = (icon = 'search') => as(
  withChild(
    as(
      'font-material-icons cursor-pointer not-italic font-normal pr-1 leading-1.05',
      addProps({
        children: icon,
      }),
    )(I),
  ),
);

const Desktop = asSearchBoxToken({
  Theme: {
    SearchWrapper: 'sm:w-1/2 border text-blue bg-white border-blue',
    SearchInput: 'outline-none',
  },
  Layout: {
    SearchWrapper: 'relative flex',
    SearchInput: 'flex-grow',
    SearchButton: 'flex items-center',
  },
  Spacing: {
    SearchWrapper: 'mb-1',
    SearchInput: 'px-2',
  },
  Components: {
    Suggestions: as(vitalSearchSuggestionList.Default),
  },
  Content: {
    SearchButton: withSearchIcon('search'),
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
  withSearchIcon,
};
