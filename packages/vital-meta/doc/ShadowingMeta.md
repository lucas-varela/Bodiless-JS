# Shadowing Meta

Define a Shadowing token collection as defined in [Shadow](../VitalElements/Shadow).

File to shadow: `/packages/PACKAGENAME/src/shadow/vital-meta/MetaHelmet.js`

Shadowing the SEO or Share component method is dependent of if you want to add fields to end of form or if you want to control the order of the fields (i.e. you want an additional field in the middle.)   

## Defining new meta data fields

`asSimpleMetaFieldToken` is a token that you can compose a new field using `withMeta`

```js
const WithMetaKeywords = asSimpleMetaFieldToken(withMeta({
  // Meta Data name that will render i.e. <meta name="keywords" ... >
  name: 'keywords',
  // Label on Form
  label: 'Keywords'
  // Placerholder value on form to give best practices to Content Editor,
  placeholder: 'No more than 10 keyword phrases',
})('page-keywords')); // page-keywords is the node key that will be used.

const WithTwitterDescription = asSimpleMetaFieldToken(withMeta({
  // Meta Data name that will render i.e. <meta name="twitter:description" ... >  
  name: 'twitter:description',
  // Label on Form
  label: 'Twitter Description',
})('twitter-description')); // twitter-description is the node key that will be used.
```

## Method to shadow if you want to just add a new field at beginning or end:

If you place the new field before vitalMetaHelmetBase.SEO.Compose, it will place the new field at end of the form.
If you place the new field after vitalMetaHelmetBase.SEO.Compose, it will place the new field at beginning of the form.

```
const SEO = asElementToken({
  ...vitalMetaHelmetBase.SEO,
  Compose: {
    WithMetaKeywords,
    ...vitalMetaHelmetBase.SEO.Compose,
  },
});

export default {
  ...vitalMetaHelmetBase,
  SEO,
};
```


## Method to shadow if want to control the order of the fields:

All field tokens are exposed to the Site Builder if you wish to recompose the form and customize what fields your site will use for sharing.

TIP: As you compose the token you will to do it in reverse order of the order of fields on form as they appear.

```js

const Share = asElementToken({
  ...vitalMetaHelmetBase.Share,
  Compose: {
    WithUTMCampaign,
    WithSiteName,
    WithTwitterCard,
    WithShareType,
    WithTwitterDescription, // Added in the middle of the form.
    WithTwitterTitle,
    WithUTMContent,
    WithShareDescription,
    WithShareUrl,
    WithShareImage,
    WithShareTitle,
  },
});
```
