[@bodiless/ui](README.md) › [Globals](globals.md)

# @bodiless/ui

## Index

### Interfaces

* [SpipperProps](interfaces/spipperprops.md)

### Variables

* [Anchor](globals.md#const-anchor)
* [BarsCount](globals.md#const-barscount)
* [Button](globals.md#const-button)
* [CheckBox](globals.md#const-checkbox)
* [ComponentFormButton](globals.md#const-componentformbutton)
* [ComponentFormCheckBox](globals.md#const-componentformcheckbox)
* [ComponentFormCloseButton](globals.md#const-componentformclosebutton)
* [ComponentFormDescription](globals.md#const-componentformdescription)
* [ComponentFormError](globals.md#const-componentformerror)
* [ComponentFormFieldTitle](globals.md#const-componentformfieldtitle)
* [ComponentFormFieldWrapper](globals.md#const-componentformfieldwrapper)
* [ComponentFormLabel](globals.md#const-componentformlabel)
* [ComponentFormLink](globals.md#const-componentformlink)
* [ComponentFormList](globals.md#const-componentformlist)
* [ComponentFormListItem](globals.md#const-componentformlistitem)
* [ComponentFormOption](globals.md#const-componentformoption)
* [ComponentFormRadio](globals.md#const-componentformradio)
* [ComponentFormRadioGroup](globals.md#const-componentformradiogroup)
* [ComponentFormSelect](globals.md#const-componentformselect)
* [ComponentFormText](globals.md#const-componentformtext)
* [ComponentFormTextArea](globals.md#const-componentformtextarea)
* [ComponentFormTitle](globals.md#const-componentformtitle)
* [ComponentFormUnwrapButton](globals.md#const-componentformunwrapbutton)
* [ComponentFormWarning](globals.md#const-componentformwarning)
* [ContextSubMenu](globals.md#const-contextsubmenu)
* [Div](globals.md#const-div)
* [Form](globals.md#const-form)
* [HorizontalToolbarButton](globals.md#const-horizontaltoolbarbutton)
* [Hr](globals.md#const-hr)
* [Icon](globals.md#const-icon)
* [Img](globals.md#const-img)
* [Input](globals.md#const-input)
* [Label](globals.md#const-label)
* [MaxDegrees](globals.md#const-maxdegrees)
* [Option](globals.md#const-option)
* [Radio](globals.md#const-radio)
* [RadioGroup](globals.md#const-radiogroup)
* [ResizeHandle](globals.md#const-resizehandle)
* [ResizeHandleBar](globals.md#const-resizehandlebar)
* [ResizeHandleRTL](globals.md#const-resizehandlertl)
* [Select](globals.md#const-select)
* [Span](globals.md#const-span)
* [Text](globals.md#const-text)
* [TextArea](globals.md#const-textarea)
* [Title](globals.md#const-title)
* [ToolbarButton](globals.md#const-toolbarbutton)
* [ToolbarButtonLabel](globals.md#const-toolbarbuttonlabel)
* [ToolbarIcon](globals.md#const-toolbaricon)
* [Warning](globals.md#const-warning)

### Functions

* [ComponentFormSpinner](globals.md#const-componentformspinner)
* [ComponentFormSubmitButton](globals.md#const-componentformsubmitbutton)
* [Spinner](globals.md#const-spinner)
* [SubmitButton](globals.md#const-submitbutton)
* [isDisabled](globals.md#const-isdisabled)

## Variables

### `Const` Anchor

• **Anchor**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLAnchorElement>>('a')

*Defined in [packages/bodiless-ui/src/elements.tsx:54](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L54)*

___

### `Const` BarsCount

• **BarsCount**: *12* = 12

*Defined in [packages/bodiless-ui/src/Spinner.tsx:18](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/Spinner.tsx#L18)*

___

### `Const` Button

• **Button**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLButtonElement>>('button')

*Defined in [packages/bodiless-ui/src/elements.tsx:44](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L44)*

___

### `Const` CheckBox

• **CheckBox**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<FieldProps<any, any>>(BaseCheckBox)

*Defined in [packages/bodiless-ui/src/elements.tsx:51](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L51)*

___

### `Const` ComponentFormButton

• **ComponentFormButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-text-gray-200 bl-cursor-pointer hover:bl-text-green',
)(Button)

*Defined in [packages/bodiless-ui/src/elements.tsx:120](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L120)*

___

### `Const` ComponentFormCheckBox

• **ComponentFormCheckBox**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-mr-grid-2 bl-mb-grid-2 align-baseline',
)(CheckBox)

*Defined in [packages/bodiless-ui/src/elements.tsx:109](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L109)*

___

### `Const` ComponentFormCloseButton

• **ComponentFormCloseButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = flow(
  addClasses('hover:bl-text-red bl-float-right'),
  removeClasses('hover:bl-text-green'),
  withChild(() => <Icon>cancel</Icon>),
)(ComponentFormButton)

*Defined in [packages/bodiless-ui/src/elements.tsx:128](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L128)*

___

### `Const` ComponentFormDescription

• **ComponentFormDescription**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-text-xs bl-text-gray-100 bl-block bl-mb-grid-2 bl-max-w-xl-grid-1',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:77](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L77)*

___

### `Const` ComponentFormError

• **ComponentFormError**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-block bl-italic',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:142](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L142)*

___

### `Const` ComponentFormFieldTitle

• **ComponentFormFieldTitle**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-mb-grid-2 bl-font-bold bl-text-gray-100',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:73](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L73)*

___

### `Const` ComponentFormFieldWrapper

• **ComponentFormFieldWrapper**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-mb-grid-3 bl-w-full',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:69](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L69)*

___

### `Const` ComponentFormLabel

• **ComponentFormLabel**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-text-xs bl-text-gray-100 bl-block',
)(Label)

*Defined in [packages/bodiless-ui/src/elements.tsx:89](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L89)*

___

### `Const` ComponentFormLink

• **ComponentFormLink**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  addClasses('bl-cursor-pointer bl-text-xs bl-block bl-underline'),
  addClassesIf(isDisabled)('bl-text-gray-600'),
  removeClassesIf(isDisabled)('bl-cursor-pointer bl-text-gray-100 '),
)(Anchor)

*Defined in [packages/bodiless-ui/src/elements.tsx:209](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L209)*

___

### `Const` ComponentFormList

• **ComponentFormList**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'list-none bl-max-h-xl-grid-1 bl-overflow-y-scroll',
)(Ul)

*Defined in [packages/bodiless-ui/src/elements.tsx:85](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L85)*

___

### `Const` ComponentFormListItem

• **ComponentFormListItem**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'first:bl-border-t-0 bl-border-t bl-py-grid-1 bl-px-grid-1 bl-max-w-xl-grid-1',
)(Li)

*Defined in [packages/bodiless-ui/src/elements.tsx:81](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L81)*

___

### `Const` ComponentFormOption

• **ComponentFormOption**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = Option

*Defined in [packages/bodiless-ui/src/elements.tsx:118](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L118)*

___

### `Const` ComponentFormRadio

• **ComponentFormRadio**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-mr-grid-2 bl-mb-grid-2 align-baseline',
)(Radio)

*Defined in [packages/bodiless-ui/src/elements.tsx:105](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L105)*

___

### `Const` ComponentFormRadioGroup

• **ComponentFormRadioGroup**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-mb-grid-2',
)(RadioGroup)

*Defined in [packages/bodiless-ui/src/elements.tsx:101](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L101)*

___

### `Const` ComponentFormSelect

• **ComponentFormSelect**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  `bl-text-gray-900 bl-bg-gray-100 bl-text-xs bl-w-full
  bl-min-w-xl-grid-1 bl-block bl-my-grid-2 bl-p-grid-1`,
)(Select)

*Defined in [packages/bodiless-ui/src/elements.tsx:113](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L113)*

___

### `Const` ComponentFormText

• **ComponentFormText**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-text-gray-900 bl-bg-gray-100 bl-text-xs bl-w-full bl-min-w-xl-grid-1 bl-block bl-my-grid-2 bl-p-grid-1',
)(Text)

*Defined in [packages/bodiless-ui/src/elements.tsx:93](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L93)*

___

### `Const` ComponentFormTextArea

• **ComponentFormTextArea**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-resize bl-text-gray-900 bl-bg-gray-100 bl-text-xs bl-w-full bl-min-w-xl-grid-1 bl-min-h-grid-16 bl-block bl-my-grid-2 bl-p-grid-1',
)(TextArea)

*Defined in [packages/bodiless-ui/src/elements.tsx:97](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L97)*

___

### `Const` ComponentFormTitle

• **ComponentFormTitle**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-text-lg bl-font-bold bl-text-gray-100 bl-block bl-mb-grid-2 bl-min-w-xl-grid-1',
)(Title)

*Defined in [packages/bodiless-ui/src/elements.tsx:65](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L65)*

___

### `Const` ComponentFormUnwrapButton

• **ComponentFormUnwrapButton**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-absolute bl-bottom-0 bl-left-0 bl-mb-5 bl-ml-3 bl-cursor-pointer bl-underline',
)(Button)

*Defined in [packages/bodiless-ui/src/elements.tsx:124](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L124)*

___

### `Const` ComponentFormWarning

• **ComponentFormWarning**: *any* = flow(
  addClasses('bl-float-left bl-flex bl-items-center'),
)(({ children, ...rest }: any) => (
  <Div {...rest}>
    <Warning />
    {children}
  </Div>
))

*Defined in [packages/bodiless-ui/src/elements.tsx:199](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L199)*

___

### `Const` ContextSubMenu

• **ContextSubMenu**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  addClasses('bl-flex bl-text-white'),
  addProps({ role: 'toolbar', 'aria-label': 'Submenu' }),
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:188](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L188)*

___

### `Const` Div

• **Div**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLDivElement>>('div')

*Defined in [packages/bodiless-ui/src/elements.tsx:42](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L42)*

___

### `Const` Form

• **Form**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLFormElement>>('form')

*Defined in [packages/bodiless-ui/src/elements.tsx:46](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L46)*

___

### `Const` HorizontalToolbarButton

• **HorizontalToolbarButton**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  removeClasses('bl-mb-3'),
  addClasses('bl-mr-grid-2 last:bl-mr-grid-0'),
)(ToolbarButton)

*Defined in [packages/bodiless-ui/src/elements.tsx:165](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L165)*

___

### `Const` Hr

• **Hr**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLHRElement>>('hr')

*Defined in [packages/bodiless-ui/src/elements.tsx:45](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L45)*

___

### `Const` Icon

• **Icon**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  addClasses('bl-p-grid-1 material-icons'),
  withoutProps<ButtonVariantProps>(['isActive']),
  flowIf(hasProp('isActive'))(
    addClasses('bl-bg-primary bl-rounded'),
  ),
  addProps({ 'aria-hidden': true }),
)(Span)

*Defined in [packages/bodiless-ui/src/elements.tsx:56](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L56)*

___

### `Const` Img

• **Img**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLImageElement>>('img')

*Defined in [packages/bodiless-ui/src/elements.tsx:40](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L40)*

___

### `Const` Input

• **Input**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLInputElement>>('input')

*Defined in [packages/bodiless-ui/src/elements.tsx:41](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L41)*

___

### `Const` Label

• **Label**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLLabelElement>>('label')

*Defined in [packages/bodiless-ui/src/elements.tsx:39](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L39)*

___

### `Const` MaxDegrees

• **MaxDegrees**: *360* = 360

*Defined in [packages/bodiless-ui/src/Spinner.tsx:19](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/Spinner.tsx#L19)*

___

### `Const` Option

• **Option**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<ChildFieldProps<any, any>>(BaseOption)

*Defined in [packages/bodiless-ui/src/elements.tsx:53](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L53)*

___

### `Const` Radio

• **Radio**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<ChildFieldProps<any, any>>(BaseRadio)

*Defined in [packages/bodiless-ui/src/elements.tsx:50](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L50)*

___

### `Const` RadioGroup

• **RadioGroup**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<FieldProps<any, any>>(BaseRadioGroup)

*Defined in [packages/bodiless-ui/src/elements.tsx:49](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L49)*

___

### `Const` ResizeHandle

• **ResizeHandle**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = flow(
  addClasses(
    'bl-flex bl-justify-center bl-w-5 bl-right-rem-1 bl-z-1 bl-h-three-quarters bl-relative bl-top-half bl-transform bl--translate-y-1/2',
  ),
  withChild(() => <ResizeHandleBar />),
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:176](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L176)*

___

### `Const` ResizeHandleBar

• **ResizeHandleBar**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses(
  'bl-resizable-handle bl-border-solid bl-border-l-2 bl-border-primary bl-h-full',
)(Div)

*Defined in [packages/bodiless-ui/src/elements.tsx:172](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L172)*

___

### `Const` ResizeHandleRTL

• **ResizeHandleRTL**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  addClasses('bl-left-rem-1'),
  removeClasses('bl-right-rem-1'),
)(ResizeHandle)

*Defined in [packages/bodiless-ui/src/elements.tsx:183](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L183)*

___

### `Const` Select

• **Select**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<SelectFieldProps<any, any>>(BaseSelect)

*Defined in [packages/bodiless-ui/src/elements.tsx:52](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L52)*

___

### `Const` Span

• **Span**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLSpanElement>>('span')

*Defined in [packages/bodiless-ui/src/elements.tsx:43](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L43)*

___

### `Const` Text

• **Text**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<FieldProps<any, any>>(BaseText)

*Defined in [packages/bodiless-ui/src/elements.tsx:47](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L47)*

___

### `Const` TextArea

• **TextArea**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<FieldProps<any, any>>(BaseTextArea)

*Defined in [packages/bodiless-ui/src/elements.tsx:48](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L48)*

___

### `Const` Title

• **Title**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = stylable<HTMLProps<HTMLHeadingElement>>('h3')

*Defined in [packages/bodiless-ui/src/elements.tsx:38](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L38)*

___

### `Const` ToolbarButton

• **ToolbarButton**: *any* = flow(
  withoutProps<ButtonVariantProps>(['isActive', 'isFirst', 'isDisabled']),
  addClasses('bl-cursor-pointer bl-mb-3 bl-flex bl-flex-col bl-items-center'),
  flowIf(hasProp('isDisabled'))(
    asToken(
      addClasses('bl-text-gray-600'),
      removeClasses('bl-text-gray-200'),
    ),
  ),
  addProps({ type: 'button' }),
)(Button)

*Defined in [packages/bodiless-ui/src/elements.tsx:153](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L153)*

___

### `Const` ToolbarButtonLabel

• **ToolbarButtonLabel**: *ComponentClass‹object & object, any› & object | FunctionComponent‹object & object› & object* = addClasses('bl-text-center bl-text-base')(Span)

*Defined in [packages/bodiless-ui/src/elements.tsx:170](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L170)*

___

### `Const` ToolbarIcon

• **ToolbarIcon**: *ComponentClass‹object, any› & object | FunctionComponent‹object› & object* = flow(
  removeClasses('bl-p-grid-1'),
  addClasses('bl-w-grid-8 bl-h-grid-8 md-36'),
)(Icon)

*Defined in [packages/bodiless-ui/src/elements.tsx:148](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L148)*

___

### `Const` Warning

• **Warning**: *any* = flow(
  addClasses('bl-w-grid-7 bl-text-yellow-500'),
)((props: JSX.IntrinsicAttributes) => (
  <Icon {...props}>report_problem_outlined</Icon>
))

*Defined in [packages/bodiless-ui/src/elements.tsx:193](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L193)*

## Functions

### `Const` ComponentFormSpinner

▸ **ComponentFormSpinner**(): *Element‹›*

*Defined in [packages/bodiless-ui/src/Spinner.tsx:44](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/Spinner.tsx#L44)*

**Returns:** *Element‹›*

___

### `Const` ComponentFormSubmitButton

▸ **ComponentFormSubmitButton**(`props`: HTMLProps‹HTMLButtonElement›): *Element‹›*

*Defined in [packages/bodiless-ui/src/elements.tsx:134](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLButtonElement› |

**Returns:** *Element‹›*

___

### `Const` Spinner

▸ **Spinner**(`props`: any): *Element‹›*

*Defined in [packages/bodiless-ui/src/Spinner.tsx:25](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/Spinner.tsx#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *Element‹›*

___

### `Const` SubmitButton

▸ **SubmitButton**(`props`: HTMLProps‹HTMLButtonElement› & object & object): *Element‹›*

*Defined in [packages/bodiless-ui/src/elements.tsx:146](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | HTMLProps‹HTMLButtonElement› & object & object |

**Returns:** *Element‹›*

___

### `Const` isDisabled

▸ **isDisabled**(`props`: any): *boolean*

*Defined in [packages/bodiless-ui/src/elements.tsx:208](https://github.com/lucas-varela/Bodiless-JS/blob/c57f63f7/packages/bodiless-ui/src/elements.tsx#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | any |

**Returns:** *boolean*
