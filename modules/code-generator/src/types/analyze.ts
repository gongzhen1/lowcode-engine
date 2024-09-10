import type { IPublicTypeContainerSchema } from '@lce/lowcode-types';

export interface ICompAnalyzeResult {
  isUsingRef: boolean;
}

export type TComponentAnalyzer = (container: IPublicTypeContainerSchema) => ICompAnalyzeResult;
