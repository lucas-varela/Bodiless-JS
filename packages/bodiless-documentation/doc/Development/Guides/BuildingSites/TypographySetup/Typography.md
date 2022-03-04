# Typography

The typography of starts with the defining the font, font size, line-heights with package/site's site.tailwind.confg.js.  


## CanvasX Elements

The cavnasx-elements package provides opinionated typography that can be used as is or if need parts can be overridden by the site.

For more infomation of specific details of typography is best to review (cx-elements)[link to package code]

If you plan on leveraging other CanvasX components, we recommend leveraging all or parts of Canvasx-elements.

For more details on usage, please follow the (CanvasX Elements Typography Guide)[LINK].

## Developing your Typography with Leveraging CanvasX Elements

The following section defines a high level overview of defining your typography.  For best practices, we do recommend following patterns see in cx-elements package.

### Font Sizes & Line heights

If your site is defining custom font sizes and line-heights, these are set within the package/site's site.tailwind.confg.js.

?> **TIP**   Tailwind provides ability to specify font sizes with default line-height and this simplifies the process:
https://tailwindcss.com/docs/font-size#providing-a-default-line-height  or if your design clals for letter-spacing as well they can all three be defined together as one: https://tailwindcss.com/docs/font-size#providing-a-default-letter-spacing

### Colors

If your site is (defining custom colors)[https://tailwindcss.com/docs/customizing-colors#adding-additional-colors], these are set within the package/site's site.tailwind.confg.js.

### Element Tokens for Headers, Links, Body and other tokens

You can define a custom collection of tokens to use within your site.  

?> **TIP** While you have choice of using the tailwind class or a token, we do recommend if you are reusing a class repeatedly, then make a token for it.  In the future, its quick to change one occurrence than search through files and replace the specific class.

1. Recommend starting an Elements folder in your package and start defining tokens during creation.   Keeping the files small and specific to function/defintion will be better maintainable and easier for others to understand.
2. Tokens can be defined individually or within a group if they share the (meta)[http://localhost:8005/___docs/#/Development/Architecture/FClasses?id=metadata-and-filters].

  ````
  // Individual Element Token
  const H1 = asElementToken('text-xxl, font-bold, text-mycolor1, mb-5 lg:mb-6');

  // Shared Element Token
  export default asTokenGroup(meta)({
    BGMyColor1: 'bg-mycolor1',
    TextMyColor1: 'text-mycolor1',
    BGMyColor2: 'bg-mycolor2',
    TextMyColor2: 'text-mycolor2',  
  });

  ````

### Applying Classes to entire site

If you want to apply the classes to entire site, we recommend the following practice:

1. In /cx-layout/src/components/Helmet/Helmet.token.ts, within asHelmetToken() and in the 
*Theme* Domain, provide the site's font class.  

```
const Default = asHelmetToken({
  Theme: {
    HTMLHelmet: 'font-DMSans font-base text-TestMyColor1',
  }
});


export const cxHelmet = { Default }
```

1. Ensure this Helmet token is applied within your Layout tokens.

````
const Base = asLayoutToken({
  Components: {
    Helmet: as(cxHelmet.Default),
  },
````