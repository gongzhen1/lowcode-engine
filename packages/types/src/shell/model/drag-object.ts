import { IPublicEnumDragObjectType } from '../enum';
import { IPublicTypeNodeSchema } from '../type';
import { IPublicModelNode } from './node';

export class IPublicModelDragObject<Node = IPublicModelNode> {
  type: IPublicEnumDragObjectType.Node | IPublicEnumDragObjectType.NodeData;

  data: IPublicTypeNodeSchema | IPublicTypeNodeSchema[] | null;

  nodes: (Node | null)[] | null;
}
