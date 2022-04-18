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

import { withNodeKey } from '@bodiless/core';
import { flowHoc, replaceWith, on } from '@bodiless/fclasses';
import { withPlaceholder } from '@bodiless/components';
import { asBodilessLink } from '@bodiless/components-ui';
import { vitalImage } from '@bodiless/vital-image';
import { vitalTypography, vitalColor } from '@bodiless/vital-elements';
import {
  EditorPlainClean, vitalEditorPlain, RichTextClean, vitalRichText,
} from '@bodiless/vital-editors';
import { asCardToken } from '../CardClean';

/**
 * Basic Card Design.
 *
 * @todo: static token?
 */
const Base = asCardToken({
  Editors: {
    Wrapper: asBodilessLink(),
    Title: on(EditorPlainClean)(vitalEditorPlain.Default),
    Eyebrow: on(EditorPlainClean)(vitalEditorPlain.Default),
    Description: on(RichTextClean)(vitalRichText.Default),
    CTALink: asBodilessLink(),
    CTAText: on(EditorPlainClean)(vitalEditorPlain.Default),
  },
  Content: {
    Title: withPlaceholder('Card Title'),
    Eyebrow: withPlaceholder('Card Eyebrow'),
    Description: withPlaceholder('Card Description'),
  },
  Schema: {
    Title: withNodeKey('title'),
    Eyebrow: withNodeKey('eyebrow'),
    Description: withNodeKey('description'),
    Image: withNodeKey('image'),
    CTAText: withNodeKey('cta')
  },
  Components: {
    Image: vitalImage.Default,
    CTAWrapper: replaceWith(() => null),
  },
  Core: {
  },
  Theme: {
    Eyebrow: vitalTypography.Eyebrow,
    Title: vitalTypography.H2,
    Description: vitalTypography.Body,
  },
  Spacing: {
    ImageWrapper: 'p-4 md:p-8',
    Eyebrow: 'my-4',
  },
  Meta: flowHoc.meta.term('Type')('Card'),
});

/**
 * WithVerticalOrientation removes unnecessary wrappers from the card
 */
const WithVerticalOrientation = asCardToken({
  Layout: {
    Wrapper: 'w-full flex h-full flex-col',
    Image: 'w-full',
    Description: 'flex-grow',
  },
  Spacing: {
    ContentWrapper: 'py-4',
  },
  Meta: flowHoc.meta.term('Orientation')('Vertical'),
});

/**
 * WithHorizontalOrientation splits the card in half with the image on the left
 */
const WithHorizontalOrientation = asCardToken({
  Layout: {
    Wrapper: 'md:flex-row w-full flex flex-col',
    Image: 'w-full',
    ImageWrapper: 'md:w-1/2 flex flex-col',
    ContentWrapper: 'md:w-1/2 flex flex-col',
    Description: 'flex-grow',
  },
  Spacing: {
    ContentWrapper: 'px-4',
  },
  Meta: flowHoc.meta.term('Orientation')('Horizontal'),
});

/**
 * WithNoTitle removes title from the card
 */
const WithNoTitle = asCardToken({
  Components: {
    TitleWrapper: replaceWith(() => null),
  },
  // @todo: Meta set as "Type: Card"?
  Meta: flowHoc.meta.term('Type')('Card'),
});

/**
 * WithNoDescription removes the description from the card and adjusts title.
 *
 *  where
 *     Title - adds grow because description will not exist
 */
const WithNoDescription = asCardToken({
  Components: {
    DescriptionWrapper: replaceWith(() => null),
  },
  Layout: {
    Title: 'flex-grow',
  },
  Meta: flowHoc.meta.term('Type')('Card'),
});

/**
 * Hero Card Design.
 */
const Hero = asCardToken({
  ...Base,
  Components: {
    EyebrowWrapper: replaceWith(() => null),
    Wrapper: asBodilessLink(),
    Image: vitalImage.Default,
  },
  Layout: {
    Wrapper: 'md:flex-row w-full flex flex-col',
    Image: 'w-full',
    ImageWrapper: 'md:w-1/2 flex flex-col',
    ContentWrapper: 'md:w-1/2 flex flex-col',
    Description: 'flex-grow',
    CTAWrapper: 'md:w-1/2 flex flex-col mx-auto justify-center items-center',
  },
  Spacing: {
    ContentWrapper: 'px-10',
    ImageWrapper: 'p-0',
    CTAWrapper: 'py-4',
  },
  Theme: {
    TitleWrapper: vitalTypography.H2,
    CTAWrapper: vitalColor.BgPrimaryPage,
  },
  Meta: flowHoc.meta.term('Type')('Card'),
});

const Default = asCardToken({
  ...Base,
});

export default {
  Base,
  Default,
  Hero,
  WithNoDescription,
  WithNoTitle,
  WithHorizontalOrientation,
  WithVerticalOrientation,
};
