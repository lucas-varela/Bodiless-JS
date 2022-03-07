# CanvasX Plain Text Editor Component

The CanvasX Plain text editor is defining the placeholder and setting up to allow auto Superscripting if necessary.

## Content Editor Details

The plain editor has no options and the user can click in the text and edit as necessary.  If auto superscript token is applied, when the focus is removed from the component being edited, if the string entered by content editor has any special characters configured to be superscript, they will be auto superscripted.

## Site Builder Details

The following can be applied to any Slot as in the follow example.

### Usage

    ```js
      Editors: {
        Content: as(cxEditorPlain.Default)(EditorPlainClean)
      },
      Schema: {
        Content: withNode('content'),
      }
    ```

We recommend the Editor component & tokens are defined in Editors Domain and what node is defined in Schema Domain.

### Auto Superscripting

By default, the editor provide `WithAutoSuperscript` token that can be applied to your plain text editor allowing special characters to be superscripted.

The first parameter is list of characters that will be wrapped with < sup > tag.  The token defaults to "®™.
The second paramter allows you to apply a class to the < sup > tag. The token defaults to `align-baseline`.

#### Usage

The following composes default plain editor with custom superscript token:

  ```js
  const WithCustomAutoSuperscript = asElementToken({
  Behavior: {
    _: withAutoSuperscript('©®™℠', 'align-super'),
  },
  });

  const EditorWithCustomAutoSuperscript = as(
    cxEditorPlain.Default,
    WithCustomAutoSuperscript
    withNodeKey('plain-with-super'),
  )(EditorPlainClean);
  ```

?> **TIP** Some fonts have the trademark characters already raised to the correct position and do not need < sup > tag, while other fonts you need to apply < sup > and raise the characters by styling.   Please check your font and determine if you need AutoSuperscript on plain text editor.   Note the content editor don't have the ability to apply the superscript when using the plain text editor, so its important to apply this token if your font doesn't look superscripted.

## Architectural Details

There are no architecture details necessary for this component.
