export interface IPublicModelArea<C, T> {
  isEmpty(): boolean;
  add(config: T | C): T;
  remove(config: T | string): number;
  setVisible(flag: boolean): void;
  hide(): void;
  show(): void;
}
