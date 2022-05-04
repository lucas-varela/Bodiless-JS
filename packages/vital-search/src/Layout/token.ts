import { addProps, as } from '@bodiless/fclasses';
import { vitalTypography } from '@bodiless/vital-elements';
// import { withSearchDataLayer } from '@bodiless/vital-gtm';
import { asSearchLayoutToken } from './LayoutClean';
import { vitalSearchResult } from '../Result';

const DefaultSearchLayout = asSearchLayoutToken({
  // @todo uncomment after implementing gtm package
  // Behavior: {
  //   Box: as(withSearchDataLayer),
  // },
  Components: {
    Result: as(vitalSearchResult.Default),
  },
  Theme: {
    Header: vitalTypography.H1,
  },
  Content: {
    Header: addProps({ children: 'Search Results' }),
  },
});

const vitalSearchLayout = {
  Default: DefaultSearchLayout,
};

export { vitalSearchLayout };
