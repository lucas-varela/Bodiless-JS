# CanvasX Elements

CanvasX Elements is composed of [element tokens](../Design/DesignSystem?id=element-tokens) to implement the CanvasX design system.

It consists of the following type of component element tokens and all are in the associated tokens folders:

* Color
* Font Size
* Text Decoration
* Typography

## Content Editor Details

There is no interaction by the Content Editor with the CanvasX element tokens, only with tokens once composed into components.

## Site Builder Details

### CXElement tokens

The site builder has ability to use any of the token CanvasX elements which are in cxElement collection or individually.

#### Usage

import cxElements from @bodiless/cx-elements or the specific Element token

If singular token being is used and directly from specific Element token

    ```
    Header1: cxColor.TextPrimaryBodyCopy,
    ```

Or use from cxELement collection & can be within `as()` or `flowHOC()` if combining multiple tokens:

  ```
    BoldBody: as(
      cxElement.Bold,
      cxColor.TextPrimaryBodyCopy,
    ),
  ```

### CXElement Site Specific Typography

The site builder may need to override a specific token or specific set of tokens and the following is [best methodology](./SiteTypography) for doing do.

### Helper utilities

The package also includes some helper tokens that are very useful in token composition:

* `asCxTokenSpec` :  Creates a token definition utility for a clean component and will allow tokens to be assigned to any of the slots within your clean component.

Usage:

    ```
    const asLayoutToken = asCxTokenSpec<LayoutComponents>();
    ```

* `asMetaToken` :  Creates a token which applies the given metadata.

Usage:

    ```
    TBD
    ```

Explanation: TBD

* `asElementToken` : Creates an element level token where only the _ design key is allowed.

Usage:

    ```
    const Link = asElementToken({
      Core: {
        _: cxFontSize.Base,
      },
      Theme: {
        _: as(
          cxTextDecoration.Bold,
          cxTextDecoration.Underline,
          cxColor.TextPrimaryInteractive,
        ),
      },
      Meta: meta,
    });
    ```
The above example creates an element token that combines classes in the core & theme domains as well assigns the associated meta data for the token.

* asFluidToken : Creates a token for a component with a fluid design (one in which any design key is allowed).

Explanation: TBD

Usage:

```
TBD 
```

* asTokenGroup : Creates a group of element tokens with shared meta.

Usage:

```
default asTokenGroup(meta)({
  Base: 'text-m-base lg:text-base',
  XXXL: 'text-m-3xl lg:text-3xl',
  XXL: 'text-m-2xl lg:text-2xl',
  XL: 'text-m-xl lg:text-xl',
  L: 'text-m-lg lg:text-lg',
  XS: 'text-m-xs lg:text-xs',
});
```

The above example will apply the same meta to all element tokens.

### Shadowing CXElement tokens

For more information on shadowing CXElement tokens, read [CX Shadow](./CX_Shadow.md)

## Architectural Details

When adding new Element tokens to cx-elements package:

* Add to existing Element if its fits the associated component token or create an new component token with applicable name.

If creating new component token:

* Create a static version of the component.
* Add Relevent metadata.
* Remember to export all.
