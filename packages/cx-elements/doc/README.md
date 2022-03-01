# CanvasX Elements

CanvasX Elements is composed of (element tokens)[https://johnsonandjohnson.github.io/Bodiless-JS/#/Design/DesignSystem?id=element-tokens] to implement the CanvasX design system.

It consists of the following type of Elements and all are in the associated tokens files:
* Color
* Font Decoratio
* Fonts
* Font Size
* Layout
* Typography.

## Content Editor Details

There is no interaction by the Content Editor with the CanvasX Elements itself, only with tokens once composed into components.

## Site Builder Details

### CXElement tokens
The site builder has ability to use any of the token CanvasX elements.

Usage:

import cxElements from @bodiless/cx-elements

If singular token being is used:
```
Header1: cxElement.H1,
```

Or wrap within as() or flowHOC if combining multiple tokens

```
    HTMLHelmet: as(
      cxElement.DMSans,
      cxElement.WithTextPrimaryBodyCopyColor,
    ),
```

### Helper utilities

The package also includes some helper tokens that are very useful in token composition:
asCxTokenSpec
asMetaToken
asElementToken
asFluidToken
asTokenGroup

### Shadowing
TBD

## Architectural Details

None unless shadowing falls here instead of Site Builder.