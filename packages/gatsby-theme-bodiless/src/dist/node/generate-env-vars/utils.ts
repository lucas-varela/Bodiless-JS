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

/* eslint-disable no-console, no-return-assign, max-len */
import findUp from 'find-up';
import fs, { writeFile } from 'fs';
import { promisify } from 'util';
import git from 'isomorphic-git';
import { Tree } from './type';

const writeFilePromise = promisify(writeFile);

export const writeToFile = async (filePath: string, content: string):Promise<void> => {
  try {
    await writeFilePromise(filePath, content, 'utf8');
  } catch (err) {
    console.error(err);
  }
};

export const jsonToEnv = async (envConfig:Tree, appEnv:string):Promise<void> => {
  let envFileContent:string = '';

  Object.keys(envConfig).forEach((key:string) => envFileContent += `${key}='${envConfig[key]}'\n`);

  await writeToFile(`.env.${appEnv}`, envFileContent);
};

export const findGitFolder = async (): Promise<string> => await findUp('.git', { type: 'directory' }) || '';

export const getGitRepository = async (gitDir: string) => await git.currentBranch({ fs, gitdir: gitDir }) ?? undefined;

export const getCurrentGitBranch = async (): Promise<string> => {
  let gitBranchName = process.env.PLATFORM_BRANCH || '';

  try {
    const gitDir = await findGitFolder();
    const currentBranch = await getGitRepository(gitDir);

    if (currentBranch) {
      gitBranchName = currentBranch;
    } else {
      console.warn('You are in "detached HEAD" state...');
    }
  } catch (e) {
    console.warn(e);
  }

  return gitBranchName;
};
