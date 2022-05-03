/**
 * Copyright © 2021 Johnson & Johnson
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

import { ComponentType } from 'react';
import pick from 'lodash/pick';
import { withResponsiveVariants } from '@bodiless/components';
import resolvedConfigs from '@bodiless/fclasses/src/tailwindcss/resolveConfig';
import { asVitalTokenSpec } from './tokenSpec';

const getTailwindBreakpoints = () => {
  const {
    theme: { screens },
  } = resolvedConfigs;
  const breakpoints = { ...screens };

  Object.keys(breakpoints).forEach((key) => {
    if (typeof breakpoints[key] === 'string') {
      breakpoints[key] = breakpoints[key].replace(/\D+/g, '');
    }
  });

  return breakpoints;
};

const breakpoints = getTailwindBreakpoints();
const lgBreakpoints = pick(breakpoints, 'lg');
const withLgResponsiveVariants = withResponsiveVariants({
  breakpoints: lgBreakpoints,
});

/**
 * Use to create a token which applies a responsive design. The token accepts
 * two design keys: '_default' for mobile, and 'lg' for desktop.
 */
const asLgResponsiveToken = asVitalTokenSpec<{
  lg: ComponentType<any>,
  _default: ComponentType<any>,
}>();

/**
 * Sets responsive variants based on tailwind breakpoints.
 *
 * @param viewports
 * List of viewport sizes (eg 'sm', 'lg') for which to define variatns.
 */
const withTwResponsiveVariants = (
  ...viewports: string[]
) => withResponsiveVariants({ breakpoints: pick(breakpoints, viewports) });

export {
  breakpoints,
  lgBreakpoints,
  withLgResponsiveVariants,
  asLgResponsiveToken,
  withTwResponsiveVariants,
};
