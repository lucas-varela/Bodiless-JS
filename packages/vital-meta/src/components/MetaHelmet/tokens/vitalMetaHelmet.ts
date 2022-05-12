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

import {
  withMeta, withTitle, withMetaStatic, asBodilessHelmet,
} from '@bodiless/components';
import { useMenuOptionUI } from '@bodiless/core';
import { asElementToken } from '@bodiless/vital-elements';
import {
  flowIf, HOC, Token, as, FlowHoc, flowHoc, TokenDef
} from '@bodiless/fclasses';

import {
  withSeoMetaForm, withShareMetaForm, withMetaHtmlAttributes, useIsHomePage,
} from '../helpers';

const asSimpleMetaFieldToken = (...tokens: Token[]) => asElementToken({
  Core: {
    _: Array.isArray(tokens) ? as(...tokens) : tokens,
  },
});

// SEO tokens

const WithPageTitle = asSimpleMetaFieldToken(withTitle({
  name: 'title', label: 'Title', placeholder: 'Rec 30-65 character',
})('page-title'));

const WithPageDescription = asSimpleMetaFieldToken(withMeta({
  name: 'description',
  useFormElement: () => useMenuOptionUI().ComponentFormTextArea,
  label: 'Description',
  placeholder: 'Rec < 160 char',
})('page-description'));

const WithOrganizationAreaServed = asSimpleMetaFieldToken(withMeta({
  name: 'areaServed', label: 'Organization Area Served',
})('organization-area-served'));

const WithOrganizationContactOption = asSimpleMetaFieldToken(withMeta({
  name: 'contactOption', label: 'Organization Contact Option',
})('organization-contact-option'));

const WithOrganizationContactType = asSimpleMetaFieldToken(withMeta({
  name: 'contactType', label: 'Organization Contact Type',
})('organization-contact-type'));

const WithOrganizationTelephone = asSimpleMetaFieldToken(withMeta({
  name: 'telephone', label: 'Organization Telephone',
})('organization-telephone'));

const WithHomePageSchemas = asElementToken({
  Compose: {
    WithOrganizationAreaServed,
    WithOrganizationContactOption,
    WithOrganizationContactType,
    WithOrganizationTelephone,
  },
  Flow: flowIf(useIsHomePage),
});

const WithHtml = asSimpleMetaFieldToken(
  withMetaHtmlAttributes('Set at /src/data/site/meta$html.json', 'Set at /src/data/site/meta$html.json', 'html', 'site'),
);

const WithSeoForm = asElementToken({
  Core: {
    _: as(withSeoMetaForm, asBodilessHelmet('meta') as HOC),
  },
});
const flowWithFinally = (
  ...finalTokens: Token[]
): FlowHoc<any> => (...tokens: TokenDef<any, any, any>[]) => flowHoc(
  ...tokens,
  as(...finalTokens),
);

// All SEO tokens packaged
const SEO = asElementToken({
  Flow: flowWithFinally(WithSeoForm),
  Compose: {
    WithHtml,
    WithHomePageSchemas,
    WithPageDescription,
    WithPageTitle,
  },
});
// Social Share OG & UTM tokens
const WithUTMCampaign = asSimpleMetaFieldToken(withMetaStatic({
  name: 'utm_campaign',
})({ nodeKey: 'utm-campaign', nodeCollection: 'site' }));

const WithSiteName = asSimpleMetaFieldToken(withMetaStatic({
  name: 'og:site_name', attribute: 'property',
})({ nodeKey: 'og-sitename', nodeCollection: 'site' }));

const WithTwitterCard = asSimpleMetaFieldToken(withMetaStatic({
  name: 'twitter:card',
})({ nodeKey: 'twitter-card', nodeCollection: 'site' }, 'summary'));

const WithShareType = asSimpleMetaFieldToken(withMeta({
  name: 'og:type', attribute: 'property', label: 'OG Type',
})({ nodeKey: 'og-type' }));

const WithTwitterTitle = asSimpleMetaFieldToken(withMeta({
  name: 'twitter:title', label: 'Twitter Title',
})('twitter-title'));

const WithUTMContent = asSimpleMetaFieldToken(withMeta({
  name: 'utm_content', label: 'UTM Content',
})('utm-content'));

const WithShareDescription = asSimpleMetaFieldToken(withMeta({
  name: 'og:description',
  useFormElement: () => useMenuOptionUI().ComponentFormTextArea,
  label: 'Description',
  attribute: 'property',
})('og-description'));

const WithShareUrl = asSimpleMetaFieldToken(withMeta({
  name: 'og:url', label: 'Url', attribute: 'property',
})('og-url'));

const WithShareImage = asSimpleMetaFieldToken(withMeta({
  name: 'og:image',
  label: 'Image (provide absolute URL)',
  attribute: 'property',
})('og-image'));

const WithShareTitle = asSimpleMetaFieldToken(withMeta({
  name: 'og:title', label: 'Title', attribute: 'property',
})('og-title'));

const WithShareForm = asElementToken({
  Core: {
    _: as(withShareMetaForm, asBodilessHelmet('meta') as HOC),
  },
});

// All Social Share OG & UTM tokens packaged
const Share = asElementToken({
  Flow: flowWithFinally(WithShareForm),
  Compose: {
    WithUTMCampaign,
    WithSiteName,
    WithTwitterCard,
    WithShareType,
    WithTwitterTitle,
    WithUTMContent,
    WithShareDescription,
    WithShareUrl,
    WithShareImage,
    WithShareTitle,
  },
});

export default {
  SEO,
  Share,
};

export {
  WithUTMCampaign,
  WithSiteName,
  WithTwitterCard,
  WithShareType,
  WithTwitterTitle,
  WithUTMContent,
  WithShareDescription,
  WithShareUrl,
  WithShareImage,
  WithShareTitle,
  WithHtml,
  WithPageDescription,
  WithPageTitle,
  WithOrganizationTelephone,
  WithOrganizationContactType,
  WithOrganizationContactOption,
  WithOrganizationAreaServed,
  WithSeoForm,
  WithShareForm,
  WithHomePageSchemas,
  asSimpleMetaFieldToken,
};
