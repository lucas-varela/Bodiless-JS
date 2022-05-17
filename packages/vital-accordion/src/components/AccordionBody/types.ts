import { ComponentOrTag, DesignableComponentsProps, DesignableProps } from '@bodiless/fclasses';

export type AccordionBodyComponents = {
  Wrapper: ComponentOrTag<any>,
  Content: ComponentOrTag<any>,
};

export type AccordionBodyProps = DesignableProps<AccordionBodyComponents>;

export type AccordionBodyBaseProps = DesignableComponentsProps<AccordionBodyComponents>;
