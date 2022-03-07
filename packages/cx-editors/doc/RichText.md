# CX Rich Text Editor Component

The CX Rich Text Editor Component is based on the [BodilessJS Rich Text Editor
Component](/Components/Editors/RichText). While Bodiless Rich Text is a generic rich text editor
(RTE) component with tokens that can be combined however you choose, CX Rich Text builds upon it,
providing a sensible default combination of its generic [CanvasX tokens](../../CX_Elements/), to help
meet typical site-use expectations.

By default, the only option available for the CX Rich Text Editor is the _Full_ Rich Text Editor.

## Content Editor Details

Other than potentially seeing different buttons available, there is no change to the Editor
experience by the CX Editor package, and, thus, you can refer to the [Bodiless Rich Text Editor :
Content Editor Details](../RichText#content-editor-details).

## Site Builder Details

### Usage of the CX Rich Text Editor

The following can be applied to any Slot as in the follow example.

    ```js
      Editors: {
        Content: as(cxRichText.Default)(RichTextClean);
      },
      Schema: {
        Content: withNode('content'),
      }
    ```

We recommend the Editor component & tokens are defined in Editors Domain and what node is defined in Schema Domain.

### Overriding Rich Text Editor

#### For Overriding specific existing styles usined CanvasX Rich Text Editor

See [CanvasX Site Typography](../CX_Elements/CX_SiteTypography)

#### Shadowing *Preferred method

Provide the Shadowing function as defined in [Shadown](../CX_Elements/CX_Shadow)

File to shadow: [cxRichText](https://github.com/johnsonandjohnson/Bodiless-JS/blob/main/packages/cx-editors/src/components/RichText/tokens/cxRichText.ts)

### Extending Default CanvasX Rich Text Editor

At site or global regional/brand library, they can compose the tokens with your site specific tokens
and editors.

01. Create a `src/components/Editors/RichText.tokens.ts`  where you can assign your site/brand specific
    tokens to each.  (Import & Export as needed)

    ```js
    const withQuoteBlockMeta = flowHoc(
      startWith(Span),
      withButton('format_quote'),
    );

    const BrandRichText = asCxTokenSpec()({
      ...cxRichText.Default,
      Core: {
        ...cxRichText.Default.Core,
        Quote: withQuoteBlockMeta,
      },
      Components: {
        ...cxRichText.Default.Components,
        Quote: 'italic',
      },
    });
    ```

    `withQuoteBlockMeta` creates a token that will be designable Span and adds new quote button to editor.  
    `BrandRichText` starts with the existing cxRichText functionality and in both Core/Componets, it spreads existing funcitonality across these two domains and the new tokens are added.

01. Create a `src/components/Editors/index.tsx`  where you can export all tokens and schemas from
    Editors.
    ```js
    export BrandRichText from './RichText.tokens';
    ```

## Architectural Details

None needed. For architectural information, see [Bodiless Rich Text : Architectural
Details](../RichText#architectural-details).
