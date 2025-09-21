import { IPublicTypeActionContentObject } from '../shell';

/**
 * @deprecated use same function from '@felce/lowcode-utils' instead
 */
export function isActionContentObject(
  obj: any,
): obj is IPublicTypeActionContentObject {
  return obj && typeof obj === 'object';
}
