import { startWith } from './replaceable';
import {
  TokenDef, // AsToken, 
  DesignableComponents, HocDesign, RequiredDomains, TokenSpec,
  ReservedDomains, Design, TokenX, HOC, HOD,
} from './types';
import { asToken } from './Tokens';
import { addClasses } from './FClasses';
import { withHocDesign } from './withHocDesigh';
import mergeWith from 'lodash/mergeWith';
import flow from 'lodash/flow';
import { ComponentType } from 'react';
import identity from 'lodash/identity';
import { extendMeta } from './Tokens';
// import omit from 'lodash/omit';
import { pick } from 'lodash';


/**
     * @private
     * Converts a domain into an HOC which applies the extended design defined
     * by that domain.  Properly handles special domain names ('Condition',
     * 'Compose' and 'Meta').
     *
     * @param domainName
     * @param domain
     */
function getHocForDomain<C extends DesignableComponents, D extends RequiredDomains = any>(
  domainName: keyof TokenSpec<C, D>,
  domain?: Design<C> | ReservedDomains<C, D>[keyof ReservedDomains<C, D>]
): TokenDef | undefined  {
  if (!domain)
    return undefined;
  if (domainName === 'Flow')
    return undefined;
  if (domainName === 'Meta')
    return Array.isArray(domain) ? extendMeta(...domain) : domain;
  if (domainName === 'Compose') {
    const compose = domain as ReservedDomains<C, D>['Compose'];
    return as(...Object.values(compose));
  }
  return withDesign(domain as Design<C, D>);
}


/**
     * Converts a list of token into an HOC which can be applied to
     * a component. Tokens to apply may be expressed in token object notation, as HOC's
     * or as className strings.
     *
     * @param specs
     * A list of token to be composed.
     *
     * @returns
     * An HOC which can be applied to a component.
     */
function as<D extends RequiredDomains = any>(
  ...args$: TokenX<any, D>[]
  
): HOC<any, any, any> {
  const args = args$.filter(Boolean);
  const tokens: TokenDef[] = args.map(arg => {
    if (typeof arg === 'function' || typeof arg === 'undefined')
      return arg;
    if (typeof arg === 'string')
      return addClasses(arg);
    const specTokens: TokenDef[] = [];
    // Use keys of the base token spec to ensure correct order of domains.
    // const keys = [
    //   ...Object.getOwnPropertyNames(omit(arg, 'Meta', 'Compose', 'Flow')),
    //   'Meta',
    //   'Compose',
    //   'Flow',
    // ];
    const keys = Object.getOwnPropertyNames(arg);
    specTokens.push(...keys
      .map(domainName => getHocForDomain(
        domainName as keyof TokenSpec<any, D>,
        arg[domainName as keyof TokenSpec<any, D>])));

    if (arg.Flow) {
      return arg.Flow(...specTokens);
    }
    return asToken(...specTokens);
  });
  return asToken(...tokens);
}

/**
 * Applies a design to a component.
 *
 * @param design
 * The design to apply.
 *
 * @returns
 * An hoc which applies the design.
 */
function withDesign<C extends DesignableComponents = any, D extends RequiredDomains = any>(
  design: Design<C, D>
): HOC {

  const hocDesign: HocDesign<C> = Object.keys(design)
    .filter(k => k !== '_')
    .reduce(
      (d, k) => ({
        ...d,
        [k]: as(design[k]),
      }),
      {} as HocDesign<any>);
  return asToken(
    as(design._) as HOC,
    withHocDesign(hocDesign)
  );
  // return withHocDesign(hocDesign);
}

/**
     * @private
     * Customizer for merging two token specifications.
     */
const tokenMergeCustomizer = (...args: any) => {
  const stack = args[5];
  const [a, b, key] = args;
  if (stack.size === 0) {
    if (key === 'Meta')
      return extendMeta(a, b);
    if (key === 'Flow') {
      console.log(a, b);
      if (a && b) return flow(a, b);
      else if (a) return a;
      else if (b) return b;
      return identity;
    }
    return undefined;
  }
  if (!a || !b)
    return undefined;
  return as(a, b);
};

