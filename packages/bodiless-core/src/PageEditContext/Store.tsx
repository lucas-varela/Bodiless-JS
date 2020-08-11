/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  action, computed, observable, ObservableMap,
} from 'mobx';
import { isEqual } from 'lodash';
import {
  PageEditContextInterface,
  PageEditStoreInterface,
  TPageOverlayStore,
} from './types';
import { TMenuOption } from '../Types/ContextMenuTypes';
import {
  getFromSessionStorage,
  saveToSessionStorage,
} from '../SessionStorage';
import { TOverlaySettings } from '../Types/PageOverlayTypes';

/**
 * @private
 * Helper function to cravel the context trail, invoking a callback on each context
 * and accumulating the results.
 * @param accumulator The accumulated results.
 * @param callback The callback which returns the results for each context.
 * @param context The context on which to execute the callback.
 */
const reduceRecursively = <T extends any>(
  accumulator: T[],
  callback: (c: PageEditContextInterface) => T[],
  context?: PageEditContextInterface,
): T[] => {
  if (!context) return [];
  const newItems = callback(context);
  const newAccumulator = [...newItems, ...accumulator];
  return context.parent
    ? reduceRecursively(newAccumulator, callback, context.parent)
    : newAccumulator;
};

/**
 * @private
 *
 * A proxy around a context menu option which defers accessing the option data
 * until a property is accessed.
 */
const createMenuOptionProxy = (
  group: string,
  name: string,
  map: Map<string, TMenuOption>,
): TMenuOption => new Proxy<TMenuOption>({ name, group }, {
  get: (target, prop: keyof(TMenuOption)) => {
    switch (prop) {
      case 'group': return group;
      case 'name': return name;
      default: return map.get(name)![prop];
    }
  },
});

export const defaultOverlaySettings: TOverlaySettings = {
  isActive: false,
  hasCloseButton: false,
  hasSpinner: true,
  message: '',
  maxTimeoutInSeconds: null,
  onClose: () => {},
};

/**
 * @private
 *
 * Holds the current UI state for the editor.
 */
export class PageEditStore implements PageEditStoreInterface {
  @observable activeContext: PageEditContextInterface | undefined = undefined;

  @observable isEdit = getFromSessionStorage('isEdit', false);

  @observable isPositionToggled = getFromSessionStorage('isPositionToggled', false);

  @observable pageOverlay: TPageOverlayStore = {
    data: {
      ...defaultOverlaySettings,
    },
    timeoutId: 0,
  };

  @observable
  optionMap = new Map() as ObservableMap<string, ObservableMap<string, TMenuOption>>;

  @action reset() {
    this.activeContext = undefined;
    this.isEdit = getFromSessionStorage('isEdit', false);
    this.isPositionToggled = getFromSessionStorage('isPositionToggled', false);
    this.optionMap.clear();
    this.pageOverlay = {
      data: {
        ...defaultOverlaySettings,
      },
      timeoutId: 0,
    };
  }

  constructor(activeContext?: PageEditContextInterface) {
    if (activeContext) {
      this.setActiveContext(activeContext);
    }
  }

  @action
  setActiveContext(context?: PageEditContextInterface) {
    if (context) this.activeContext = context;

    // Travel the context trail, updating options for each context.
    const keys: string[] = [];
    for (let c = this.activeContext; c; c = c.parent) {
      keys.push(...this.updateMenuOptions(c));
    }

    // Ensure order is correct and remove obsolete entries.
    const newTrail = new Map();
    keys.reverse().forEach(key => {
      newTrail.set(key, this.optionMap.get(key));
    });
    // Note: requires mobx >5.15.5 to set order correctly.
    // See https://github.com/mobxjs/mobx/issues/1980
    // And https://codesandbox.io/s/wizardly-resonance-u97jm?file=/src/index.js
    this.optionMap.replace(newTrail);
  }

  @action
  updateMenuOptions(context: PageEditContextInterface) {
    if (!this.optionMap.has(context.id)) {
      // We create a shallow map for each context bc we expect the
      // items to be memoized, so we need only compare references.
      // this.optionMap.set(context.id, observable.map({}, { deep: false }));
      this.optionMap.set(context.id, observable.map({}));
    }
    const map = this.optionMap.get(context.id);
    const keys = new Set();
    [context, ...context.peerContexts].forEach(c => {
      // Update all items in the map
      c.getMenuOptions().forEach(op => {
        keys.add(op.name);
        const existing = map!.get(op.name);
        if (existing) {
          const equal = isEqual(existing, op);
          if (equal) return;
        }
        map!.set(op.name, op);
      });
    });
    // Delete any items which are no longer present.
    map!.forEach(($, key) => {
      if (!keys.has(key)) map!.delete(key);
    });
    return [context.id];
  }

  @computed get contextMenuOptions(): TMenuOption[] {
    const options: TMenuOption[] = [];
    const contextIds = Array.from(this.optionMap.keys());
    contextIds.forEach(contextId => {
      const optionMap = this.optionMap.get(contextId);
      Array.from(optionMap!.keys()).forEach(optionName => {
        options.push(createMenuOptionProxy(contextId, optionName, optionMap!));
      });
    });
    return options;
  }

  @action toggleEdit(on? : boolean) {
    if (on === undefined) {
      this.isEdit = !this.isEdit;
    } else {
      this.isEdit = Boolean(on);
    }

    saveToSessionStorage('isEdit', this.isEdit);
  }

  @action togglePosition(on? : boolean) {
    if (on === undefined) {
      this.isPositionToggled = !this.isPositionToggled;
    } else {
      this.isPositionToggled = Boolean(on);
    }

    saveToSessionStorage('isPositionToggled', this.isPositionToggled);
  }

  @computed get contextTrail() {
    return reduceRecursively<string>([], context => [context.id], this.activeContext);
  }

  @observable areLocalTooltipsDisabled = false;

  @action toggleLocalTooltipsDisabled(isDisabled?: boolean) {
    if (isDisabled === undefined) {
      this.areLocalTooltipsDisabled = !this.areLocalTooltipsDisabled;
    } else {
      this.areLocalTooltipsDisabled = isDisabled;
    }
  }
}

export const defaultStore = new PageEditStore();
