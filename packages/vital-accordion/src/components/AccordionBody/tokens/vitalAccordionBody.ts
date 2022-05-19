import { withPlaceholder } from '@bodiless/components';
import { withNodeKey } from '@bodiless/core';
import { as, flowIf, on } from '@bodiless/fclasses';
import { asSchemaSource } from '@bodiless/schema-org';
import { vitalRichText, RichTextClean } from '@bodiless/vital-editors';
import { useIsAccordionContracted, useIsAccordionExpanded } from '../../Accordion';
import { asAccordionBodyToken } from '../AccordionBodyClean';

const Base = asAccordionBodyToken({
  Core: {
    Wrapper: as(
      flowIf(useIsAccordionExpanded)(as('block')),
      flowIf(useIsAccordionContracted)(as('hidden')),
    ),
  },
  Editors: {
    Content: on(RichTextClean)(vitalRichText.Default),
  },
  Content: {
    Content: withPlaceholder('Accordion Content'),
  },
  Schema: {
    Content: withNodeKey('body'),
  },
});

const Default = asAccordionBodyToken(Base, {
  Spacing: {
    Wrapper: 'p-2',
  },
});

const WithFAQSchema = asAccordionBodyToken({
  SEO: {
    Content: asSchemaSource('accordion-answer'),
  }
});

export default {
  Base,
  Default,
  WithFAQSchema,
};
