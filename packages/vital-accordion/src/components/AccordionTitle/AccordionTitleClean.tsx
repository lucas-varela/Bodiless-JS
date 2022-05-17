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

import React, { FC } from 'react';
import {
  designable,
  Span,
  H4,
} from '@bodiless/fclasses';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { AddIcon, RemoveIcon } from '../../assets';
import { useAccordionContext } from '../Accordion';
import {
  AccordionTitleBaseProps,
  AccordionTitleComponents,
} from './types';

const accordionTitleComponents: AccordionTitleComponents = {
  Wrapper: H4,
  Icon: Span,
  Label: Span,
  OpenIcon: AddIcon,
  CloseIcon: RemoveIcon,
};
const AccordionTitleBase: FC<AccordionTitleBaseProps> = ({
  components, children,
}) => {
  const {
    Wrapper, Label, Icon, OpenIcon, CloseIcon
  } = components;
  const {
    isExpanded,
    setExpanded,
    hasFocus,
    setFocus,
    meta,
  } = useAccordionContext();

  return (
    <Wrapper
      onClick={() => setExpanded(!isExpanded)}
      onFocus={() => setFocus(!hasFocus)}
      onBlur={() => setFocus(!hasFocus)}
      id={meta.accordionTitleId}
      role="button"
      aria-controls={meta.accordionContentId}
      aria-expanded={isExpanded ? 'true' : 'false'}
      tabIndex={0}
    >
      <Label>{ children }</Label>
      <Icon data-accordion-icon={isExpanded ? 'collapse' : 'expand'}>
        {isExpanded ? <CloseIcon /> : <OpenIcon />}
      </Icon>
    </Wrapper>
  );
};

const AccordionTitleClean = designable(accordionTitleComponents, 'AccordionTitle')(AccordionTitleBase);

export const asAccordionTitleToken = asVitalTokenSpec<AccordionTitleComponents>();

export default AccordionTitleClean;
