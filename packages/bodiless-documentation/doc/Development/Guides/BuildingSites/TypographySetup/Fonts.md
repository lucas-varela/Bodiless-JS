# Fonts

Custom fonts can be used on a Bodiless site and here are some suggested ways to
add and use them.  

?> TIP Performance-wise the best recommendation is to self hosts the fonts.

## Adding Fonts to a Bodiless Site

### Via Google Fonts

We recommend using [gatsby-plugin-google-fonts](https://github.com/didierfranc/gatsby-plugin-google-fonts) and it is part of the bodiless but not enabled.

  1. To use in production builds, set `GOOGLE_FONTS_ENABLED` to `1` in your .env.site file.
  
  1. Within in a package's or sites `gatsby-ssr.js` include the appropriate googleapis css file.  

       ```
        export const onRenderBody = (
        { setPostBodyComponents },
      ) => {
        setPostBodyComponents([
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />,
        ]);
      };
       ```

?> Tip We do recommend adding the display of 'swap'  (Google Resource)[https://developers.google.com/web/updates/2016/02/font-display#swap] and this &display=swap at end for performance boost.

### Via Hosted

We recommend loading in the gatsby-ssr.js to skip hydration and add in the post body.  This will help with performance. 

  1. Within in a package's or sites `gatsby-ssr.js` include the appropriate vendor's css file.  

    ```
        export const onRenderBody = (
        { setPostBodyComponents },
      ) => {
        setPostBodyComponents([
    <style
      dangerouslySetInnerHTML={{
      __html: `@import url('https://use.typekit.net/xkg0dss.css');`,
      }}
    />,
    ```

?> Tip If the service offers display option of 'swap' please enble for a performance boost. This may be within the service and/or optional paramter if available.

### Via Typefaces

* Using [Open Source Typefaces npm packages](https://github.com/KyleAMathews/typefaces) built by others
  * Follow directions for the package to install and use.

### Hosted Directly

This is best way as fonts are usually small and packaged within the webbundle of the site and best performance option.

1. In your brand package, suggested brand-elements package, create a folder assets/font and place the fonts.  
1. In your packages, site.tailwind.config.js file add plugin font-face via addBase to import the fonts.
1. In the package.json, make sure your files section exports the assets so they are bundled with the package.  eg. `"files": ["/assets"]`
1. Extend fontFamily in your to include the font.
1. Use the new font by using the prefix and name of the font you defined.  (eg. font-linkicons)

```
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './lib/**/!(*.d).{ts,js,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        linkicons: ['linkicons'],
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        '@font-face': {
          fontFamily: 'linkicons',
          fontWeight: 400,
          fontStyle: 'normal',
          src: 'url(\'@bodiless/cx-link/assets/font/linkicons.woff2\')',
        },
      });
    }),
  ],
};
```

?> Tip: Suggest to primarily use WOFF2:
Of the modern font fonts, WOFF2 is the newest, has the widest browser support, and offers the best compression. Because it uses Brotli, WOFF2 compresses 30% better than WOFF.

## Applying a font

* Once the fonts are available via one of the methods above, they can be applied in one of two ways:

### Applying a font to entire site

View [Typography/Applying Classes to entire site](./Typography.md#applying-classes-to-entire-site) for instructions.

### Applying a font to specific token

* The fonts can be added at elemental level by adding classes to the specific
  token.

  ```
  const asHeader1 = asElementToken('text-3xl font-linkicons')
  ```
