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

/* eslint-disable no-console */
import webpack from 'webpack';
import path from 'path';

const REGEXP = /\.bl-edit/;
const REPLACEMENT = '.static';

type ExcludeSetting = string[] | RegExp;

type PluginOptions = {
  enabled?: boolean
  logging?: boolean
  exclude?: ExcludeSetting;
};

const createLogger = (log = true) => (message: string) => {
  if (log) console.log(message);
};

const requestIsExcluded = (requestedFile: string, exclude?: ExcludeSetting) => {
  if (!exclude || (Array.isArray(exclude) && !exclude.length)) return false;

  return requestedFile.match(exclude instanceof RegExp ? exclude : new RegExp(exclude.join('|')));
};

const createStaticReplacementPlugin = ({ exclude, logging }: PluginOptions) => {
  const log = createLogger(logging);

  return new webpack.NormalModuleReplacementPlugin(
    REGEXP,
    resource => {
      const requestedFile = path.join(resource.context, resource.request);

      if (requestIsExcluded(requestedFile, exclude)) {
        log(`[Static replacement] Skipped excluded import for file ${requestedFile}\n`);
        return;
      }

      const newRequest = resource.request.replace(REGEXP, REPLACEMENT);
      const newResource = path.join(resource.context, newRequest);
      try {
        // Ensure that the replacement exists and is resolvable.
        require.resolve(newResource);

        log(`[Static replacement] Replacing import in ${resource.contextInfo.issuer}`);
        log(` ↳ ${resource.request} → ${newRequest}\n`);

        // eslint-disable-next-line no-param-reassign
        resource.request = newRequest;
      } catch (e) {
        if (logging) {
          console.warn(`[Static replacement] Not replacing ${resource.request}: unable to resolve ${newResource}`);
        }
      }
    },
  );
};

export const addStaticReplacementPlugin = (
  webpackConfig: any = {}, pluginOptions: PluginOptions = {}
) => {
  if (pluginOptions.enabled === false) {
    console.log('Bodiless static replacement plugin disabled, no static files will be resolved.');

    return webpackConfig;
  }

  return {
    ...webpackConfig,
    plugins: [
      ...(webpackConfig.plugins || []),
      createStaticReplacementPlugin(pluginOptions),
    ],
  };
};
