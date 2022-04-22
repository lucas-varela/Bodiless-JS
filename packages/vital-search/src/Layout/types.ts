import { ComponentType } from 'react';
import { DesignableComponentsProps } from '@bodiless/fclasses';

export type SearchLayoutComponents = {
  Wrapper: ComponentType<any>;
  Header: ComponentType<any>;
  Box: ComponentType<any>;
  Result: ComponentType<any>;
  Suggestions: ComponentType<any>;
};

export type SearchLayoutProps = DesignableComponentsProps<SearchLayoutComponents>;
