import { IPublicModelSettingField } from '../model';
import { IPublicTypeCompositeValue, IPublicTypeCustomView, IPublicTypeTitleContent } from './';

export interface IPublicTypeRegisteredSetter {
  component: IPublicTypeCustomView;
  defaultProps?: object;
  title?: IPublicTypeTitleContent;

  /**
   * for MixedSetter to check this setter if available
   */
  condition?: (field: IPublicModelSettingField) => boolean;
  /**
   * 给 MixedSetter，切换值时声明类型
   *
   * @todo 物料协议推进
   */
  valueType?: IPublicTypeCompositeValue[];

  /**
   * for MixedSetter to manual change to this setter
   */
  initialValue?: any | ((field: IPublicModelSettingField) => any);
  recommend?: boolean;
  // 标识是否为动态 setter，默认为 true
  isDynamic?: boolean;
}
