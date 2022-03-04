# Pseudo Elements

Pseudo elements are somewhat of a challenge within tailwind and bodiless so the following are some examples.

For links, we highly recommend any icons added to links to be implemented as pseudo elements.  This helps accessibility with links and doesn't interfere with the bodiless editor link functionality in edit mode.

A pseudoeleement class can be defined in packages/sites tailwind.config.js file utilizing the Tailwind's plugin's (addUtilities)[https://tailwindcss.com/docs/plugins#adding-utilities] funcitonality

The following example defines the cx-external::after with (self hosted icon font)[./Fonts/#Via-Hosted], content and addition styling.
To use, apply cx-external-link to any token.

In this instance, we chose to use an small self hosted icomoon font so the icon can easily be recolored and grow with text size.   Images could be used as well and set via background image.

excert from site.tailwind.config.js module.exports = {} section.
```
 plugin(({ addUtilities }) => {
      addUtilities(
        {
          '.cx-external-link::after': {
            content: '"\\e801"',
            'font-family': '"linkicons"',
            'font-style': 'normal',
            'line-height': '1rem',
            'text-decoration': 'none',
            'text-transform': 'none',
            'vertical-align': 'text-top',
            'margin-left': '.25rem',
            display: 'inline-block',
          },
        }
      );
    }),
 ```

Here is another example where transform a breadcrumb separator that is switches between before or after depending html direction.
The class breadcrumb-list-item is applied to the token.


Consts are defined above module.exports.
          ```
          const listItemAfter = {
            'content': '""',
            'position': 'absolute',
            'width': '0',
            'height': '0',
            'right': '0',
            'top': '0',
            'border-top': '17px solid #fff',
            'border-bottom': '17px solid #fff',
            'border-left': '14px solid transparent',
          };

          const listItemBefore = {
            'content': '""',
            'position': 'absolute',
            'height': '0',
            'width': '0',
            'left': '-1px',
            'top': '0',
            'border-top': '17px solid transparent',
            'border-bottom': '17px solid transparent',
            'border-left': '14px solid #fff',
          };
          ```          

excert from site.tailwind.config.js module.exports = {} section.
          ```
          plugin(({ addUtilities }) => {
            addUtilities(
              {
                'html[dir="rtl"] .breadcrumb-list-item::after': {
                  ...listItemBefore,
                  transform: 'rotate(180deg)',
                },
                'html[dir="rtl"] .breadcrumb-list-item::before': {
                  ...listItemAfter,
                  transform: 'rotate(180deg)',
                  right: 'auto',
                },
           );
          }),
    ```