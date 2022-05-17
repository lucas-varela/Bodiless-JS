import { ComponentOrTag, DesignableComponentsProps, DesignableProps } from '@bodiless/fclasses';

export type AccordionMeta = {
  accordionId: string,
  accordionTitleId: string,
  accordionContentId: string,
};

export type AccordionProviderProps = {
  collapsible?: boolean,
  expanded?: boolean,
  focus?: boolean,
  meta?: AccordionMeta,
};

export type AccordionContextInterface = {
  isCollapsible: boolean,
  isExpanded: boolean,
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
  hasFocus: boolean,
  setFocus: React.Dispatch<React.SetStateAction<boolean>>,
  meta: AccordionMeta,
};

export type AccordionComponents = {
  Wrapper: ComponentOrTag<any>,
  Title: ComponentOrTag<any>,
  Body: ComponentOrTag<any>,
};

export type AccordionProps = DesignableProps<AccordionComponents>;

export type AccordionBaseProps = DesignableComponentsProps<AccordionComponents>;
