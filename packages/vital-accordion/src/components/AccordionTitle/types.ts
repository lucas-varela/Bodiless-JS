import { ComponentOrTag, DesignableComponentsProps, DesignableProps } from '@bodiless/fclasses';

export type AccordionTitleComponents = {
  Wrapper: ComponentOrTag<any>,
  Label: ComponentOrTag<any>,
  Icon: ComponentOrTag<any>,
  OpenIcon: ComponentOrTag<any>,
  CloseIcon: ComponentOrTag<any>,
};

export type AccordionTitleProps = DesignableProps<AccordionTitleComponents>;

export type AccordionTitleBaseProps = DesignableComponentsProps<AccordionTitleComponents>;
