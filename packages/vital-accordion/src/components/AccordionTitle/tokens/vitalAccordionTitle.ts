import { withPlaceholder } from '@bodiless/components';
import { withNodeKey } from '@bodiless/core';
import { as, on } from '@bodiless/fclasses';
import { EditorPlainClean, vitalEditorPlain } from '@bodiless/vital-editors';
import { vitalColor, vitalFontSize, vitalTextDecoration } from '@bodiless/vital-elements';
import { asAccordionTitleToken } from '../AccordionTitleClean';

const Default = asAccordionTitleToken({
  Editors: {
    Label: on(EditorPlainClean)(vitalEditorPlain.Default),
  },
  Content: {
    Label: withPlaceholder('Accordion Title'),
  },
  Schema: {
    Label: withNodeKey('title'),
  },
  Theme: {
    Wrapper: as(
      vitalFontSize.XL,
      vitalTextDecoration.Medium,
      vitalColor.TextPrimaryHeaderCopy
    ),
  },
  Layout: {
    Wrapper: 'flex justify-between items-center',
  },
  Spacing: {
    Wrapper: 'p-2',
  }
});

export default {
  Default,
};
