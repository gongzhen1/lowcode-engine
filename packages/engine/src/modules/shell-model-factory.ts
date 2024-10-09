import { INode, ISettingField } from '@felce/lowcode-designer';
import { IShellModelFactory, IPublicModelNode } from '@felce/lowcode-types';
import { IPublicModelSettingField } from '../../../types/src/shell/model/setting-field';
import { Node, SettingField } from '@felce/lowcode-shell';
class ShellModelFactory implements IShellModelFactory {
  createNode(node: INode | null | undefined): IPublicModelNode | null {
    return Node.create(node);
  }
  createSettingField(prop: ISettingField): IPublicModelSettingField {
    return SettingField.create(prop);
  }
}
export const shellModelFactory = new ShellModelFactory();
