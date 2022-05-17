import { withNode, withNodeKey } from '@bodiless/core';
import { as } from '@bodiless/fclasses';
import { vitalColor } from '@bodiless/vital-elements';
import { vitalAccordionBody } from '../../AccordionBody';
import { vitalAccordionTitle } from '../../AccordionTitle';
import { asAccordionToken } from '../AccordionClean';

const Default = asAccordionToken({
  Components: {
    Title: vitalAccordionTitle.Default,
    Body: vitalAccordionBody.Default,
  },
  Theme: {
    Wrapper: vitalColor.BgPrimaryCard,
  },
  Schema: {
    _: as(
      withNode,
      withNodeKey('accordion'),
    ),
  }
});

export default {
  Default,
};
