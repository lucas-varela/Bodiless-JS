/**
 * Copyright © 2022 Johnson & Johnson
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

import { flowIf } from '@bodiless/fclasses';
import { useNode } from '@bodiless/core';
import { asElementToken } from '@bodiless/vital-elements';
import { vitalEditorPlainBase, withAutoSuperscript } from '@bodiless/vital-editors';

/* Test case to get superscript working on /styleguide/editors-monofont */
const isEditorMonoRepo = () => useNode().node.pagePath === '/styleguide/editors-monofont/';

const Default = asElementToken({
  ...vitalEditorPlainBase.Default,
  // if specific page will turn on auto superscripting for this page.
  Flow: flowIf(isEditorMonoRepo),
  Behavior: {
    _: withAutoSuperscript('®™©', 'align-baseline'),
  },
});

export default {
  ...vitalEditorPlainBase,
  Default,
};
