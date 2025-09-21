import { INode, ISettingField } from '@felce/lowcode-designer';
import { Node, SettingField, getEvent } from '@felce/lowcode-shell';
import { IPublicModelNode, IShellModelFactory } from '@felce/lowcode-types';
import { IPublicModelSettingField } from '../../../types/src/shell/model/setting-field';

class ShellModelFactory implements IShellModelFactory {
  createNode(node: INode | null | undefined): IPublicModelNode | null {
    return Node.create(node);
  }
  createSettingField(prop: ISettingField): IPublicModelSettingField {
    return SettingField.create(prop);
  }
  createEvent = getEvent;
}
export const shellModelFactory = new ShellModelFactory();
