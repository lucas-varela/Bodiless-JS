# Building a Site

This section describes the building of a site with BodilessJS & usign the CanvasX design system & CanvasX. And while this is explicit for using the two together, building out custom tokens and componets instead utilizing CanvasX offered ones will work. 

  * [Identify Components](./IdentifyingComponentsGuide)  -- @jones looking for a new home for this and/or remove.

## Overview

@jones this is brought over /canvasx/packages/canvasx-documentation/doc/Development/Guides/BuildingSites/README.md so we should remove it from there can you note that.
@jones as we build out the cx-packages we want to link to each individual and really contain the documentation to the specific package.  So what ever cx-pacakges already exist and match this page, link them up.

1. Create site

   - Overview of [Building a Site using Bodiless](./TypographySetup/BuildingOverview)
    - Create and initialize a new site repository as described in [the documentation for local development](../../../About/GettingStarted/ResourcesShared/LocalDevelopment.md).
    - Provide overview of monorepo structure
    * [Bodiless Starter Components](./ComponentsStarterKit)

1. Define Typography for the site.

   This step will define and implement basic elements of the design system (typography, spacing, colors).

      1. Before starting it best to have a clear understanding of [Using Tailwind with Bodiless](./TypographySetup/TailwindGuide)
      2. [Defining Typography](./TypographySetup/Typography)
      3. [Using Custom Fonts](./TypographySetup/Fonts)

1. Text Editors
   - Implement the basic text editors for the site which includes a plain editor and Rich text editor.
   - @jones link into the Editors page site building section.
   - RichText: Use tokens from `cx-Elements` to define available text styling options. (should go to CX-Editors site builder usage section to be filled in.)
   - EditorPlain: If brand/site font(s) require superscript of ® symbol, (should go to CX-Editors site builder usage section to be filled in.)
  implement a version of the plain text editor which applies this Cx token.
1. Flowcontainer/Layout Tool
   - Implement the basic layout editors for the site
     - FlowContainer: Apply standard spacing tokens to create one or more flow
      containers for different use cases. Include your RichText editor.
   - All rest of components will be added to Flowcontainer as needed.
1. Image Presets
   - Implement the basic image editors/presets for a site.  In most cases, you
     can simply reuse one or more of the default tokens available in CanvasX.
1. Basic Layout / Page
   - Implement the site's basic page structure.
   - [Responsiveness](./Responsiveness)
   - Setup responsiveness.  Width of site/breakkpoints, etc.
   - Recommend leaving most of the design elements as their CanvasX defauts for now.
   - Utilize placeholders and keep styling limited to how the 'blocks' reander in the component and inore what renders.
   - The end Goal of the build will to be replace brand requirement working versions of:
     - Logo
     - Header & components in header
     - Footer & components in footer
     - Layout & components in layout
1. Generic Page:
   - Implement the site's generic page template. For components which have not yet been implemented, for now leave at their defaults.
   - TitleRow
   - GenericPage
     - Use appropriate FlowContainers for the content areas
     - Use the Layout from the previous step
   - Page: Provide your GenericPage as the default variation in the `Page` chameleon.
1. Organism tokens/components
   - Implement the basic organism customization tokens for the site.  As you develop each, create a flow container token which makes relevant variations of the organism available in one or more site flow containers and add to existing flow container.
   - This list includes:
     - Accordion
     - List/CompoundList
     - Links
     - Youtube
     - Buttons
1. Multi-language
   - If your site requires multi-language, recommend bring in the i18 canvasx pacakges and many components are depending on toggle data between languages.
1. Cards
   - Implement a site's card tokens.  Use the image, editor and list, etc tokens from previous steps.
   - Review the variations of the different cards
1. Navigation Components
   - Implement a site's menu, burger menu and breadcrumb tokens and insert into the header/layout and/or generic page template.
   - Implement additional utility menus (often in header)
   - Implement additional side menus (often in articles)
   - Implement additional footer menus
1. Identify & Build Reusable Content
   - If your site has content that is reused across the site its recommended to have developer build out the component with the default content (image, copy, link) so that it can be easily placed multiple saving content entry.
   - The most common case here is Cards
1. Additional Templates
   - Implement a site's additional page templates such as:
     - Article,
     - PDP,
     - PLP,
     - custom
       - Homepage often has custom features/components
1. Address any specific components that are in Header/Footer/Global
   - Logo / Favicon branding
   - Header components
   - Footer commponents
1. Build out Site Specific Components that your site may utilize such as:
   - Carousel
   - BazaarVoice (reviews)
   - Where to Buy
   - Social wall
   - Search
   - Social Share
   - Filtering
   - Custom components
1. Contentful components:
   - [Building Contentful Components](./BuildingComponents/BuildingContentful)
1. Supporting Components
   - Meta
   - GTM
   - HREF
   - GDPR
   - SEO
     - Sitemap.xml
     - Robots.txt
     - Schemas
1. Content entry
