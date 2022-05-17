/**
 * Copyright © 2022 Johnson & Johnson
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

import React from 'react';
import {
  flowHoc,
  as,
  replaceWith,
  H3,
} from '@bodiless/fclasses';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { AccordionClean, vitalAccordion } from '@bodiless/vital-accordion';
import { vitalTypography } from '@bodiless/vital-elements';

const C = {
  H3: as(vitalTypography.H3)(H3),
};

const DefaultAccordion = as(vitalAccordion.Default)(AccordionClean);

const Examples = () => (
  <>
    <C.H3>Default</C.H3>
    <DefaultAccordion />
  </>
);

export const Accordion = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Accordion'),
  Content: {
    Title: replaceWith(() => <>Accordion</>),
    Examples: replaceWith(Examples),
  },
});
