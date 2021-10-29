[@bodiless/search](../README.md) › [Globals](../globals.md) › [LunrSearch](lunrsearch.md)

# Class: LunrSearch

Wrapper class for Lunr static site search engine.

## Hierarchy

* **LunrSearch**

## Implements

* [SearchEngineInterface](../interfaces/searchengineinterface.md)

## Index

### Constructors

* [constructor](lunrsearch.md#constructor)

### Properties

* [documents](lunrsearch.md#documents)
* [index](lunrsearch.md#index)
* [indexConfig](lunrsearch.md#indexconfig)
* [name](lunrsearch.md#name)
* [previews](lunrsearch.md#previews)

### Methods

* [addDocuments](lunrsearch.md#adddocuments)
* [createIndex](lunrsearch.md#createindex)
* [createPreview](lunrsearch.md#private-createpreview)
* [exportIndex](lunrsearch.md#exportindex)
* [getEngineName](lunrsearch.md#getenginename)
* [getIndex](lunrsearch.md#getindex)
* [getIndexConfig](lunrsearch.md#getindexconfig)
* [loadIndex](lunrsearch.md#loadindex)
* [loadPreviews](lunrsearch.md#loadpreviews)
* [search](lunrsearch.md#search)
* [setIndexConfig](lunrsearch.md#setindexconfig)

## Constructors

###  constructor

\+ **new LunrSearch**(): *[LunrSearch](lunrsearch.md)*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:33](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L33)*

**Returns:** *[LunrSearch](lunrsearch.md)*

## Properties

###  documents

• **documents**: *[TDocument](../globals.md#tdocument)[]*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:27](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L27)*

___

###  index

• **index**: *Index | null*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:31](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L31)*

___

###  indexConfig

• **indexConfig**: *[TIndexConfig](../globals.md#tindexconfig) | null*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:29](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L29)*

___

###  name

• **name**: *string*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:25](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L25)*

___

###  previews

• **previews**: *object | null*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:33](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L33)*

## Methods

###  addDocuments

▸ **addDocuments**(`doc`: [TDocument](../globals.md#tdocument) | [TDocument](../globals.md#tdocument)[]): *void*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:79](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`doc` | [TDocument](../globals.md#tdocument) &#124; [TDocument](../globals.md#tdocument)[] |

**Returns:** *void*

___

###  createIndex

▸ **createIndex**(): *Index*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:90](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L90)*

Create Lunr search index object with given configures.

**Returns:** *Index*

___

### `Private` createPreview

▸ **createPreview**(): *object*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:131](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L131)*

Create index preview JSON object.

**Returns:** *object*

* \[ **key**: *string*\]: [TPreview](../globals.md#tpreview)

___

###  exportIndex

▸ **exportIndex**(): *string*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:153](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L153)*

Export serialized index.

**Returns:** *string*

___

###  getEngineName

▸ **getEngineName**(): *string*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:71](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L71)*

**Returns:** *string*

___

###  getIndex

▸ **getIndex**(): *null | Index‹›*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:75](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L75)*

**Returns:** *null | Index‹›*

___

###  getIndexConfig

▸ **getIndexConfig**(): *null | object*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:73](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L73)*

**Returns:** *null | object*

___

###  loadIndex

▸ **loadIndex**(`index`: object): *void*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:44](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | object |

**Returns:** *void*

___

###  loadPreviews

▸ **loadPreviews**(`previews`: object): *void*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:48](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`previews` | object |

**Returns:** *void*

___

###  search

▸ **search**(`queryString`: string): *[TSearchResults](../globals.md#tsearchresults)*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:52](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`queryString` | string |

**Returns:** *[TSearchResults](../globals.md#tsearchresults)*

___

###  setIndexConfig

▸ **setIndexConfig**(`conf`: [TIndexConfig](../globals.md#tindexconfig)): *void*

*Defined in [packages/bodiless-search/src/LunrSearch.ts:77](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-search/src/LunrSearch.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`conf` | [TIndexConfig](../globals.md#tindexconfig) |

**Returns:** *void*
