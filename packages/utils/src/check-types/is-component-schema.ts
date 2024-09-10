import { IPublicTypeComponentSchema } from '@lce/lowcode-types';

export function isComponentSchema(schema: any): schema is IPublicTypeComponentSchema {
  if (typeof schema === 'object') {
    return schema.componentName === 'Component';
  }
  return false;
}
