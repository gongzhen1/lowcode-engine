import { IPublicTypeComponentSchema } from '@felce/lowcode-types';

export function isComponentSchema(schema: any): schema is IPublicTypeComponentSchema {
  if (typeof schema === 'object') {
    return schema.componentName === 'Component';
  }
  return false;
}
