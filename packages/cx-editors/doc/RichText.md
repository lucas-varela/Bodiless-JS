# CX Rich Text Editor Component

The CX Rich Text Editor Component is based on the [BodilessJS Rich Text Editor
Component](/Components/Editors/RichText). While Bodiless Rich Text is a generic rich text editor
(RTE) component with tokens that can be combined however you choose, CX Rich Text builds upon it,
providing a sensible default combination of its generic tokens (i.e., features and styles), to help
meet typical site-use expectations.

By default, there are three options for the Rich Text Editor: _Simple_, _Basic_, and _Full_.

## Content Editor Details

There is no change to the Editor experience by the CX Editor package, and, thus, you can refer to
the [Bodiless Rich Text Editor : Content Editor Details](../RichText#content-editor-details).

## Site Builder Details

At site or global regional/brand library, they can compose the tokens with your site specific tokens
and editors.

01. Create a `src/components/Editors/Editor.token.ts`  where you can assign your site/brand specific
    tokens to each.  (Import & Export as needed)
    ```js
    const withQuoteBlockMeta = flow(
      asBlock,
      withButton('format_quote'),
    );

    const withSimpleDesign = withDesign({
      SuperScript: asSuperScript,
    });

    const withBasicDesign = withDesign({
      Bold: asBold,
      Italic: asItalic,
      Underline: asUnderline,
      Link: asLink,
      SuperScript: asSuperScript,
      AlignLeft: asAlignLeft,
      AlignRight: asAlignRight,
      AlignJustify: asAlignJustify,
      AlignCenter: asAlignCenter,
    });

    const withFullFeaturedDesign = withDesign({
      Bold: asBold,
      Italic: asItalic,
      Underline: asUnderline,
      StrikeThrough: flow(replaceWith(Strike), asStrikeThrough, withStrikeThroughMeta),
      Link: asLink,
      SuperScript: asSuperScript,
      AlignLeft: asAlignLeft,
      AlignRight: asAlignRight,
      AlignJustify: asAlignJustify,
      AlignCenter: asAlignCenter,
      H1: asHeader1,
      H2: asHeader2,
      H3: asHeader3,
      BlockQuote: flow(replaceWith(Blockquote), asBlockQuote, withQuoteBlockMeta),
    });

    export {
      withSimpleDesign,
      withBasicDesign,
      withFullFeaturedDesign,
    };
    ```
01. Create a `src/components/Editors/Editor.ts`  where you can compose your site/brand specific
    tokens to each editor:  (Import & Export as needed)
    ```js
    const EditorSimple = flow(
      withSimpleDesign,
    )(EditorBasicClean);

    const EditorBasic = flow(
      withBasicDesign,
    )(CanvasxEditorBasic);

    const EditorFull = flow(
      withFullFeaturedDesign,
    )(EditorFull);

    const withEditorSimple = withEditor(EditorSimple);
    const withEditorBasic = withEditor(EditorBasic);
    const withEditorFull = withEditor(EditorFull);
    ```
01. Create a `src/components/Editors/index.tsx`  where you can export all tokens and schemas from
    Editors.
    ```js
    export * from './Editors';
    export * from './Editors.token';
    ```

## Architectural Details

None needed. For architectural information, see [Bodiless Rich Text : Architectural
Details](../RichText#architectural-details).
