import { isI18nData, isPlainObject } from './';
import { IPublicTypeTitleConfig } from '../shell/type/title-config';

/**
 * @deprecated use same function from '@felce/lowcode-utils' instead
 */
export function isTitleConfig(obj: any): obj is IPublicTypeTitleConfig {
  return isPlainObject(obj) && !isI18nData(obj);
}
