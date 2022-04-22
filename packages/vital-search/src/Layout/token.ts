import { as } from '@bodiless/fclasses';
// import { withSearchDataLayer } from '@bodiless/vital-gtm';
import { asSearchLayoutToken } from './LayoutClean';
import { vitalSearchBox } from '../SearchBox';
import { vitalSearchResult } from '../Result';

const DefaultSearchLayout = asSearchLayoutToken({
  // @todo uncomment after implementing gtm package
  // Behavior: {
  //   Box: as(withSearchDataLayer),
  // },
  Components: {
    Box: as(vitalSearchBox.Inline),
    Result: as(vitalSearchResult.Default),
  },
});

const vitalSearchLayout = {
  Default: DefaultSearchLayout,
};

export { vitalSearchLayout };
