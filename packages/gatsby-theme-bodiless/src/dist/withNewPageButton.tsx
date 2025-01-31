/**
 * Copyright © 2020 Johnson & Johnson
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

/* eslint-disable no-alert */
import React, {
  useCallback, useEffect, useState,
  ComponentType,
  HTMLProps,
} from 'react';
import {
  contextMenuForm,
  useMenuOptionUI,
  useEditContext,
  withMenuOptions,
  ContextSubMenu,
} from '@bodiless/core';
import BackendClient from './BackendClient';
import handle from './ResponseHandler';
import verifyPage from './PageVerification';
import { useGatsbyPageContext } from './GatsbyPageProvider';
import {
  PageState,
  PageStatus,
  DEFAULT_PAGE_TEMPLATE,
  Client,
  getPathValue,
  PageForm,
} from './PageOperations';

const createPage = async ({ path, client, template } : any) => {
  // Create the page.
  const result = await handle(client.savePage(path, template));
  // If the page was created successfully:
  if (result.response) {
    // Verify the creation of the page.
    const isPageVerified = await verifyPage(path);
    if (!isPageVerified) {
      const errorMessage = `Unable to verify page creation.
        It is likely that your new page was created but is not yet available.
        Click ok to visit the new page; if it does not load, wait a while and reload.`;
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.resolve(path);
  }
  if (result.message) {
    return Promise.reject(new Error(result.message));
  }
  return Promise.reject(new Error('An internal error occurred. Please try again later.'));
};

const formPageAdd = (client: Client) => contextMenuForm({
  submitValues: ({ keepOpen }: any) => keepOpen,
  hasSubmit: ({ keepOpen }: any) => keepOpen,
})(({ formState, formApi } : any) => {
  const { ComponentFormText } = useMenuOptionUI();
  const {
    submits, invalid, values,
  } = formState;
  const [state, setState] = useState<PageStatus>({
    status: PageState.Init,
  });
  const context = useEditContext();
  const { template } = values;
  const path = getPathValue(values);
  useEffect(() => {
    // If the form is submitted and valid then lets try to creat a page.
    if (submits && path && invalid === false) {
      context.showPageOverlay({ hasSpinner: false });
      setState({ status: PageState.Pending });
      // Create the page.
      createPage({ path, client, template })
        .then((pagePath: string) => {
          if (pagePath) {
            setState({ status: PageState.Complete, pagePath });
          }
        })
        .catch((err: Error) => {
          setState({ status: PageState.Errored, errorMessage: err.message });
        })
        .finally(() => {
          context.hidePageOverlay();
          formApi.setValue('keepOpen', false);
        });
    }
  }, [submits]);
  const { status, errorMessage, pagePath } = state;
  const { subPageTemplate } = useGatsbyPageContext();
  const currentTemplate = subPageTemplate || DEFAULT_PAGE_TEMPLATE;
  return (
    <>
      <ComponentFormText type="hidden" field="keepOpen" initialValue />
      <PageForm
        formTitle="Add a Blank Page"
        status={status}
        errorMessage={errorMessage}
        completeMessage="Click here to visit the new page"
        titlePending="Creating Page"
        pagePath={pagePath}
        linkId="new-page-link"
        FormFields={(Label: ComponentType<HTMLProps<HTMLLabelElement>>) => (
          <>
            <Label>Template</Label>
            <ComponentFormText
              field="template"
              disabled
              initialValue={currentTemplate}
            />
          </>
        )}
      />
    </>
  );
});

const defaultClient = new BackendClient();

const useMenuOptions = () => {
  const context = useEditContext();

  const menuOptions = [
    {
      name: 'page-group',
      icon: 'description',
      label: 'Page',
      Component: ContextSubMenu,
    },
    {
      name: 'newpage',
      icon: 'note_add',
      label: 'New',
      group: 'page-group',
      isDisabled: useCallback(() => !context.isEdit, []),
      handler: () => formPageAdd(defaultClient),
    },
  ];
  return menuOptions;
};

const withNewPageButton = withMenuOptions({
  useMenuOptions,
  name: 'NewPage',
  root: true,
});

export default withNewPageButton;
