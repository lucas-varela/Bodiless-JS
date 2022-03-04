# Using Tailwind system with Bodiless

As discussed in other sections, BodilessJS is preconfigured to use
[TailwindCSS](https://tailwindcss.com) which is utility-first CSS framework.
While this is not strictly required, we highly recommend it to get the most out
of the Bodiless Design System. If you are unfamiliar with Tailwind, you can
learn more from:

- [Tailwind on Github](https://github.com/tailwindcss/tailwindcss)
- [Tailwind Docs](https://tailwindcss.com/docs/what-is-tailwind)

Most of the site's styling can be defined with Tailwind and for the most part,
BodilessJS will defer to Tailwind documentation. The following documentation
is either specific to Bodiless applications of Tailwind or important enough to
call out to help direct to the specific Tailwind documentation or suggested best practices.

## Tailwind Configuration File

Your site's Tailwind configuration file, `site.tailwind.config.js`, can be found in the root
directory of the site or within a package.

Adding custom styling can be done by editing `site.tailwind.config.js`, following [Tailwind's
documentation](https://tailwindcss.com/docs/configuration).

If your site doesn't have a Tailwind configuration file in its root directory, then your site will
use all of Tailwind's default settings as well as packages that include tailwind.  Bodiless has a mechanism that will merge all the tailwind configuration files coming from all packages and produce a single css file.

?> **Important**  If the classes are duplicated in the site and package, SITE's css will always win.

## Determine whether to use Extend vs Replace

Tailwind allows replacing or extending the settings. For the majority of cases you want to
[extend](https://tailwindcss.com/docs/theme/#extending-the-default-theme).  In cases like adding a new margin or padding custom definition 
you want to add this definition to existing set and extend will do this.  If there are cases where you would want to restrict and totally redefine the settings, you would not use extend.  The one suggested case would be colors to restrict the color set so generic tailwind colors are not available and accidentally used.

  ```
  theme: {
    colors: {
      brand_blue: '#004c97',
      brand_lightblue: '#017eb3',
      brand_mediumblue: '#009cde',
    },  
    extend: {
      padding: {
        'custom_xs': '.75rem',
      }      
    }
  ```

## Spacing

Use the (Space Between)[https://tailwindcss.com/docs/space] tailwind feature rather than independent 'padding' and 'margin' when defining spacing options, so that you have consistent units and measures. This is great feature of Tailwind for layout and allows you to add consistent (spacing)[https://tailwindcss.com/docs/customizing-spacing] between all children of an element rather than setting padding or margin on each child.

Third party resource: https://devdojo.com/tnylea/tailwindcss-space-classes

## Pseudo elements

Pseude elements are somewhat of a challenge within tailwind and bodiless so we please read [PseudoElements)[./Pseudoelements] for some recommending patterns for creating pseudo elements.

## Using tailwind classes vs custom defined classes

We highly encourage using default tailwind classes rather than defining custom classes.   That way a dev who knows tailwind won't have to guess what your class means. 

If you do need to add custom classes, use extend so that the default classes are preserved, and give them unambiguous names.

## Use REM

We highly recommend using REM units and setting a base font size of on the html tag so that it's easy to translate rem to px.

## Making Changes with Tailwind

Each time site builder makes a change in tailwind.config.js, she will need to
rerun the build process. This is done in either `npm run start` or
`npm run build` and will generate css that is automatically included for the
site.

!> **Important** for tailwind config changes to be updated, you must restart or
build to see the changes.

## Responsiveness with Tailwind

Tailwind classes control most of the responsiveness behavior of the site and
classes can be prefixed with responsive size.

### Breakpoints

For more information, see [responsive
breakpoints](./Responsiveness#Breakpoints).

### Using Responsive Classes

Every utility class in Tailwind can be applied conditionally at different
breakpoints. For more information, read about
[Tailwind Mobile first](https://tailwindcss.com/docs/responsive-design#mobile-first)
which contains excellent documentation about responsive classes and how to use
them.

## Using Custom CSS

There are cases that TailwindCSS doesn't support or it may be easier to not
rely on Tailwind. This can be achieved by including the css file and referencing
those classes instead of the tailwind classes.  

The custom css files can be included imported either in gatsby-ssr.js file,
within the pages, or within the component that is using them.

?> **Recommendation** is to keep the css file as close to possible to the
component or page it is needed for.

For example:
* css used exclusively for the homepage should be placed in `/src/pages` and
  included it in the `index.tsx`.
* css used for a component should be placed in components folder and included
  with the component.

By doing the above, this custom css will only be loaded for pages that
use the component and help with performance.

?> **Tip** As a site developer it is always good practice to remove css that isn't
being used if updates/changes are being made.

Common usages for using custom css:
* Complex css that generates a specific styling
* classes that that is not available in tailwind.

## Tailwind purge whitelist autodiscovery

Bodiless and Canvasx sites have a mechanism to discover all packages and sites tailwind config files and combine them into one tailwind file during the build.
To utilize you must follow the naming convention as described in the next section.

Tailwind provides ability that if the class is not found in the code base, the css will be purged and thus reduce css bundle.   

### Tailwind configuration for a package

1. Add a site.tailwind.config.js file to the root of the package.

```
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './lib/**/!(*.d).{ts,js,jsx,tsx}',
  ],
  theme: {},
  plugins: [],
};
```

2. Within "files" add '/site.tailwind.config.js' to make sure its exported with the package.