/**
     * Utiity to merge two tokens. inner key values are composed together via `t`.
     *
     * @param a, b
     * HocWithMeta specifications to merge.
     *
     * @return
     * A new token specification containing the merged keys.
     *
     * @example
     * ```
     * const asTestTokenSpec = asTokenSpec<{
     *   A: ComponentType<any>,
     *   B: ComponentType<any>,
     * }>();
     * const Left = asTestTokenSpec({
     *   Foo: {
     *     B: 'b',
     *   },
     *   Bar: {@typescript-eslint/space-infix-ops
     *     B: 'b2',
     *   },
     * });
     * const Right = asTestTokenSpec({
     *   Foo: {
     *     B: 'b1',
     *     A: 'a',
     *   },
     *   Baz: {
     *     A: 'a2',
     *   },
     * });
     * const Test = extend(Left, Right);
     * const Expected = asTestTokenSpec({
     *     Foo: {
     *       B: as('b', 'b1'), // Note this will create `className="b1 b"`
     *       A: 'a',
     *     },
     *     Bar: {
     *       B: 'b2',
     *     },
     *     Baz: {
     *       A: 'a2',
     *     },
     * });
     * ```
     */

/**
     * Utility to extend a domain value. The final domain will contain the union of
     * keys from all merged designs. In the case where two or more designs have the
     * same key, the value of that key will be composed using `t`.
     *
     * @param d
     * The base design to be extended.
     *
     * @param ...designs
     * Designs to extend the base design.
     */
function extendDesign<C extends DesignableComponents, D extends RequiredDomains = any>(
  d: Design<C, D> = {} as any,
  ...designs: Design<C, D>[]
): Design<C, D> {
  return mergeWith(d, ...designs, (a: any, b: any) => (a && b ? as(a, b) : undefined));
}

/**
 * Takes a set of designs or HODs and returns a single HOD which extends
 * its argument (a design) with the supplied designs. HODs in the argument
 * list will be converted to designs by invoking them on an empty design.
 * 
 * @param dx
 * List of designs or HODs which will be used as extensons
 *
 * @returns
 * An HOD which will extend the base design with the supplied designs. 
 */
const extendDesignWith = (
  ...dx: (Design|HOD<any, any>)[]
) => (
  d?: Design
) => extendDesign(d, ...dx.map(
  dx$ => (typeof dx$ === 'function' ? dx$() : dx$)
));


/**
     * Utility to apply tokens to a specified clean component.
     *
     * @param CleanComponent
     * The clean starting component to which tokens should be applied.
     *
     * @returns
     * A function which applies tokens to the clean component.
     *
     * @example
     * ```
     * on(FooClean)(cxFoo.Default, 'bar');
     * ```
     * is equivalent to
     * ```
     * as(startWith(FooClean), cxFoo.Default, 'bar');
     * ```
     */
const on = (
  CleanComponent: ComponentType<any>
) => <C extends DesignableComponents, D extends RequiredDomains = any>(
  ...specs: TokenX<C, D>[]
) => as(
    startWith(CleanComponent),
    ...specs);

/**
 * Helper function to improve type inference in token specifications, and to ensure that
 * the order of domains is consistent for all tokens.
 *
 * @param d
 * If specified, defines a circumscribed set of allowed token domains.
 *
 * @returns
 * Function which recieves an object as a parameter and returns a normalized token
 * specification based on that object.
 *
 * @see https://stackoverflow.com/questions/54598322/how-to-make-typescript-infer-the-keys-of-an-object-but-define-type-of-its-value
 */
const asTokenSpec = <C extends DesignableComponents, D extends RequiredDomains = any>(
  d?: D,
) => (...specs: Partial <TokenSpec<C, D>>[]): Partial<TokenSpec<C, D>> => {
    const [spec0, ...restSpecs] = specs;
    const mergedSpec = mergeWith(spec0, ...restSpecs, tokenMergeCustomizer);
    return d
      // Ensure order of keys in resulting token matches order of domains.
      ? pick(mergedSpec, ...Object.getOwnPropertyNames(d), 'Meta', 'Compose', 'Flow')
      : mergedSpec;
  };

export {
  asTokenSpec,
  as,
  on,
  withDesign,
  extendDesign,
  extendDesignWith,
};
