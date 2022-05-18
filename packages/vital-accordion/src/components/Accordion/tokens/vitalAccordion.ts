import { withNode, withNodeKey } from '@bodiless/core';
import { addProps, as } from '@bodiless/fclasses';
import { withFAQSchema } from '@bodiless/schema-org';
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

const WithInitiallyExpanded = asAccordionToken({
  Behavior: {
    _: addProps({ expanded: true })
  }
});

const WithFAQSchema = asAccordionToken({
  SEO: {
    Wrapper: withFAQSchema,
    Title: vitalAccordionTitle.WithFAQSchema,
    Body: vitalAccordionBody.WithFAQSchema,
  },
});

export default {
  Default,
  WithInitiallyExpanded,
  WithFAQSchema,
};
