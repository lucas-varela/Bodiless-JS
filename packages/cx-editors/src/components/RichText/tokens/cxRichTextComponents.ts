import { cxLink } from '@bodiless/cx-link';
import { cxElement } from '@bodiless/cx-elements';

export const cxRichTextComponents = {
  paragraph: cxElement.Body,
  Bold: cxElement.WithBold,
  Underline: cxElement.WithUnderline,
  SuperScript: cxElement.WithSuperscript,
  H1: cxElement.H1,
  H2: cxElement.H2,
  H3: cxElement.H3,
  H4: cxElement.H4,
  H5: cxElement.H5,
  Link: cxLink.Default,
};
