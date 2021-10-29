[@bodiless/core-ui](README.md) › [Globals](globals.md)

# @bodiless/core-ui

## Index

### Type aliases

* [ButtonProps](globals.md#buttonprops)
* [Props](globals.md#props)
* [VariantProps](globals.md#variantprops)

### Variables

* [ContextWrapperDiv](globals.md#const-contextwrapperdiv)
* [FormWrapper](globals.md#const-formwrapper)
* [GroupTitle](globals.md#const-grouptitle)
* [Message](globals.md#const-message)
* [OverlayWrapper](globals.md#const-overlaywrapper)
* [PopupWrapper](globals.md#const-popupwrapper)
* [Toolbar](globals.md#const-toolbar)
* [ToolbarDivider](globals.md#const-toolbardivider)
* [ToolbarRight](globals.md#const-toolbarright)
* [groupClasses](globals.md#const-groupclasses)
* [toolbarClasses](globals.md#const-toolbarclasses)

### Functions

* [Button](globals.md#const-button)
* [ContextMenuGroup](globals.md#const-contextmenugroup)
* [ContextWrapper](globals.md#const-contextwrapper)
* [GlobalContextMenu](globals.md#const-globalcontextmenu)
* [GlobalTooltip](globals.md#const-globaltooltip)
* [LocalContextMenu](globals.md#const-localcontextmenu)
* [LocalTooltip](globals.md#const-localtooltip)
* [PageEditor](globals.md#const-pageeditor)
* [PageOverlay](globals.md#const-pageoverlay)
* [ReactTagsField](globals.md#const-reacttagsfield)
* [WrappedSpinner](globals.md#const-wrappedspinner)

### Object literals

* [ui](globals.md#const-ui)

## Type aliases

###  ButtonProps

Ƭ **ButtonProps**: *object*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:34](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L34)*

#### Type declaration:

* **onClick**(): *function*

  * (): *void*

___

###  Props

Ƭ **Props**: *object*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:52](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L52)*

#### Type declaration:

* **overlay**: *ReactNode | function*

___

###  VariantProps

Ƭ **VariantProps**: *object*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:25](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/ContextWrapper.tsx#L25)*

#### Type declaration:

* **isActive**? : *undefined | false | true*

## Variables

### `Const` ContextWrapperDiv

• **ContextWrapperDiv**: *any* = flow(
  withoutProps<VariantProps>(['isActive']),
)(Div)

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:29](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/ContextWrapper.tsx#L29)*

___

### `Const` FormWrapper

• **FormWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses('bl-flex')(Div)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:46](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L46)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:93](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L93)*

___

### `Const` GroupTitle

• **GroupTitle**: *ComponentClass‹object, any› | FunctionComponent‹object›* = flow(
  removeClasses('bl-mb-grid-2 bl-min-w-xl-grid-1'),
  addClassesIf(({ index }: any = {}) => Number(index) > 0)('hover:bl-underline bl-cursor-pointer'),
  addClassesIf(({ index }: any = {}) => index === 0)('bl-underline'),
)(ComponentFormTitle) as ComponentType<{ index?: number }>

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:62](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L62)*

___

### `Const` Message

• **Message**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses([
  'bl-text-gray-100 bl-text-center bl-text-lg bl-whitespace-pre-line clear-right',
])(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:53](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L53)*

___

### `Const` OverlayWrapper

• **OverlayWrapper**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  addClasses([
    'bl-p-20', 'bl-py-10', 'bl-w-full', 'bl-h-full', 'bl-fixed', 'bl-top-0', 'bl-z-max',
    'bl-flex', 'bl-flex-col', 'bl-justify-center', 'bl-items-center', 'bl-bg-black-transparent',
  ]),
  addProps({
    id: 'page-overlay',
  }),
)(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:22](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L22)*

___

### `Const` PopupWrapper

• **PopupWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses('bl-p-5 bl-rounded bl-bg-black')(Div)

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:32](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L32)*

___

### `Const` Toolbar

• **Toolbar**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  addClasses(toolbarClasses),
  addProps({ role: 'toolbar', 'aria-label': 'Local Context Menu' }),
)(Div)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:35](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L35)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:47](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L47)*

___

### `Const` ToolbarDivider

• **ToolbarDivider**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-bg-gray bl-w-grid-12 bl--ml-grid-2 bl-mb-grid-3 bl-h-px',
)(Hr)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:48](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L48)*

___

### `Const` ToolbarRight

• **ToolbarRight**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  addClasses('bl-right-grid-0'),
  removeClasses('bl-left-grid-0'),
  addProps({ 'aria-label': 'Global Context Menu Right' }),
)(Toolbar)

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:40](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L40)*

___

### `Const` groupClasses

• **groupClasses**: *"bl-px-3"* = "bl-px-3"

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:40](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L40)*

___

### `Const` toolbarClasses

• **toolbarClasses**: *"bl-flex bl-divide-x rtl:bl-divide-x-reverse bl-divide-white"* = "bl-flex bl-divide-x rtl:bl-divide-x-reverse bl-divide-white"

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:39](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L39)*

## Functions

### `Const` Button

▸ **Button**(`props`: [ButtonProps](globals.md#buttonprops)): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:38](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [ButtonProps](globals.md#buttonprops) |

**Returns:** *Element‹›*

___

### `Const` ContextMenuGroup

▸ **ContextMenuGroup**(`__namedParameters`: object): *null | Element‹›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:68](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L68)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`index` | undefined &#124; number |
`option` | undefined &#124; object |

**Returns:** *null | Element‹›*

___

### `Const` ContextWrapper

▸ **ContextWrapper**(`props`: object & HTMLProps‹HTMLDivElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:37](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/ContextWrapper.tsx#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLDivElement› & object |

**Returns:** *Element‹›*

___

### `Const` GlobalContextMenu

▸ **GlobalContextMenu**(`props`: object & HTMLProps‹HTMLElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:106](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLElement› & object |

**Returns:** *Element‹›*

___

### `Const` GlobalTooltip

▸ **GlobalTooltip**(`props`: TooltipProps): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:52](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | TooltipProps |

**Returns:** *Element‹›*

___

### `Const` LocalContextMenu

▸ **LocalContextMenu**(`props`: object & HTMLProps‹HTMLElement› & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:124](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & HTMLProps‹HTMLElement› & object |

**Returns:** *Element‹›*

___

### `Const` LocalTooltip

▸ **LocalTooltip**(`props`: [Props](globals.md#props)): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:55](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [Props](globals.md#props) |

**Returns:** *Element‹›*

___

### `Const` PageEditor

▸ **PageEditor**(`props`: object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:27](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageEditor.tsx#L27)*

**Parameters:**

▪ **props**: *object*

Name | Type |
------ | ------ |
`children?` | ReactNode &#124; undefined |

**Returns:** *Element‹›*

___

### `Const` PageOverlay

▸ **PageOverlay**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:65](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` ReactTagsField

▸ **ReactTagsField**(`props`: object & object & object): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/ReactTags.tsx:18](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/ReactTags.tsx#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | object & object & object |

**Returns:** *Element‹›*

___

### `Const` WrappedSpinner

▸ **WrappedSpinner**(): *Element‹›*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:48](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L48)*

**Returns:** *Element‹›*

## Object literals

### `Const` ui

### ▪ **ui**: *object*

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:33](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/ContextWrapper.tsx#L33)*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:72](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L72)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:95](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L95)*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:57](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L57)*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:21](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageEditor.tsx#L21)*

###  Button

• **Button**: *[Button](globals.md#const-button)*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:60](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L60)*

###  ComponentFormButton

• **ComponentFormButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:85](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L85)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:105](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L105)*

###  ComponentFormCheckBox

• **ComponentFormCheckBox**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:80](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L80)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:100](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L100)*

###  ComponentFormCloseButton

• **ComponentFormCloseButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:86](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L86)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:106](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L106)*

###  ComponentFormDescription

• **ComponentFormDescription**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:75](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L75)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:111](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L111)*

###  ComponentFormError

• **ComponentFormError**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:89](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L89)*

###  ComponentFormFieldTitle

• **ComponentFormFieldTitle**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:79](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L79)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:99](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L99)*

###  ComponentFormFieldWrapper

• **ComponentFormFieldWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:78](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L78)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:98](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L98)*

###  ComponentFormLabel

• **ComponentFormLabel**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:74](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L74)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:110](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L110)*

###  ComponentFormLink

• **ComponentFormLink**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:91](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L91)*

###  ComponentFormList

• **ComponentFormList**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:92](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L92)*

###  ComponentFormListItem

• **ComponentFormListItem**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:93](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L93)*

###  ComponentFormOption

• **ComponentFormOption**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:84](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L84)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:104](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L104)*

###  ComponentFormRadio

• **ComponentFormRadio**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:81](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L81)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:101](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L101)*

###  ComponentFormRadioGroup

• **ComponentFormRadioGroup**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:82](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L82)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:102](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L102)*

###  ComponentFormSelect

• **ComponentFormSelect**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:83](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L83)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:103](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L103)*

###  ComponentFormSubmitButton

• **ComponentFormSubmitButton**: *function*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:87](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L87)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:108](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L108)*

#### Type declaration:

▸ (`props`: HTMLProps‹HTMLButtonElement›): *Element*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLButtonElement› |

###  ComponentFormText

• **ComponentFormText**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:76](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L76)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:96](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L96)*

###  ComponentFormTextArea

• **ComponentFormTextArea**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:77](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L77)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:97](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L97)*

###  ComponentFormTitle

• **ComponentFormTitle**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:73](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L73)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:109](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L109)*

###  ComponentFormUnwrapButton

• **ComponentFormUnwrapButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:88](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L88)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:107](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L107)*

###  ComponentFormWarning

• **ComponentFormWarning**: *any*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:90](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L90)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:113](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L113)*

###  ContextMenuGroup

• **ContextMenuGroup**: *FunctionComponent‹object›*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:121](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L121)*

###  ContextSubMenu

• **ContextSubMenu**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:95](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L95)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:112](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L112)*

###  ContextWrapper

• **ContextWrapper**: *any* = ContextWrapperDiv

*Defined in [packages/bodiless-core-ui/src/ContextWrapper.tsx:34](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/ContextWrapper.tsx#L34)*

###  FormWrapper

• **FormWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:101](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L101)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:118](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L118)*

###  GlobalContextMenu

• **GlobalContextMenu**: *FunctionComponent‹object & HTMLProps‹HTMLElement››*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:23](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageEditor.tsx#L23)*

###  HorizontalToolbarButton

• **HorizontalToolbarButton**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:98](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L98)*

###  Icon

• **Icon**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = ToolbarIcon

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:94](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L94)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:114](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L114)*

###  LocalContextMenu

• **LocalContextMenu**: *FunctionComponent‹object & HTMLProps‹HTMLElement››*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:22](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageEditor.tsx#L22)*

###  Message

• **Message**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:62](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L62)*

###  OverlayWrapper

• **OverlayWrapper**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:58](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L58)*

###  PageOverlay

• **PageOverlay**: *[PageOverlay](globals.md#const-pageoverlay)*

*Defined in [packages/bodiless-core-ui/src/PageEditor.tsx:24](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageEditor.tsx#L24)*

###  PopupWrapper

• **PopupWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:59](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L59)*

###  ReactTags

• **ReactTags**: *ComponentClass‹object & object, any› | FunctionComponent‹object & object›* = ReactTagsField

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:103](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L103)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:120](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L120)*

###  Spinner

• **Spinner**: *[WrappedSpinner](globals.md#const-wrappedspinner)* = WrappedSpinner

*Defined in [packages/bodiless-core-ui/src/PageOverlay.tsx:61](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/PageOverlay.tsx#L61)*

###  Toolbar

• **Toolbar**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:96](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L96)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:115](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L115)*

###  ToolbarButton

• **ToolbarButton**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = HorizontalToolbarButton

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:97](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L97)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:116](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L116)*

###  ToolbarButtonLabel

• **ToolbarButtonLabel**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:99](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L99)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:117](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L117)*

###  ToolbarDivider

• **ToolbarDivider**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object*

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:100](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L100)*

###  Tooltip

• **Tooltip**: *FunctionComponent‹object›* = LocalTooltip

*Defined in [packages/bodiless-core-ui/src/GlobalContextMenu.tsx:102](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/GlobalContextMenu.tsx#L102)*

*Defined in [packages/bodiless-core-ui/src/LocalContextMenu.tsx:119](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-core-ui/src/LocalContextMenu.tsx#L119)*
